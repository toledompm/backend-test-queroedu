FROM node:11.7.0-slim AS builder
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:11.7.0-slim
WORKDIR /app
COPY --from=builder /app ./
CMD ["npm", "run", "start:dev"]
