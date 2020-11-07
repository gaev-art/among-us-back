import {Server, Socket} from 'socket.io'
import {v1} from 'uuid'
import {addUserInRoom} from '../f2-room/r1-bll/addUserInRoom'

export type UserInMessage = {
  _id: string
  name: string
  isAlive: boolean
  color: string
  isImpostor: boolean
  disCount: number
  votes: string[]
  x: number
  y: number
}
export type Message = {
    _id: string,
    message: string,
    user: UserInMessage,
}

// const messages: Message[] = [{message: "start", _id: v1(), user: {_id: v1(), name: "neko-admin"}}]
// const users: Array<UserInMessage & {socket?: Socket}> = [{_id: v1(), name: "test", socket: undefined}]

// routes and global logic
export const onConnect = (socketServer: Server) => (socket: Socket) => {
  console.log('a user connected')
  const user: UserInMessage & { socket?: Socket } = {
    _id: v1(),
    name: 'anonymous',
    socket,
    disCount: 0,
    color: 'lime',
    isAlive: true,
    isImpostor: false,
    votes: [],
    x: 0,
    y: 0,
  }

  socket.on('init', addUserInRoom(socketServer, user))


  // socket.on("client-message-sent", clientMessageSent(socketServer, socket, users, user, messages))
  // socket.on("client-name-sent", clientNameSent(socket, users, user))

  // socket.broadcast.emit('new-message-sent', {}) // всем кроме себя

  // socket.on('disconnect', () => {
  //     console.log('user disconnected')
  // })
}
