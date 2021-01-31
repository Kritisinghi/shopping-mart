FROM node:12.2.0-alpine as build
WORKDIR /app
COPY package.json /app
RUN yarn install
RUN yarn global add webpack-cli webpack
COPY . /app
RUN yarn build

FROM nginx:1.17.1-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80