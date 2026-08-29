sed -i '/id: '\''t1e5'\''/,/isAvailable: false/ s/isAvailable: false/isAvailable: true/' src/data/catalog.ts
sed -i '/id: '\''t1e5'\''/,/isAvailable: true/ s/isAvailable: true/durationLabel: '\''12 min'\'',\n        isAvailable: true/' src/data/catalog.ts
