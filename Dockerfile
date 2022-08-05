FROM node:16 AS BASE

WORKDIR /app

COPY package*.json ./

RUN if [ ! -f package-lock.json ]; then echo "WARNING: package-lock.json not detected. Lock your dependencies with \"npm i --pacakge-lock-only\"." >&2 && npm i --package-lock-only; fi
RUN npm ci

COPY . .
RUN npm run lint
RUN npm run coverage
RUN npm run build
RUN npm prune --production


FROM node:16 AS final

WORKDIR /app
COPY --from=BASE /app/node_modules node_modules
COPY --from=BASE /app/dist dist
COPY package*.json ./

EXPOSE 1234

CMD [ "node", "dist/server.js" ]
