FROM node:16-alpine
RUN mkdir -p /home/peng/project/${PROJECT_NAME}
WORKDIR /home/peng/project/${PROJECT_NAME}
COPY package.json package-lock.json /home/peng/project/${PROJECT_NAME}
RUN npm i
COPY . /home/peng/project/${PROJECT_NAME}
EXPOSE ${PROJECT_PORT}
RUN pm2 stop ${PROJECT_NAME}
CMD pm2 start ${PROJECT_NAME}