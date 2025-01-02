const express=require('express');
const morgan=require('morgan');
const app=express();
//const prodRouter=require('./api/v1/routes/product');

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const secure=require('./api/v1/middlewares/secure');
app.use(secure);
//app.use('/product',prodRouter);

module.exports=app;