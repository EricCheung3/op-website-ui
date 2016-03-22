From nginx
COPY dist/prod /usr/share/nginx/html
COPY nginx/conf.d /etc/nginx/conf.d
