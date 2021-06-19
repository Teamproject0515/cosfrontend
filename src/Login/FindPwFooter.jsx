import { Button } from '@material-ui/core'
import React from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components';

function FindIdFooter(){
    const history = useHistory();

    const Footer = styled.div`
    margin: 30px 0;
    `;
    
    return (
        <Footer>     
            <Button onClick={() => {history.push("/findEmail")}}>아이디 찾기</Button>&nbsp;&nbsp;
            <Button onClick={() => {history.push("/signIn")}}>로그인 하기</Button>      
            </Footer> 
    )
}

export default FindIdFooter
