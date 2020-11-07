import {addUser} from '../r2-dal/roomState'
import {Server} from 'socket.io'

// endPoint logic
export const addUserInRoom = (socketServer: Server, user: any) => (arg: any, answerF: Function) => {
    if (typeof arg !== 'string') answerF && answerF('Message not string!')
    else {
        const done = addUser({...user, name: arg})

    }

    // socketServer.emit('new-message-sent', arg)
}
