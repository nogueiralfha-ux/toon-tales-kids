awk '/id: '\''t4e7'\''/ {
    print $0
    getline; sub(/title: .*/, "title: '\''O Naufrágio'\'',"); print $0
    getline; sub(/description: .*/, "description: '\''Quando o navio se partiu.'\'',"); print $0
    print "        durationLabel: '\''20 min'\'',"
    getline; sub(/isAvailable: false/, "isAvailable: true"); print $0
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
