import mongoose from "mongoose";

const personSchema = new mongoose.Schema(
    {

        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
    
        },
        favouriteFoods:{
            type:[String],
        },
        
        
    }
    
                
)



 const Person = mongoose.model("Person", personSchema)


 export default Person
