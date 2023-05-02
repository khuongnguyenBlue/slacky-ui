# Use Node.js v16 as the base image
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files to the working directory
COPY . .

# Build the Angular app in production mode
RUN npm run build -- --configuration=production

# Use a lightweight web server to serve the app
FROM nginx:alpine

# Copy the compiled app files to the Nginx default directory
COPY --from=build /app/dist/slacky-ui /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx and keep it running in the background
CMD ["nginx", "-g", "daemon off;"]
