const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
//username -- sr3107743
// password - 0l26dKifErX24wPo


let uri = "mongodb+srv://sr3107743:0l26dKifErX24wPo@cluster0.k1znr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"



async function connectToDatabase() {
    try {
      await mongoose.connect(uri); // Removed deprecated options
      console.log("Connected to MongoDB");
    } catch (error) {
      console.error("Error connecting to MongoDB:", error);
      process.exit(1);
    }
  }
  
  // Call the function to connect to the database
  connectToDatabase();

const RegisterSchema = new mongoose.Schema({
    name:{type:String, required: true},
    age:{type:Number, required: true},
    email:{type:String, required: true},
    phone:{type:String, required: false},
    city:{type:String, required:false},
    state:{type:String, required:false},
    country:{type:String, required:false},
    pincode:{type:Number, required:false},
    address:{type:String, required:false},
    nickname:{type:String,required: true},
    password:{type:String, required: false},
    role:{type:String, required: true},
    gender:{type:String, required: true},
    

});

const Register = mongoose.model("Item",RegisterSchema);

app.post("/api/items",async(req,res) =>{
  try{
  const{name,age,email,phone,city,state,country,pincode,address,nickname,password,role,gender}   = req.body;
      console.log("req",req.body);
      
const newItem = Register({name,age,email,phone,city,state,country,pincode,address,nickname,password,role,gender})
console.log("newitm",newItem);
        await newItem.save();
       
        
    res.status(201).json({message:"Item created successfully",signup:newItem});

  }catch(error){
    res.status(500).json({message:"Error creating item",error:error.message});
  }
})
  // post api 

  // get api

const PORT = 3001;
app.listen(PORT,()=>{
    console.log("server running on port 3001")

})


