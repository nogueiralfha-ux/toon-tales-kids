awk '/isAvailable: true,/ {
    if (in_t3e9) {
        print $0
        print "      },"
        in_t3e9 = 0
        next
    }
}
/id: '\''t3e9'\''/ { in_t3e9 = 1 }
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
