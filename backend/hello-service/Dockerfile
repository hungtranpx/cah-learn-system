FROM node:22-alpine
WORKDIR /app
COPY server.js ./
ARG APP_VERSION=dev
ENV APP_VERSION=$APP_VERSION
EXPOSE 8080
USER node
CMD ["node", "server.js"]
