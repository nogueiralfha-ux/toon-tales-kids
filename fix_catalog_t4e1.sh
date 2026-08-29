awk '/id: '\''t4e1'\''/ {
    print $0
    getline; print $0
    getline; print $0
    getline; sub(/isAvailable: false/, "isAvailable: true"); print $0
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
