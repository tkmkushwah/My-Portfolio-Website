# Use an official Nginx image as the base image
FROM nginx:alpine

# Copy the HTML, CSS, and JS files into the default Nginx directory
COPY ./ /usr/share/nginx/html/

# Expose port 80 to access the web application
EXPOSE 80
