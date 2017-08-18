 FROM node:latest  
   
   
 WORKDIR /usr/src/app

 COPY package.json /usr/src/app/package.json
 
 RUN npm install -g 
  

 COPY . /usr/src/app
   
 EXPOSE 9000
      
 CMD ["npm", "start"]