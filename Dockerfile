FROM node

WORKDIR /app

COPY . /app

RUN npm install
EXPOSE 5173
CMD ["npm","run","dev"]

#docker build -t patrick -d .
#docker run -p 5173:5173 --rm --it -d patrickdevcoffee/netclick