const express=require('express') 
const mongoose=require('mongoose')
const asyncHandler = require('express-async-handler');
const cors = require('cors')
const User=require('./User')
const app=express()
const port = process.env.PORT || 1313;


app.use(cors({ origin: ["https://deploy-mern-1whq.vercel.app"],
             "methods":["POST","GET"],
             "credentials:true
             }));
app.use(express.json());
async function main(){
    await mongoose.connect('mongodb+srv://praveenkumar:QvvftRdNrB9DA0bk@cluster0.qvhdkub.mongodb.net/appdb?retryWrites=true&w=majority')    
    console.log('mongoose connected successfully');
}
main().catch ((error)=>{console.log(error)})
app.get('/',asyncHandler(async(req,res)=>{
  return res.send("Welcome Home")
}))
app.post('/signup', asyncHandler(async(req,res)=>{
    const client_name=req.body.name
    const client_email=req.body.email
    const client_password=req.body.password
        try {
            const user=await User.find().where({email:client_email})
            if(user.length>0){
                return res.send('Email Already Registred')       
        }else{
            await User.create({name:client_name,email:client_email,password:client_password})
            return res.send('User Saved Successfully')
        }
        } catch (error) {
           console.log(error.message);
        }
    } ))
app.post('/login', asyncHandler(async(req,res)=>{
        const client_email=req.body.email
        const client_password=req.body.password
            try {
                const user=await User.find().where({email:`${client_email}`})
                if(user.length>0){
                    if(user[0].email===client_email && user[0].password===client_password){
                        return res.send('login succesfully')
                    }else if(user[0].email===client_email){
                        return res.send('Wrong Password')
                    }                
            }else{
                return res.send('No User Exist')
            }
            } catch (error) {
                console.log(error.message);
            }
    } ))
        
app.listen(port,()=>{
    console.log(`server is listen on ${port}`);
})
        

