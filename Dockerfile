FROM node:latest
# Create app directory
WORKDIR /www/frontend
# Copy the files into workdir
COPY package*.json ./
# Install all the dependencies
RUN npm install
RUN npm run dev

# Bundle app source
COPY . .
ARG MAX_OLD_SPACE_SIZE=8192
ENV NODE_OPTIONS=--max_old_space_size=$MAX_OLD_SPACE_SIZE
# Expose the port to get access
EXPOSE 80

ENV HOST=0.0.0.0
# Run the node command
CMD [ "node", "index.js" ]