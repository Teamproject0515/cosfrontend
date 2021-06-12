import { TextField , Button, Link, IconButton} from '@material-ui/core'
import {useHistory, useLocation} from "react-router-dom";
import Footer from "./FindIdFooter";
import styled from "styled-components";

function ShowEmail() {
    const history = useHistory(); 

    let user_name = sessionStorage.getItem("user_name");
    let user_birthday = sessionStorage.getItem("user_birthday");
    let user_email = sessionStorage.getItem("user_email");

    const Div = styled.div`
    width: 350px;
    margin:80px auto;
    height: 400px;
    maxHeight: 500px;
    `;

    const Header = styled.div`
    margin-bottom: 20px;
    p{
        font-size:14px;       
    }
    `;

    const Body = styled.div`
    margin: 30px 0;
    p{
        color:gray;
        font-size:14px;
        text-align: left;      
    }
    `;

    styled.table`
    margin: 40px 0;
    text-align: left;
    `;

    return (
        <Div>
            <Header className="Email-header">
                <h3>아이디 찾기 결과</h3>
                <p>다음 정보로 가입된 아이디 입니다.</p>                                    
            </Header>
            <Body className="Email-body">
            <table>
                <tr><th>이름</th></tr>
                <tr><td>{user_name}</td></tr>
                <tr><th>생년월일</th></tr>
                <tr><td>{user_birthday}</td></tr>
                <tr><th>아이디</th></tr>
                <tr><td>{user_email}</td></tr>
            </table>
            <p>아이디 찾기에 더 궁금하신 사항이 있다면 고객센터에 문의 주세요.</p>
            </Body>
            <Footer/>
        </Div>
    )
}

export default ShowEmail
