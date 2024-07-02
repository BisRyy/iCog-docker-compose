# Use an official Node.js runtime as a parent image
FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

# Run server.js when the container launches
CMD ["node", "server.js"]
