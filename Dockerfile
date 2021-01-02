FROM node:14-alpine as setup-stage
RUN apk add --no-cache python2 make g++
RUN mkdir /app
WORKDIR /app

COPY package*.json ./
RUN npm config set @ssl:registry https://verdaccio.namec.fr/
RUN npm ci
COPY . .

FROM node:14-alpine as production-stage
RUN apk add --no-cache python2 make g++
RUN mkdir /app
WORKDIR /app
COPY --from=setup-stage /app /app

RUN npm prune --production

ENV NODE_ENV=production
CMD ["npm", "start"]
