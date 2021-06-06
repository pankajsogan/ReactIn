import React from 'react'
import FileIcon from '../assets/FileIcon'
import PhotoIcon from '../assets/PhotoIcon'
import VideoIcon from '../assets/VideoIcon'
import JobIcon from '../assets/JobIcon'
import OccassionIcon from '../assets/OccassionIcon'
import PollIcon from '../assets/PollIcon'
import MoreVert from '../assets/MoreVert'
import "./NewPostModal.css"
import { connect } from 'react-redux'
import { setDrop, setModal, setUser } from '../redux/actions/_appAction';
import ContentEditable from 'react-contenteditable'

function NewPostModal(props) {

    const [text,setText] = React.useState('<p>What do you want to talk about?</p>');

    const articleRef = React.createRef();

    const handleAddHashtag = ()=>{
            const article=document.querySelector('.editablePost');
            const paras = article.querySelectorAll('p');
            const lastPara=paras[paras.length-1];
            lastPara.innerHTML+=`<strong>#</strong>`;
    }


    const handlePhoto = (e)=>{
        const file = e.target.files[0];
        const reader = new FileReader();
        console.log(file);
        const allowedExt = ["image/png","image/jpeg","image/jpg"];

        const {type} = file;
        if(allowedExt.includes(type)){


            reader.addEventListener("load", function () {
                // convert image file to base64 string
               
                console.log(reader.result);

                document.querySelector('.editablePost').innerHTML+=`<img src="${reader.result}" alt="new_post_image"/>`;
              }, false);


            
            if (file) {
                reader.readAsDataURL(file);
              }
        }
        console.log("Extension not matched")
    }
    return (
        <div className="newPostModal">
            <div className="new__post__popup">
                <div className="new__post__popup__header">
                    <h3>Create a post</h3>
                    <button onClick={()=>props.setModal(false)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
  <path d="M13.42 12L20 18.58 18.58 20 12 13.42 5.42 20 4 18.58 10.58 12 4 5.42 5.42 4 12 10.58 18.58 4 20 5.42z"></path>
</svg>
                    </button>
                </div>
                <div className="post__modal__body">
                    <div className="new__post_user__detail">
                        <div className="new__post__user__avatar">
                            <img src={props.user && props.user.photo} alt="user__photo" />
                        </div>
                        <div className="new__post__user__access">
                            <h3>{props.user && props.user.name}</h3>
                            <div className="access__select">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
</svg>
<span>Anyone</span>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M8 11L3 6h10z" fill-rule="evenodd"></path>
</svg>
                            </div>
                        </div>
                    </div>

                    <div className="post__text__data" aria-placeholder="What do you want to talk about?">
                    <ContentEditable
              innerRef={articleRef}
              className="editablePost"
              html={text} // innerHTML of the editable div
              disabled={false}       // use true to disable editing
              onChange={(e)=>setText(e.target.value)} // handle innerHTML change
              tagName='p' // Use a custom HTML tag (uses a div by default)
              
            />
                    </div>
                    <div className="post__hashtag" onClick={handleAddHashtag}>
                        <button>Add hashtag</button>
                    </div>
                </div>

                <div className="new__post__modal__footer">
                    <div className="new__post__controls">
                       <form enctype="multipart/form"> 
                           <label htmlFor="photo"><PhotoIcon/></label>
                           <input type="file" name="photo" id="photo" onChange={handlePhoto}/>
                        </form>
                        <button><VideoIcon/></button>
                        <button><FileIcon/></button>
                        <button><JobIcon/></button>
                        <button><OccassionIcon/></button>
                        <button><PollIcon/></button>
                        <button><MoreVert/></button>
                    </div>
                    <div className="new__post__add__controls">
                        <button>Anyone</button>
                        <button>Post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>({
    user: state.appReducer.user,
    drop:state.appReducer.drop,
    modal: state.appReducer.modal
})

const mapDispatchToProps = (dispatch)=>({
    setUser:(user)=>(dispatch(setUser(user))),
    setDrop:(drop)=>(dispatch(setDrop(drop))),
    setModal:(modal)=>(dispatch(setModal(modal)))
})


export default connect(mapStateToProps,mapDispatchToProps)(NewPostModal)
