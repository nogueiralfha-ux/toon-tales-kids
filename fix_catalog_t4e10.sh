awk '/id: '\''t4e10'\''/ {
    print "        id: '\''t4e10'\'',"
    print "        title: '\''A Chegada a Roma'\'',"
    print "        description: '\''Quando Paulo finalmente chegou ao destino.'\'',"
    print "        durationLabel: '\''20 min'\'',"
    print "        isAvailable: true,"
    print "      },"
    getline; getline; getline; getline; getline;
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
