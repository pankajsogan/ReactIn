import React from 'react';
import { connect } from 'react-redux';
import { setModal, setPost } from '../redux/actions/_appAction';
import "./Main.css";
import NewPostBox from './NewPostBox';
import Post from './Post';

function Main(props) {

    // const handleComingPost = (post)=>{
    //     console.log("The comming post is ",post);
    //     props.setPost(post);
    //     props.setModal(false);
    // }

    // const pusher = new Pusher('2de50fc2e5bef3ec4901', {
    //     cluster: 'ap2',
    //     encrypted: true
    //   });

    //   var channel = pusher.subscribe('linkedinPost');
    //   channel.bind('New-Post', function(data) {
    //   console.log(data.post);
       
        
       
    //     // if(data.post){
    //     //     return channel.unbind("new-price")
    //     // }
    //     // handleComingPost(data.post);
    //   });


      console.log("Component Render");

    return (
        <div className="main">
            <NewPostBox/>
            <div className="user__posts">
               {
                   props.posts.map((post)=>{
                       return <Post key={post._id} image={post.media.url} text={post.text} user={post.upload_by.user} upload_at={post.upload_at}/>
                   })
               }
            </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    modal: state.appReducer.modal,
    posts:state.appReducer.posts
})

const mapDispatchToProps = (dispatch)=>({
    setModal:(modal)=>(dispatch(setModal(modal))),
    setPost:(post)=>(dispatch(setPost(post))),
})
export default connect(mapStateToProps,mapDispatchToProps)(Main)
