log = console.log

const fs = require('fs')
const http = require('http')
const _ = require('lodash')
const server = http.createServer((req, res) => {
    const num = _.random(0,20)
    log(num)
    log(req.url, req.method)
    res.setHeader('Content-type', 'text/html')  
    let path = './views/'
    switch(req.url){
        case '/': {path = path + 'text.html'; res.statusCode = 200; break;}
        case '/about': {path = path + 'about.html'; res.statusCode = 200;break;}
        default : {path = path + '404.html'; res.statusCode = 404; break;}

    }       
   
    fs.readFile(path, (err,data) => {
        if(err){log('Error'); res.end()}                                             
        else{
            res.write(data); res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    log('Listening for our request on host 3000')
})