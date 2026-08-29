awk '/id: '\''t4e9'\''/ {
    print $0
    getline; print $0
    getline; print $0
    getline; print $0
    getline; print $0
    getline; print $0
    getline; # skip the extra "      },"
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
