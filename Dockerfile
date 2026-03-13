FROM node:22

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN npm prune --omit=dev

EXPOSE 8080

ENV NODE_ENV=production
ENV PORT=8080

CMD ["node", "--import", "tsx", "server.ts"]
