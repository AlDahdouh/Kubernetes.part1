FROM node:12-alpine
WORKDIR /hash-generator
COPY . .
RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /hash-generator

USER app
CMD ["npm", "start"]
