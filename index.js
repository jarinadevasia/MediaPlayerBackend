// importing json-server using require keyword
const jsonServer=require('json-server');

// create server using create() method
const mediaPlayerServer=jsonServer.create();

// create a path/route to db.json file
const router=jsonServer.router('db.json')

// create a middleware used to convert JSON data to js object
const middleWare=jsonServer.defaults();

// add middleware and router to mediaplayerserver
mediaPlayerServer.use(middleWare);
mediaPlayerServer.use(router);

const PORT=4000;

// run the mediaPlayerServer
mediaPlayerServer.listen(PORT,()=>{
    console.log(`mediaplayer server running on PORT ${PORT}`);    
})