import {addUser} from '../r2-dal/roomState'
import {Server} from 'socket.io'
import {UserInMessage} from '../../f1-socket'

// endPoint logic
export const addUserInRoom = (socketServer: Server, user: any) => (arg: any, answerF: Function) => {
  if (typeof arg !== 'string') answerF && answerF('Message not string!')
  else {
    const done = addUser({...user, name: arg})
    if (done)  answerF && answerF(0)
    answerF && answerF(1)
  }


  // socketServer.emit('new-message-sent', arg)
}


