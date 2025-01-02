module.exports=(req,resizeBy,next)=>{
    {
        let arrIps =["192.168.1.1","8.4.5.8","25.45.36.22"];
        for( let i=0;i<arrIps.length;i++)
        {
            if(req.ip == arrIps[i])
            {
                return next();
            }
        }
        return resizeBy.status(401).json({msg: `not authorized`});
    }
}