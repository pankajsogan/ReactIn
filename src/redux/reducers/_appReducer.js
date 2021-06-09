const intialState = {
    user:null,
    drop:false,
    modal:false,
    activePage:"home",
    isLogined:false
}

const appReducer = (state=intialState,action)=>{
switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user: action.user,

        }

        case "SET_LOGIN":
        return{
            ...state,
            isLogined: action.login,

        }

        case "SET_ACTIVE_PAGE":
            return{
                ...state,
                activePage: action.activePage,
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