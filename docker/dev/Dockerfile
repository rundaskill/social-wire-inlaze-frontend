FROM node:14-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm cache clean --force
COPY . .
RUN npm install
RUN npm run build:dev

FROM nginx:alpine
RUN cp /usr/share/zoneinfo/America/Bogota /etc/localtime && \
    echo "America/Bogota" > /etc/timezone
COPY --from=build /app/dist/social-wire-inlaze-frontend /usr/share/nginx/html
COPY /nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4200 4201
ENTRYPOINT ["nginx", "-g", "daemon off;"]