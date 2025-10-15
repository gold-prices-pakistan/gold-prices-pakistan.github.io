import requests
from bs4 import BeautifulSoup
import json
import re
from datetime import datetime

# City mapping: code -> full city name
CITY_MAPPING = {
    "khi": "karachi", "lhr": "lahore"
}

def scrape_city_data(city_code):
    """
    Scrapes gold rates for a specific city
    """
    if city_code.lower() not in CITY_MAPPING:
        print(f"❌ Unknown city code: {city_code}")
        return None
    
    city_name = CITY_MAPPING[city_code.lower()]
    url = f"https://gold.pk/gold-rates-{city_name}-{city_code.lower()}.php"
    
    print(f"📥 Scraping {city_name.title()} ({city_code.upper()})...")
    
    try:
        response = requests.get(url)
        response.raise_for_status()
        
        soup = BeautifulSoup(response.content, 'html.parser')
        
        # Find the first section-top-border div
        section = soup.find('div', class_='section-top-border')
        
        if not section:
            print(f"  ❌ Could not find section-top-border div for {city_name}")
            return None
        
        # Find all goldratehome paragraphs in this section
        goldrate_paragraphs = section.find_all('p', class_='goldratehome')
        
        if len(goldrate_paragraphs) < 3:
            print(f"  ⚠️  Warning: Found only {len(goldrate_paragraphs)} prices for {city_name}")
        
        # Extract the 3 prices
        rates = []
        weight_names = ["1 Tola", "10 Gram", "1 Gram"]
        
        for i, gold_p in enumerate(goldrate_paragraphs[:3]):
            price_text = gold_p.get_text(strip=True)
            
            # Extract price
            price_match = re.search(r'Rs\.\s*([\d,]+\.?\d*)', price_text)
            if price_match:
                price_str = price_match.group(1).replace(',', '')
                try:
                    price = float(price_str)
                except ValueError:
                    price = 0.0
            else:
                price = 0.0
            
            rates.append({
                "weight": weight_names[i] if i < len(weight_names) else f"Unknown {i+1}",
                "price": price,
                "karat": "24 Karat"
            })
        
        # ===== Extract Daily Price Matrix =====
        daily_prices = []
        
        # Find progress-table-wrap div (first one contains historical data)
        progress_table_wrap = soup.find('div', class_='progress-table-wrap')
        
        if progress_table_wrap:
            # Find all table rows with class 'table-row text14'
            table_rows = progress_table_wrap.find_all('div', class_='table-row text14')
            
            for row in table_rows:
                columns = row.find_all('div', class_='column15')
                
                if len(columns) >= 7:  # Should have 7 columns: date + 6 prices
                    date_text = columns[0].get_text(strip=True)
                    
                    # Extract prices from remaining columns
                    # Order: 10 grams, Tola, 24K/gram, 22K/gram, 21K/gram, 18K/gram
                    prices_data = []
                    for col in columns[1:7]:
                        price_text = col.get_text(strip=True)
                        try:
                            price = float(price_text.replace(',', ''))
                        except ValueError:
                            price = 0.0
                        prices_data.append(price)
                    
                    daily_prices.append({
                        "date": date_text,
                        "10_gram": prices_data[0] if len(prices_data) > 0 else 0.0,
                        "1_tola": prices_data[1] if len(prices_data) > 1 else 0.0,
                        "24k_per_gram": prices_data[2] if len(prices_data) > 2 else 0.0,
                        "22k_per_gram": prices_data[3] if len(prices_data) > 3 else 0.0,
                        "21k_per_gram": prices_data[4] if len(prices_data) > 4 else 0.0,
                        "18k_per_gram": prices_data[5] if len(prices_data) > 5 else 0.0
                    })
        
        city_data = {
            "city_code": city_code.upper(),
            "city_name": city_name.title(),
            "url": url,
            "rates": rates,
            "daily_price_history": {
                "total_days": len(daily_prices),
                "prices": daily_prices
            }
        }
        
        print(f"  ✓ Scraped {len(rates)} current rates and {len(daily_prices)} days of historical data for {city_name.title()}")
        return city_data
        
    except requests.RequestException as e:
        print(f"  ❌ Error fetching {city_name}: {e}")
        return None
    except Exception as e:
        print(f"  ❌ Error processing {city_name}: {e}")
        import traceback
        traceback.print_exc()
        return None

def scrape_all_cities():
    """
    Scrapes gold rates for all cities in CITY_MAPPING
    """
    print("🏙️  Starting city-wise gold rate scraper...")
    print(f"Cities to scrape: {', '.join([f'{code.upper()} ({name.title()})' for code, name in CITY_MAPPING.items()])}")
    print("="*60)
    
    all_city_data = []
    
    for city_code in CITY_MAPPING.keys():
        city_data = scrape_city_data(city_code)
        if city_data:
            all_city_data.append(city_data)
    
    # Create final JSON structure
    output_data = {
        "scraped_at": datetime.now().isoformat(),
        "total_cities": len(all_city_data),
        "cities": all_city_data
    }
    
    # Save to JSON file
    output_file = "scraper-city-data.json"
    with open(output_file, 'w', encoding='utf-8') as f:
        json.dump(output_data, f, indent=2, ensure_ascii=False)
    
    print("\n" + "="*60)
    print(f"✓ Successfully scraped {len(all_city_data)} cities")
    print(f"✓ Saved to {output_file}")
    print("="*60)
    
    # Print summary
    for city in all_city_data:
        print(f"\n{city['city_name']} ({city['city_code']}):")
        print(f"  Current Rates:")
        for rate in city['rates']:
            print(f"    {rate['karat']} - {rate['weight']}: Rs. {rate['price']:,.2f}")
        
        print(f"  Daily Price History: {city['daily_price_history']['total_days']} days")
        if city['daily_price_history']['prices']:
            # Show first 3 days
            print(f"    Latest entries:")
            for daily in city['daily_price_history']['prices'][:3]:
                print(f"      {daily['date']}: 1 Tola = Rs. {daily['1_tola']:,.2f}, 24K/gram = Rs. {daily['24k_per_gram']:,.2f}")
    
    return output_data

if __name__ == "__main__":
    scrape_all_cities()

