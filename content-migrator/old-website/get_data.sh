#!/bin/bash

mkdir -p data
rm -rf data/*

DB="postgresql://--REDACTED--"

sql2csv --no-header --db $DB --query "SELECT tablename N FROM pg_catalog.pg_tables WHERE schemaname='content' UNION SELECT table_name N FROM INFORMATION_SCHEMA.views WHERE table_schema = 'content' ORDER BY N" > tables.txt

while read t
do
  echo $t
  sql2csv --db $DB --query "SELECT * FROM content.\"$t\"" | csvjson --maxfieldsize 1310720 --indent 2 > data/$t.json
done < tables.txt

rm -f tables.txt
