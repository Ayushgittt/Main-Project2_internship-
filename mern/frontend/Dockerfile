FROM node:18.9.1 AS builder

WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm run build

# Use a lightweight web server to serve static files
FROM node:18.9.1

WORKDIR /app
RUN npm install -g serve

COPY --from=builder /app/dist /app/dist

EXPOSE 5173

CMD ["serve", "-s", "dist", "-l", "5173"]
