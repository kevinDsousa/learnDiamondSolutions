import { app } from './app'

const PORT = 3000;

const server = app.listen(PORT, () => console.log(`Server is listening on port http://localhost:${PORT}`))

process.on('SIGINT', () => {
    server.close()  
    console.log('app finalizado');
})