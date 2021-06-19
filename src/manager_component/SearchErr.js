import React,{useState} from 'react'
import UserList from './User/UserList';

function SearchErr() {
    
    const [result,setResult] = useState(false);
    
    const openNoResult = ()=>{
        setResult(true);
    }
    const openResult = ()=>{
        setResult(false);
    }
    
    return (
        <>
        <div style={{marginTop:'20px'}}><h4>검색결과가 없습니다.</h4></div>
        <UserList openNoResult={openNoResult} openResult={openResult}/>
        </>
    )
}

export default SearchErr
