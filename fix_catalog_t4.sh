awk '/id: '\''t4e7'\''/ {
    print "        id: '\''t4e7'\'',"
    print "        title: '\''A Tempestade'\'',"
    print "        description: '\''Quando o mar se levantou.'\'',"
    print "        durationLabel: '\''21 min'\'',"
    print "        isAvailable: true,"
    print "      },"
    print "      {"
    print "        id: '\''t4e8'\'',"
    print "        title: '\''O Naufrágio'\'',"
    print "        description: '\''Quando o navio se partiu.'\'',"
    print "        durationLabel: '\''20 min'\'',"
    print "        isAvailable: true,"
    print "      },"
    # skip the next 12 lines that were part of the old t4e7 and t4e8
    getline; getline; getline; getline; getline; getline; getline; getline; getline; getline; getline; getline;
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
