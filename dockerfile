# MONGO
FROM mongo:latest

ENV MONGO_INITDB_ROOT_USERNAME root
ENV MONGO_INITDB_ROOT_PASSWORD password
ENV MONGO_INITDB_DATABASE test

EXPOSE 27017

# docker build -t mongo_test:latest .
# docker run  -d -p 27017:27017 --name mongo_test mongo_test:latest

# mongosh -u root -p password