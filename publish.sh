#!/bin/sh

LOG="/home/u701829741/domains/allanmendoza.tech/public_html/PortfolioRepository/cron.log"
SRC="/home/u701829741/domains/allanmendoza.tech/public_html/PortfolioRepository/dist/"
DST="/home/u701829741/domains/allanmendoza.tech/public_html/"

{
  echo "=== $(date) ==="
  echo "Origen: $SRC"
  echo "Destino: $DST"
  if rsync -av --delete "$SRC" "$DST" >> "$LOG" 2>&1 ; then
    echo "Deploy OK"
  else
    echo "Deploy Failed"
    exit 1
  fi
  echo
} 