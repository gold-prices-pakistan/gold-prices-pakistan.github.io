#!/bin/bash

# Gold Prices Pakistan - Local Testing Script
# This script helps you quickly test the application locally

set -e

echo "🏆 Gold Prices Pakistan - Local Testing"
echo "========================================"
echo ""

# Check if command exists
command_exists() {
    command -v "$1" >/dev/null 2>&1
}

# Option 1: Docker
if command_exists docker; then
    echo "✅ Docker found!"
    echo ""
    echo "Starting with Docker Compose..."
    echo "URL: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    docker-compose up --build

# Option 2: Python 3
elif command_exists python3; then
    echo "✅ Python 3 found!"
    echo ""
    echo "Starting with Python HTTP Server..."
    echo "URL: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    python3 -m http.server 8080

# Option 3: Python 2
elif command_exists python; then
    echo "✅ Python found!"
    echo ""
    echo "Starting with Python HTTP Server..."
    echo "URL: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    python -m SimpleHTTPServer 8080

# Option 4: PHP
elif command_exists php; then
    echo "✅ PHP found!"
    echo ""
    echo "Starting with PHP Built-in Server..."
    echo "URL: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    php -S localhost:8080

# Option 5: Node.js npx serve
elif command_exists npx; then
    echo "✅ Node.js (npx) found!"
    echo ""
    echo "Starting with npx serve..."
    echo "URL: http://localhost:8080"
    echo ""
    echo "Press Ctrl+C to stop"
    echo ""
    npx --yes serve -p 8080

else
    echo "❌ No suitable HTTP server found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - Docker: https://www.docker.com/get-started"
    echo "  - Python: https://www.python.org/downloads/"
    echo "  - PHP: https://www.php.net/downloads"
    echo "  - Node.js: https://nodejs.org/"
    echo ""
    echo "Or simply open index.html in your browser"
    echo "(PWA features require a proper HTTP server)"
    exit 1
fi


