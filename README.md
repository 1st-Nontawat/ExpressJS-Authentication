# ExpressJS-Authentication

# step controller  
1. Valiadate  
2. Check Email  
3. Check Password  
4. Generate Token  
5. Response  

# package install

Server  
npm init -y  
npm install express  

Middleware  
npm install cors morgan nodemon  

Validation  
npm install yup  

Prisma  
npm install prisma  
npx prisma init --datasource-provider MySQL  
npm install @prisma/client  

Migrate DB  
npx prisma migrate dev --name init  

JWT  
npm install bcryptjs