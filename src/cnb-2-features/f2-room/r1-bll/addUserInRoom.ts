import {addUser} from '../r2-dal/roomState'
import {Server} from 'socket.io'

// endPoint logic
export const addUserInRoom = (socketServer: Server, user: any) => (arg: any, answerF: Function)=> {
    addUser(user)

    if (typeof arg !== 'string') answerF && answerF('Message not string!')
    // socketServer.emit('new-message-sent', arg)
}
