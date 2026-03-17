#!/bin/bash
for file in /app/frontend/src/pages/{Contact,Distributors,Furniture}Page.jsx; do
  sed -i 's|className="h-10 sm:h-12 w-auto"|className="h-10 sm:h-12 w-auto"\n            />\n          </button|g' "$file"
done