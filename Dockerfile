# 1. build phase -> temporary container
FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

# 2. run phase  -> copy just build for nginx to serve
FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html
