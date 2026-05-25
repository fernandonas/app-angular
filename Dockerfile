FROM node:latest AS angular

WORKDIR /app
COPY package*.json /app/

RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
VOLUME var/cache/nginx
COPY --from=angular /app/dist/app-angular/browser /usr/share/nginx/html
COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
