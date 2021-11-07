const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const heroku = require("heroku");
const mongoose = require('mongoose'); 
const app = express();

const PORT = process.env.PORT || 3000;

const dbUserName = "kien"; 

const dbPw = "chikien"; 

const dbName = "Cluster0"; 

const MONGO_URI = `mongodb+srv://${dbUserName}:${dbPw}@cluster0.5zjmf.mongodb.net/${dbName}`; 

mongoose.connect(MONGO_URI, () => { 

  console.log("Connected to DB"); 

}); 
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => { 

        res.send('Hello World, from express'); 
    
}); 

const PRODUCTS = [ 

      { 
    
        imageLink: "http://mvbinz.xyz/images/1.jpg", 
    
        name: "Rayon a-line Dress", 
    
        price: "13.45", 
    
        type: "Other", 
    
      }, 
    
    ]; 
 app.post("/products", (req, res) => { 

          const product = req.body; 
        
         
        
          // Output the product to the console for debugging 
        
          console.log(product); 
        
          PRODUCTS.push({...product}); 
        
         
        
          res.status(201).json({mess: "Products is added to the database"}); 
        
        }); 

app.get("/products", (req, res) => { 
      res.status(200).json({ products: PRODUCTS }); 
 }); 

app.listen(PORT, () => console.log(`Hello world app listening on port ${PORT} with url http://localhost:${PORT}`) 
); 
