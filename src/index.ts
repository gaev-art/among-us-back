import express from 'express'
import http from 'http'
import socketIo from 'socket.io'
import mongoose from 'mongoose'
import {MongoDBUris, PORT} from './cnb-1-main/config'
import {appUse} from './cnb-1-main/app'
import {routes} from './cnb-1-main/routes'
import {onConnect} from './cnb-2-features/f1-socket'
// yarn upgrade

const app = express()

appUse(app)
routes(app)

const server = http.createServer(app)
const socketServer = socketIo(server)

socketServer.on('connection', onConnect(socketServer))

/////////////////////////////////////////////////////////////////

// mongoose.connect(MongoDBUris, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//     useCreateIndex: true,
// })
//     .then(() => {
//         console.log('MongoDB connected successfully')

        const port = process.env.PORT || PORT

        server.listen(port, () => {
            console.log('listening on port: ' + port)
        })
    // })
    // .catch(e => console.log("Nya-MongoDB connection error: ", {...e}))

process.on('unhandledRejection', (reason, p) => {
    console.log('unhandledRejection: ', reason, p)
})
