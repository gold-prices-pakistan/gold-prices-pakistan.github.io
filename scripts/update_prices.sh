#!/usr/bin/env bash

API_KEY="${RAPIDAPI_KEY}"

if [ -z "$API_KEY" ]; then
  echo "❌ Error: RAPIDAPI_KEY is not set"
  exit 1
fi

echo "🔄 Fetching live gold prices from RapidAPI..."

# Fetch live prices (outputs to live-prices.json for testing)
curl --silent \
  --request GET \
  --url "https://gold-prices-pakistan.p.rapidapi.com/live" \
  --header "x-rapidapi-host: gold-prices-pakistan.p.rapidapi.com" \
  --header "x-rapidapi-key: ${API_KEY}" \
  -o live-prices.json

# Check if file was created and is not empty
if [ -s live-prices.json ]; then
  echo "✅ Successfully fetched live prices"
  echo "📊 Output: live-prices.json"
  echo "📄 Preview:"
  cat live-prices.json | head -n 10
  exit 0
else
  echo "❌ Failed to fetch prices"
  exit 1
fi
