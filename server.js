require('dotenv').config();
const http=require('http');
const app=require('./app');
const port=2040;
const srv=http.createServer(app);
srv.listen(port,()=>{console.log("`server is up`")});

//אם משהו לא טוב בעבודת בית, תעיר לי, אם הכל טוב, גם תגיד לי :)