#!/bin/bash

# Create the categories directory if it doesn't exist
mkdir -p public/images/categories

# Download digital image
echo "Downloading digital image..."
curl -L "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/digital.jpg"

# Download finance image
echo "Downloading finance image..."
curl -L "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/finance.jpg"

# Download construction image
echo "Downloading construction image..."
curl -L "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/construction.jpg"

# Download healthcare image
echo "Downloading healthcare image..."
curl -L "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/healthcare.jpg"

# Download logistics image
echo "Downloading logistics image..."
curl -L "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/logistics.jpg"

# Download manufacturing image
echo "Downloading manufacturing image..."
curl -L "https://images.unsplash.com/photo-1565939974392-25c755d9e4db?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/manufacturing.jpg"

# Download research image
echo "Downloading research image..."
curl -L "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/research.jpg"

# Download education image
echo "Downloading education image..."
curl -L "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&h=600&q=80" -o "public/images/categories/education.jpg"

echo "Image download complete!" 