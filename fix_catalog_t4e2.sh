awk '/id: '\''t4e2'\''/ {
    print $0
    getline; print $0
    getline; print $0
    print "        durationLabel: '\''17 min'\'',"
    getline; sub(/isAvailable: false/, "isAvailable: true"); print $0
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
