export const reducer = (state, action) => {
    switch (action.type) {
      case "username":
        return { ...state, username: action.payload }

      case "password":
        return { ...state, password: action.payload }
      case "err":
        return { ...state, err: action.payload }
      case "logindone":
        return { ...state, login:true }
    case "logout":
        return {...state,login:false,err:"",username:"",password:""}
      default:
        return state;
    }
  }