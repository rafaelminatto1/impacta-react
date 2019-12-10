const http = require('http')
const requisao = function (request, response){
    response.writeHead(200,{'Content-Type' :'text/html'})
    response.write('<h1>Texto a ser exibido browser</h1>')
    response.end()
}

    const server = http.createServer(requisao)
    const resultado = function (){
        console.log("Servidor em funcionamento")

        
    }
    server.listen(3000, resultado)

    
