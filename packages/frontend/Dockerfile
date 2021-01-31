FROM node:12.2.0-alpine as build
WORKDIR /app
COPY package.json /app
RUN yarn install
RUN yarn global add webpack-cli webpack
COPY . /app
RUN yarn build

# FROM nginx:1.17.1-alpine
# # COPY --from=build /app/dist /usr/share/nginx/html
# COPY --from=build /app/dist /var/www
# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# 
FROM nginx:1.17-alpine
ARG PORT
RUN echo $PORT


COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.config /etc/nginx/conf.d/default.conf

# CMD ["nginx","-g","daemon off;"]
CMD sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'
