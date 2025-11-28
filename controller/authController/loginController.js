
const userSchema = require('../../Model/userSchema')

const loginController = async (req, res)=>{
    const {inputUserName, password} = req.body
    const CurrentUser = await userSchema.findOne({userName: inputUserName})
    // res.send(CurrentUser)
    if(!CurrentUser){
        return res.send({error:"Invalid Credential."})        
    }
    const userEmail = CurrentUser?.userName
    const userPassword = CurrentUser?.password 
    if(userEmail===inputUserName && userPassword===password){
        res.send({success: "Login Successfull", user: {name:CurrentUser.name,userName:CurrentUser.userName,id:CurrentUser._id, passwordServer:CurrentUser.password}})
    }else{
        res.send({error:"Invalid Credential.22"})    
    }   
           
}     
     
module.exports = loginController