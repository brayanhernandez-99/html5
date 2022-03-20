#FROM nginx:stable-alpine
FROM arm64v8/nginx:stable-alpine

COPY . /usr/share/nginx/html
