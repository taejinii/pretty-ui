FROM node:14
LABEL authors="jeongtaejin"

EXPOSE 3000

ENTRYPOINT ["yarn", "start"]