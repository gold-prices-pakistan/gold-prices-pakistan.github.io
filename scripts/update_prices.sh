#!/usr/bin/env bash

API_KEY="${RAPIDAPI_KEY}"

curl --silent \
  --request GET \
  --url "https://gold-prices-pakistan.p.rapidapi.com/live" \
  --header "x-rapidapi-host: gold-prices-pakistan.p.rapidapi.com" \
  --header "x-rapidapi-key: ${API_KEY}" \
  -o live-prices.json

