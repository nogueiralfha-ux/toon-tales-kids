awk '/id: '\''t4e9_TEMP'\''/ {
    getline; getline; getline; getline; getline;
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts

sed -i 's/      },      },/      },/g' src/data/catalog.ts

cat src/data/catalog.ts | grep -E "t4" -A 10 -B 10
