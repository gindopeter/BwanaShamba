#!/bin/bash
set -e

if [ -n "$GEMINI_API_KEY" ] && [ -z "$GOOGLE_API_KEY" ]; then
    export GOOGLE_API_KEY="$GEMINI_API_KEY"
fi

echo "[docker] Starting ADK Agent Service on port ${ADK_PORT:-8001}..."
python3 -m uvicorn adk_service.main:app --host 0.0.0.0 --port ${ADK_PORT:-8001} --timeout-keep-alive 120 &
ADK_PID=$!

sleep 3

echo "[docker] Starting Node.js server on port ${PORT:-8080}..."
node --import tsx server.ts &
NODE_PID=$!

trap "kill $ADK_PID $NODE_PID 2>/dev/null; exit" SIGTERM SIGINT

wait -n
exit $?
