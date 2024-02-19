FROM caddy:2.7.6-alpine


COPY ./servers/caddy/Caddyfile /etc/caddy/Caddyfile

RUN apk update && apk add \
    bash

# define timezone
RUN echo "Asia/Kuwait" > /etc/timezone
RUN apk add tzdata
RUN cp /usr/share/zoneinfo/Asia/Kuwait /etc/localtime

#CMD ["caddy", "run"]
CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile"]