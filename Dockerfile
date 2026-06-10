# Step 1: Use an optimized Node.js image to build the app
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Step 2: Create the lean production runtime environment
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV production

# Only copy essential production assets to keep the container lightweight
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]
