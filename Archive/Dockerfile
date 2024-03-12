FROM node:20

# Create app directory
WORKDIR /home/splunk/app

COPY package*.json /home/splunk/app/

# Install app dependencies
RUN npm install 2>&1

# Copy app source
COPY . .

# Must come after npm install!
ENV NODE_ENV=production

EXPOSE 3000

CMD npm start
