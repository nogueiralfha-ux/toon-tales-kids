awk '/id: '\''t4e6'\''/ {
    print $0
    getline; sub(/title: .*/, "title: '\''Paulo Viaja para Roma'\'',"); print $0
    getline; sub(/description: .*/, "description: '\''Uma viagem rumo à cidade imperial.'\'',"); print $0
    print "        durationLabel: '\''18 min'\'',"
    getline; sub(/isAvailable: false/, "isAvailable: true"); print $0
    next
}
1' src/data/catalog.ts > src/data/catalog.tmp && mv src/data/catalog.tmp src/data/catalog.ts
