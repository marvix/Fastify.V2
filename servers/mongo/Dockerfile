#FROM mongo:latest
FROM mongo:7.0.5

RUN apt-get update -y
#RUN apt-get install logrotate


RUN mkdir /mongo
RUN mkdir /mongo/log
RUN chown -R mongodb:mongodb /mongo
WORKDIR /mongo
COPY ./servers/mongo/mongod.conf ./mongod.conf
COPY ./servers/mongo/data ./data
#COPY ./servers/mongo/log/mongod.log ./mongo/log/mongod.log

USER mongodb
CMD ["mongod", "--config", "/mongo/mongod.conf"]
