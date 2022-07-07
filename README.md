# Backend-Mobile-Inventory

Frameworks : Nodejs, Express
Database : MongoDB

   
      Instructions to run the code :
      
      1. Firstly download and extract the code
      2. Then go to the source directory of the code in console.
      3. Then run "npm install" and "npm start"
      4. Following are the different api end points to test the code :
         
          (i)  GET '/mobiles' - to get all the mobiles
          (ii)  GET '/mobile/:id' -  to get details of a specific mobile
         (iii) POST  '/mobile' - to add a mobile 
          (iv) PUT '/mobile/:id' - to edit a mobile details
          (v) DELETE '/mobile/:id' - to delete a specific mobile
          (vi) GET '/mobiles/filter/:brand' - to get mobiles based on a brand name
          (vii) GET '/mobiles/sort/:sort' - to get the mobiles sorted by name or brand or quantity
