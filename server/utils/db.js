const mongoose=require('mongoose')
mongoose.set('toJSON',{getters:true})
try {
    mongoose.set('strictQuery', false)
    mongoose.connect("mongodb+srv://sales:jLJLxy4zG6ffbaA7@cluster0.w38zn5i.mongodb.net/sales?retryWrites=true&w=majority",{useNewUrlParser:true,useUnifiedTopology:true,autoIndex:true}). then( async() => {
    console.log("db connected")

})
    
} catch (error) {
    console.log(error.message)
}