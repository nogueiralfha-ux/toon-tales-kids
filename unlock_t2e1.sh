sed -i '/id: '\''t2e1'\''/,/isAvailable: false/ s/isAvailable: false/durationLabel: '\''15 min'\'',\n        isAvailable: true/' src/data/catalog.ts
