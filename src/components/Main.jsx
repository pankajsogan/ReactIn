import React from 'react';
import { connect } from 'react-redux';
import { setModal } from '../redux/actions/_appAction';
import "./Main.css";
import NewPostBox from './NewPostBox';

function Main() {
    return (
        <div className="main">
            <NewPostBox/>
        </div>
    )
}


const mapStateToProps = (state)=>({
    modal: state.appReducer.modal
})

const mapDispatchToProps = (dispatch)=>({
    setModal:(modal)=>(dispatch(setModal(modal)))
})
export default connect(mapStateToProps,mapDispatchToProps)(Main)
