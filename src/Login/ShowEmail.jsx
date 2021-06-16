import {Table, TableRow, TableCell} from '@material-ui/core'
import {useHistory} from "react-router-dom";
import Footer from "./FindIdFooter";
import styled from "styled-components";
import React,{ useEffect} from 'react';

function ShowEmail() {
    const history = useHistory(); 

    let user_name = sessionStorage.getItem("user_name");
    let user_birthday = sessionStorage.getItem("user_birthday");
    let user_email = sessionStorage.getItem("user_email");

    useEffect(()=>{
        console.log('이메일 찾음 페이지');
        return ()=>{
            sessionStorage.clear();
            console.log('sessionStorage clear()');
        };
    },[]);

    const Div = styled.div`
    width: 350px;
    margin:80px auto;
    height: 400px;
    maxHeight: 500px;
    text-align: center;
    `;


    return (
        <Div>
            <div className="Email-header">
                <h3>아이디 찾기 결과</h3>
                <p>다음 정보로 가입된 아이디 입니다.</p>                                    
            </div>
            <Table> 
                <TableRow><TableCell 
                >이름</TableCell></TableRow>
                <TableRow><TableCell align="center">{user_name}</TableCell></TableRow>
                <TableRow><TableCell align="center">생년월일</TableCell></TableRow>
                <TableRow><TableCell align="center">{user_birthday}</TableCell></TableRow>
                <TableRow><TableCell align="center">아이디/이메일</TableCell></TableRow>
                <TableRow><TableCell align="center">{user_email}</TableCell></TableRow>
            </Table>
            <p>아이디 찾기에 더 궁금하신 사항이 있다면 고객센터에 문의 주세요.</p>
            <Footer/>
        </Div>
    )
}

export default ShowEmail
