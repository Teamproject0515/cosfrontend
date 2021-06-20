import React, { useEffect,useState } from 'react'
import { Link,RouteComponentProps } from 'react-router-dom';
import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import ApiService from "../ApiServiceChu";

const ChatMain=(props)=>{
    const {search} = props.location;
    const [chatSubmit,setChatSubmit] = useState({
        toEmail:search.split("=")[1],
        chatContent:""
    });


    const handleChatContent=(e)=>{
        setChatSubmit({...chatSubmit,
            chatContent:e.target.value});
        console.log(chatSubmit);
        
    }
    const submitChat=()=>{
        ApiService.submitChat(chatSubmit)
        .then(
            setChatSubmit({...chatSubmit,
            chatContent:""})
        )
    }

    return(
        <div>
            <h3>채팅</h3>
            <div>
                    <input name="message" type="text" placeholder="내용 입력" onChange={handleChatContent}/>
                    <button onClick={submitChat}>전송</button>
            </div>

        </div>
    );
}
export default ChatMain;