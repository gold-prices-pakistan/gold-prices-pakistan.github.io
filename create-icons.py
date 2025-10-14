#!/usr/bin/env python3
"""
Generate PWA icons for Gold Prices Pakistan
Creates 192x192 and 512x512 PNG icons with golden theme
"""

try:
    from PIL import Image, ImageDraw, ImageFont
    PIL_AVAILABLE = True
except ImportError:
    PIL_AVAILABLE = False
    print("PIL not available, will create placeholder icons")

def create_icon(size):
    """Create a gold-themed icon"""
    # Create image with golden gradient background
    img = Image.new('RGB', (size, size), '#F4E4BC')
    draw = ImageDraw.Draw(img)
    
    # Draw gradient effect
    for i in range(size):
        alpha = i / size
        color = tuple([
            int(244 + (212 - 244) * alpha),  # R: 244 -> 212
            int(228 + (175 - 228) * alpha),  # G: 228 -> 175
            int(188 + (55 - 188) * alpha)    # B: 188 -> 55
        ])
        draw.line([(0, i), (size, i)], fill=color)
    
    # Draw gold bar shape
    bar_width = int(size * 0.6)
    bar_height = int(size * 0.35)
    x = (size - bar_width) // 2
    y = (size - bar_height) // 2
    
    # Shadow
    shadow_offset = int(size * 0.01)
    draw.rectangle([x + shadow_offset, y + shadow_offset, 
                    x + bar_width + shadow_offset, y + bar_height + shadow_offset],
                   fill='#00000040')
    
    # Gold bar with gradient
    for i in range(bar_height):
        alpha = i / bar_height
        color = tuple([
            int(255 + (218 - 255) * alpha),  # R
            int(215 + (165 - 215) * alpha),  # G
            int(0 + (32 - 0) * alpha)        # B
        ])
        draw.line([(x, y + i), (x + bar_width, y + i)], fill=color)
    
    # Border
    border_width = max(2, int(size * 0.01))
    draw.rectangle([x, y, x + bar_width, y + bar_height],
                   outline='#B8860B', width=border_width)
    
    # Text "GOLD"
    font_size = int(size * 0.12)
    try:
        # Try to use a nice font
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", font_size)
    except:
        # Fallback to default
        font = ImageFont.load_default()
    
    text = "GOLD"
    # Get text bounding box
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    text_x = (size - text_width) // 2
    text_y = (size - text_height) // 2 - int(size * 0.02)
    
    draw.text((text_x, text_y), text, fill='#8B6914', font=font)
    
    # Highlight
    highlight_x = x + int(bar_width * 0.1)
    highlight_y = y + int(bar_height * 0.1)
    highlight_w = int(bar_width * 0.3)
    highlight_h = int(bar_height * 0.2)
    draw.rectangle([highlight_x, highlight_y, 
                    highlight_x + highlight_w, highlight_y + highlight_h],
                   fill='#FFFFFF4D')
    
    return img

def create_placeholder_icon(size):
    """Create a simple placeholder if PIL is not available"""
    # Create a simple golden colored square
    import struct
    
    # PNG header
    png_data = bytearray()
    
    # This is a minimal valid PNG - just a solid color
    # For simplicity, we'll create a very basic icon
    print(f"Creating minimal placeholder icon {size}x{size}")
    
    # Just create an empty file that Docker can use
    return None

if __name__ == '__main__':
    if PIL_AVAILABLE:
        print("Creating icons with PIL...")
        
        # Create 192x192 icon
        print("Generating icon-192.png...")
        icon_192 = create_icon(192)
        icon_192.save('icon-192.png', 'PNG')
        print("✓ icon-192.png created")
        
        # Create 512x512 icon
        print("Generating icon-512.png...")
        icon_512 = create_icon(512)
        icon_512.save('icon-512.png', 'PNG')
        print("✓ icon-512.png created")
        
        print("\n✅ Icons created successfully!")
    else:
        print("⚠️  PIL/Pillow not installed")
        print("Creating minimal placeholder icons...")
        
        # Create minimal valid PNG files
        # 1x1 golden pixel PNG
        golden_pixel_png = bytes([
            0x89, 0x50, 0x4E, 0x47, 0x0D, 0x0A, 0x1A, 0x0A,  # PNG signature
            0x00, 0x00, 0x00, 0x0D, 0x49, 0x48, 0x44, 0x52,  # IHDR chunk
            0x00, 0x00, 0x00, 0x01, 0x00, 0x00, 0x00, 0x01,  # 1x1
            0x08, 0x02, 0x00, 0x00, 0x00, 0x90, 0x77, 0x53,
            0xDE, 0x00, 0x00, 0x00, 0x0C, 0x49, 0x44, 0x41,  # IDAT chunk
            0x54, 0x08, 0xD7, 0x63, 0xD4, 0xAF, 0x37, 0x00,  # Golden color data
            0x00, 0x03, 0x00, 0x01, 0x42, 0xE5, 0x88, 0x51,
            0x00, 0x00, 0x00, 0x00, 0x49, 0x45, 0x4E, 0x44,  # IEND chunk
            0xAE, 0x42, 0x60, 0x82
        ])
        
        with open('icon-192.png', 'wb') as f:
            f.write(golden_pixel_png)
        print("✓ icon-192.png created (placeholder)")
        
        with open('icon-512.png', 'wb') as f:
            f.write(golden_pixel_png)
        print("✓ icon-512.png created (placeholder)")
        
        print("\n✅ Placeholder icons created!")
        print("💡 For better icons, install Pillow: pip3 install Pillow")

