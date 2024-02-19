#FROM node:21-alpine3.18 as base
#WORKDIR /api
#COPY src/api/ ./
#RUN npm install --verbose
#RUN npm install nodemon -g --verbose
#CMD ["npm", "run", "dev" ,"-ddd"]


FROM node:21-alpine3.18 as base
RUN apk update
RUN apk upgrade
FROM base as development
ENV NODE_ENV=development
WORKDIR /api

COPY src/api/package.json ./

RUN npm install npm -g --verbose
RUN npm install --verbose -g
RUN npm install -g nodemon --verbose
ENV PATH /api/node_modules/.bin:$PATH
COPY src/api/app ./app

#USER node
#CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev
#CMD [ -d "node_modules" ]
CMD ["npm", "run", "dev" ,"-ddd"]
