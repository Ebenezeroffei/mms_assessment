# Frontend Dockerfile (Next.js)
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Expose port
EXPOSE 3030

# Build app

RUN npm run build

# Development command
CMD ["npm", "start", "--", "-p", "3030" ]