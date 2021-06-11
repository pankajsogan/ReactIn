const intialState = {
    user:null,
    drop:false,
    modal:false,
    activePage:"home",
    isLogined:false,
    posts:[],
    
}

const appReducer = (state=intialState,action)=>{
switch(action.type){
    case "SET_USER":
        return{
            ...state,
            user: action.user,

        }

        case "SET_REACTION":{
            const index = state.posts.findIndex((post)=>post._id===action.id);
            if(index>=0){
                state.posts[index].reactions = [...state.posts[index].reactions,action.reaction];
            }
            return{
                ...state
            }
        }

        case "SET_POST":
            return{
                ...state,
                posts:[action.post,...state.posts]
            }
            case "SET_POSTS":
                return{
                    ...state,
                    posts:action.posts
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