import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime

def scrape_gold_data():
    """
    Scrapes current gold rates and historical chart data from gold.pk website
    Saves everything to a single gold_data.json file
    """
    url = "https://gold.pk/gold-rates-pakistan.php"
    
    try:
        # Send GET request to the website
        response = requests.get(url)
        response.raise_for_status()
        
        # Parse HTML content
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # ===== Extract Current Gold Rates =====
        section = soup.find('div', class_='section-top-border')
        
        if not section:
            print("Could not find section-top-border div")
            return None
        
        # Extract date from the span tag with style attribute
        date_span = section.find('span', style=True)
        if date_span:
            date_info = date_span.get_text(strip=True)
        else:
            date_info = "Date not found"
        
        # Find all goldratehome paragraphs
        goldrate_paragraphs = section.find_all('p', class_='goldratehome')
        
        # Extract and parse prices
        gold_rates = []
        for gold_p in goldrate_paragraphs[:3]:  # Get first 3 entries
            price_text = gold_p.get_text(strip=True)
            
            # Extract price
            price_match = re.search(r'Rs\.\s*([\d,]+\.?\d*)', price_text)
            price = price_match.group(1) if price_match else "N/A"
            
            # Get the next <p> sibling which contains karat and weight info
            info_p = gold_p.find_next_sibling('p')
            if info_p:
                info_text = info_p.get_text(strip=True)
                
                # Extract karat
                karat_match = re.search(r'(\d+\s*Karat)', info_text)
                karat = karat_match.group(1) if karat_match else "N/A"
                
                # Extract weight
                weight_match = re.search(r'\(([^)]+)\)', info_text)
                weight = weight_match.group(1) if weight_match else "N/A"
            else:
                karat = "N/A"
                weight = "N/A"
            
            gold_rates.append({
                "price": price,
                "karat": karat,
                "weight": weight
            })
        
        # ===== Extract Historical Chart Data =====
        html_text = response.text
        
        # Extract xaxis categories (dates)
        categories_match = re.search(r"categories:\s*\[(.*?)\]", html_text, re.DOTALL)
        dates = []
        if categories_match:
            categories_str = categories_match.group(1)
            dates = re.findall(r"'([^']+)'", categories_str)
        
        # Extract yaxis data (prices)
        data_match = re.search(r"name:\s*'Per Tola Gold Rs\.',\s*data:\s*\[([0-9,\s]+)\]", html_text, re.DOTALL)
        prices = []
        if data_match:
            data_str = data_match.group(1)
            prices = [int(p.strip()) for p in data_str.split(',') if p.strip()]
        
        # Map dates to prices
        history = []
        for i in range(min(len(dates), len(prices))):
            history.append({
                "date": dates[i],
                "price": prices[i]
            })
        
        # ===== Extract Price Matrix (Different Karats) =====
        price_matrix = {}
        progress_table = soup.find('div', class_='progress-table')
        
        if progress_table:
            # Find all table rows (skip the header)
            table_rows = progress_table.find_all('div', class_='table-row')
            
            for row in table_rows:
                columns = row.find_all('div', class_=True)
                
                if len(columns) >= 6:  # Should have weight name + 5 karat prices
                    # First column is the weight name
                    weight_text = columns[0].get_text(strip=True)
                    
                    # Clean up weight name (e.g., "per tola Gold Price" -> "1 Tola")
                    if 'tola' in weight_text.lower():
                        weight_name = "1 Tola"
                    elif '10 gram' in weight_text.lower():
                        weight_name = "10 Gram"
                    elif 'per gram' in weight_text.lower() or '1 gram' in weight_text.lower():
                        weight_name = "1 Gram"
                    elif 'ounce' in weight_text.lower():
                        weight_name = "1 Ounce"
                    else:
                        weight_name = weight_text
                    
                    # Extract prices for each karat (24K, 22K, 21K, 18K, 12K)
                    prices_list = []
                    for col in columns[1:6]:  # Next 5 columns are prices
                        price_text = col.get_text(strip=True)
                        # Extract numeric value
                        price_match = re.search(r'Rs\.\s*([\d,]+\.?\d*)', price_text)
                        if price_match:
                            price_str = price_match.group(1).replace(',', '')
                            try:
                                price_val = float(price_str)
                                prices_list.append(price_val)
                            except ValueError:
                                prices_list.append(0.0)
                        else:
                            prices_list.append(0.0)
                    
                    if prices_list:
                        price_matrix[weight_name] = prices_list
        
        # ===== Create Combined JSON Structure =====
        combined_data = {
            "scraped_at": datetime.now().isoformat(),
            "current_date": date_info,
            "current_rates": gold_rates,
            "price_matrix": price_matrix,
            "historical_data": {
                "total_records": len(history),
                "records": history
            }
        }
        
        # Save to single JSON file
        output_file = "scraper-live-data.json"
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(combined_data, f, indent=2, ensure_ascii=False)
        
        print(f"✓ Successfully scraped and saved data to {output_file}")
        print(f"  - Current rates: {len(gold_rates)} entries")
        print(f"  - Price matrix: {len(price_matrix)} weight categories")
        print(f"  - Historical data: {len(history)} records")
        print("\n" + "="*60)
        print("CURRENT RATES:")
        print("="*60)
        for rate in gold_rates:
            print(f"  {rate['karat']} ({rate['weight']}): Rs. {rate['price']}")
        
        print("\n" + "="*60)
        print("PRICE MATRIX (24K, 22K, 21K, 18K, 12K):")
        print("="*60)
        for weight, prices in price_matrix.items():
            prices_str = ", ".join([f"Rs. {p:,.2f}" for p in prices])
            print(f"  {weight}: {prices_str}")
        
        print("\n" + "="*60)
        print("HISTORICAL DATA (First 5 & Last 5):")
        print("="*60)
        for record in history[:5]:
            print(f"  {record['date']}: Rs. {record['price']}")
        if len(history) > 10:
            print("  ...")
        for record in history[-5:]:
            print(f"  {record['date']}: Rs. {record['price']}")
        
        return combined_data
        
    except requests.RequestException as e:
        print(f"Error fetching the website: {e}")
        return None
    except Exception as e:
        print(f"Error processing data: {e}")
        import traceback
        traceback.print_exc()
        return None

if __name__ == "__main__":
    scrape_gold_data()

