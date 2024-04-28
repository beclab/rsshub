FROM node:16.13.1-alpine as server_dist

WORKDIR /server_dist

# Only copy over the packages files of all required packages.
# This will ensure that we don't have to install all dependencies
# again if any source files change.

COPY package*.json ./

# Install dependencies and bootstrap packages
RUN npm ci --unsafe-perm

# Now copy over source files and assets
COPY ./src ./src
COPY ./tsconfig.json ./
COPY ./webpack.config.js ./webpack.config.js

RUN npm run build


FROM node:16.13.1 as server_dist2

WORKDIR /server_dist2/packages/server

COPY --from=server_dist /server_dist/dist/package*.json .

RUN npm install

COPY --from=server_dist /server_dist/dist/ .


FROM node:16.13.1-buster-slim

EXPOSE 3000

WORKDIR /desktop

COPY --from=server_dist2 /server_dist2/packages/server/ .

ENTRYPOINT ["npm", "run"]

CMD [ "server"]
