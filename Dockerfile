# Stage 1: Compile and Build angular codebase
FROM node:lts as build

WORKDIR /app
COPY ./ /app/
RUN npm install
RUN npm run build

# Stage 2: Serve app with nginx
FROM nginxinc/nginx-unprivileged:alpine
COPY --from=build /app/deployment/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist/edc-demo-client /usr/share/nginx/html
COPY --from=build /app/src/assets /usr/share/nginx/html/assets
EXPOSE 8080

RUN touch /run/nginx.pid \
 && chown -R api-gatway:api-gatway /run/nginx.pid /cache/nginx

# HEALTHCHECK --interval=2s --timeout=5s --retries=10 \
#  CMD curl -f http://localhost/ || exit 1
