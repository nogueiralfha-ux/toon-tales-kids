awk '/id: '\''t3e8'\''/ {
    print $0
    getline; print $0
    getline; print $0
    getline; print $0
    getline; print $0
    getline; print $0
    print "      },"
    print "      {"
    print "        id: '\''t3e9'\'',"
    print "        title: '\''A ressurreição de Jesus'\'',"
    print "        description: '\''A maior vitória e esperança de todas.'\'',"
    print "        durationLabel: '\''22 min'\'',"
    print "        isAvailable: true,"
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
