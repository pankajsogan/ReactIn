import React from 'react'
import { connect } from 'react-redux'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import NewPostModal from '../components/NewPostModal'
import Sidebar from '../components/Sidebar'
import Widgets from '../components/Widgets'

function Feed(props) {
    return (
        <div className="feed__page">
           <Navbar/>
           {props.modal && <NewPostModal/>}
           <div className="feed__body">
               <Sidebar/>
               <Main/>
               <Widgets/>
           </div>
        </div>
    )
}


const mapStateToProps = (state)=>({
    modal:state.appReducer.modal
})
export default connect(mapStateToProps,null)(Feed)
