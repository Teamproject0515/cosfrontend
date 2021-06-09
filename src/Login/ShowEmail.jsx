import { TextField , Button, Link, IconButton} from '@material-ui/core'
import React,{useState, useEffect} from 'react'
import ApiService from "./ApiServiceLogin";
import {useHistory} from "react-router-dom";

function ShowEmail() {
    const history = new useHistory();
   
    return (
        <div>
            <div className="Email-header">
                <h2>아이디 찾기 결과</h2><br></br>
                <h3>다음 정보로 가입된 아이디 입니다.</h3>                                    
            </div>
            <div className="Email-body">
            <table>
                <tr><th>이름</th></tr>
                <tr><td>user_name</td></tr>
                <tr><th>생년월일</th></tr>
                <tr><td>user_birthday</td></tr>
                <tr><th><b>아이디</b></th></tr>
            </table>
            <p>아이디 찾기에 더 궁금하신 사항이 있다면 고객센터에 문의 주세요.</p>
            </div>
            <div className="Email-footer">
            <Button onClick={() => {history.push("/findPW")}}>비밀번호 찾기</Button>&nbsp;&nbsp;
            <Button onClick={() => {history.push("/login")}}>로그인 하기</Button>
            </div>   
        </div>
    )
}

export default ShowEmail
