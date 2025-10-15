# Gold Prices Pakistan - Docker Image
# Nginx-based static site serving

FROM nginx:alpine

# Set working directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*

# Copy application files
COPY index.html .
COPY styles.css .
COPY app.js .
COPY manifest.json .
COPY sw.js .
COPY robots.txt .
COPY sitemap.xml .

# Copy data directory with scraped JSON files
COPY data/ ./data/

# Copy icons (PWA and favicons)
COPY icon-192.png .
COPY icon-512.png .

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --quiet --tries=1 --spider http://localhost/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

