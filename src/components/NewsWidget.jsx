import React from 'react';
import "./NewsWidget.css"


function NewList(){
    return (
        <div className="newList">
            <h3>News Title</h3>
            <p>Top news . 80,000 readers</p>
        </div>
    )
}

function NewsWidget() {
    return (
        <div className="news-widget">
            <div className="news__widget__header">
                <span>LinkedIn News</span>
                <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
  <path d="M12 2H4a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2V4a2 2 0 00-2-2zm-3 8v2H7.5A1.5 1.5 0 016 10.5a1.56 1.56 0 01.1-.5l1.08-3h2.13l-1.09 3zm0-3.75A1.25 1.25 0 1110.25 5 1.25 1.25 0 019 6.25z"></path>
</svg>
                </button>
            </div>

            <div className="news__lists">
                    <NewList/>
                    <NewList/>
                    <NewList/>
                    <NewList/>
            </div>
        </div>
    )
}

export default NewsWidget
