import React from 'react'

function ManagerDefaultErr(props) {
    return (
        <div className="ErrorPage">
            <h1>죄송합니다 처리중 오류가 발생했습니다.</h1>
            <div className="ErrorButtonDiv">
                <button className="ErrorButton" onClick={()=>props.history.push('/manager')}>관리자 페이지 돌아가기</button>
            </div>
        </div>
    )
}

export default ManagerDefaultErr
