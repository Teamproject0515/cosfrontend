import React from 'react'
import './errCss/Errorcss.css'
function AccessErr(props) {
    return (
        <div className="ErrorPage">
            <h1>접근할 수 없습니다.</h1>
            <div className="ErrorButtonDiv">
                <button className="ErrorButton" onClick={()=>props.history.push('/')}>페이지 돌아가기</button>
            </div>
        </div>
    )
}

export default AccessErr
