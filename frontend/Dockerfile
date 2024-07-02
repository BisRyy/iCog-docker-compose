# Use an official nginx image as a parent image
FROM nginx:alpine

COPY . /usr/share/nginx/html

EXPOSE 80

# Start nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]
