const app=require('./utils/src')

const port=process.env.PORT||15000

app.listen(port,()=>{
    console.log(`http://localhost:${port}`)
})