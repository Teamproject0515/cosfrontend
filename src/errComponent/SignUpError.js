import React from 'react'
import './errCss/Errorcss.css'
function SignUpError(props) {
    return (
        <div className="ErrorPage">
            <h1>죄송합니다 회원가입 처리중 오류가 발생했습니다.</h1>
            <div className="ErrorButtonDiv">
                <button className="ErrorButton" onClick={()=>props.history.push('/')}>메인 페이지 돌아가기</button>
                <button className="ErrorButton" onClick={()=>props.history.push('/signUp')}>로그인 페이지 돌아가기</button>
            </div>
        </div>
    )
}

export default SignUpError
