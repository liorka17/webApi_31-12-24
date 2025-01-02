module.exports={

    getAll:(req,res)=>{
        return res.status(200).json({msg: `all products`})
    },
    getById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({msg: `product by id ${prodid}`})
    },
    addNew:(req,res)=>{
        console.log(req,body);
        return res.status(200).json({msg: `new product added`})
    },
    updateById:(req,res)=>{
        let prodid=req.params.id;
        return res.status(200).json({msg: `product ${prodid} updated`})
    },
    deleteById:(req,res)=>{
        let prodid=res.status.id;
        return res.status(200).json({msg: `prodcut ${prodid} deleted`})
    },
}