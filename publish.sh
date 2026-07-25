#!/bin/sh

LOG="/home/u701829741/domains/allanmendoza.tech/public_html/PortfolioRepository/cron.log"
SRC="/home/u701829741/domains/allanmendoza.tech/public_html/PortfolioRepository/dist/"
DST="/home/u701829741/domains/allanmendoza.tech/public_html/"

{
  echo "=== $(date) ==="
  echo "Origen: $SRC"
  echo "Destino: $DST"
  rsync -av "$SRC" "$DST"
  echo "Deploy OK"
  echo
} >> "$LOG" 2>&1