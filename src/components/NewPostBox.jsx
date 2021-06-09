import React from 'react';
import { connect } from 'react-redux';
import ArticleIcon from '../assets/ArticleIcon';
import EventIcon from '../assets/EventIcon';
import PhotoIcon from '../assets/PhotoIcon';
import VideoIcon from '../assets/VideoIcon';
import { setDrop, setModal, setUser } from '../redux/actions/_appAction';
import "./NewPostBox.css"

function NewPostBox(props) {
    return (
        <div className="NewPostBox">
            <div className="new__post__top">
                <div className="new__post__user__avatar">
                    <img src={props.user && props.user.avatar} alt="user__avatar"/>
                </div>
                <div className="form" onClick={()=>props.setModal(!props.modal)}>
                   <span>Start a Post</span>
                </div>
            </div>
            <div className="new_post_box_controls">
                <button><PhotoIcon/><span>Photo</span></button>
                <button><VideoIcon/><span>Video</span></button>
                <button><EventIcon/><span>Event</span></button>
                <button><ArticleIcon/><span>Article</span></button>
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





export default connect(mapStateToProps,mapDispatchToProps)(NewPostBox)
