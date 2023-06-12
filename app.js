
const express=require('express');
const app=express();
const path=require('path');
const PORT=3000;
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res)=>{
    res.send("<h1>Hello World</h1>");
})

app.listen(PORT,()=>{

console.log(`Server is running on ${PORT}`);
});
