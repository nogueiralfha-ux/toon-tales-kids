sed -i '/id: '\''t1e4'\''/,/isAvailable: false/ s/isAvailable: false/isAvailable: true/' src/data/catalog.ts
sed -i '/id: '\''t1e4'\''/,/isAvailable: true/ s/isAvailable: true/durationLabel: '\''10 min'\'',\n        isAvailable: true/' src/data/catalog.ts
