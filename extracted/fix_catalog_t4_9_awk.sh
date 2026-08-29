awk '/id: '\''t4e9'\''/ {
    print "        id: '\''t4e9'\'',"
    print "        title: '\''Malta'\'',"
    print "        description: '\''A ilha onde Deus continuou agindo.'\'',"
    print "        durationLabel: '\''18 min'\'',"
    print "        isAvailable: true,"
    print "      },"
    getline; getline; getline; getline;
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
