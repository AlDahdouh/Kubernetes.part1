FROM node:12-alpine
WORKDIR /app
ENV REACT_APP_BACKEND_SERVER=http://localhost:8081
COPY . .
RUN   npm install &&\
	  adduser -D app && \
	  chown -hR app /app 

USER app
CMD ["npm", "start"]
