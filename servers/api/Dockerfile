FROM node:21-alpine3.18 as base
#update & upgrade OS
RUN apk update
RUN apk upgrade
#set dev env
FROM base as development
ENV NODE_ENV=development

#set workdir & copy package.json
WORKDIR /api
COPY src/api/package.json ./

#install npm and nodemon and package.json
RUN npm install --verbose
RUN npm install -g nodemon --verbose


#change workdir to /api/app and copy local app file
WORKDIR /api/app
COPY src/api/app ./

#Start npm dev
CMD ["npm", "run", "dev" ,"-ddd"]


#USER node
#CMD [ -d "node_modules" ] && npm run dev || npm ci && npm run dev
#CMD [ -d "node_modules" ]

