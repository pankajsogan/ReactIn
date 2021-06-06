const intialState = {
    user:null,
    drop:false,
    modal:false
}

const appReducer = (state=intialState,action)=>{
switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user: action.user,

        }

        case "SET_MODAL":
        return{
            ...state,
            modal: action.modal,

        }

        case "SET_DROP":
        return{
            ...state,
            drop: action.drop,

        }
        default:
            return state;
}
}

export default appReducer;