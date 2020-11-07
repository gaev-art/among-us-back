// state
import {UserInMessage} from '../../f1-socket'

const _roomState = {
  users: [] as UserInMessage[],

}

// methods
export const addUser = (user: UserInMessage) => {
  const result = _roomState.users.find(u => u.name === user.name)
  if (!result) {
    _roomState.users.push(user)
    return user
  }


}
