FROM node:21-alpine3.18 as base
RUN apk update
RUN apk upgrade

FROM base as development

WORKDIR /front
USER root
COPY --chown=node:node src/front .
ENV NODE_ENV=development

RUN npm install npm -g
RUN npm install --verbose



USER node
#CMD [ "npm", "run", "dev" ,"-ddd"]
#CMD [ -d "node_modules" ] && npm run dev
CMD [ -d "node_modules" ] && npm run dev || npm install && npm run dev
#CMD [ -d "node_modules" ] && yarn dev || yarn && yarn dev
