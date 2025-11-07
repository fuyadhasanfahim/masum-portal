# Build Stage
FROM node:24-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci
RUN npm i -g typescript

COPY . .

RUN npx prisma generate

RUN npm run build

# Production Stage
FROM node:24-alpine AS runner

WORKDIR /app

COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma

EXPOSE 5000

ENV NODE_ENV=production

CMD ["npm", "start"]
