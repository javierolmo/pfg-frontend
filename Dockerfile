#RUN
FROM nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY './dist' /usr/share/nginx/html
RUN ls /usr/share/nginx/html
CMD ["/bin/sh", "-c", "envsubst < /usr/share/nginx/html/assets/env/env.template.js > /usr/share/nginx/html/assets/env/env.js && exec nginx -g 'daemon off;'"]
EXPOSE 80
