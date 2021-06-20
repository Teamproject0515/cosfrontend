import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService'
import UserTableBox from './component/UserTableBox';
import UserStatusTableBody from './component/UserStatusTableBody';

function UserStatus(props) {
    //서버에서 받아올 유저 저장소
    const [users, setUsers] = useState({ user: [] });
    const [keyword, setKeyword] = useState('');
    const [searchType, setSearchType] = useState('user_name');
    const [pageNums, setPageNums] = useState(0);
    const [pageOpen,setPageOpen] = useState(true);
    
    function onChangeSearch(e) {
        setKeyword(e.currentTarget.value);
    }
    function onSearchType(e) {
        setSearchType(e.currentTarget.value);
    }

    //새로고침시에만 실행
    useEffect(() => {
        getUserState(0);
        getUserLogCount();
    }, [])

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }
    //서버 유저목록 가져옴
    const getUserState = (pageNum)=> {
        AxiosApiService.UserState(pageNum)
            .then(res => {
                setUsers({ user: res.data });
            })
            .catch(err => {
                props.history.push('/managerDefaultErr');
                console.log('getUserState() Error!', err);
            })
    }
    
    function search() {
        console.log(searchType, keyword);
        AxiosApiService.userStateSeachList(searchType, keyword)
            .then(res => {
                setUsers({
                    user: res.data
                })
                setPageOpen(false);
            })
            .catch(err => {
                props.history.push('/managerDefaultErr');
                console.log('search() 에러', err);
            });
    }

    function getUserLogCount() {
        AxiosApiService.getUserLogCount()
            .then(res => {
                setPageNums(res.data)
            })
            .catch(err => {
                props.history.push('/managerDefaultErr');
                console.log('getProductCount() Error!', err);
            })
    }

    return (
        <>
            <UserTableBox 
            onSearchType={onSearchType}
            onChangeSearch={onChangeSearch}
            onKeyPress={onKeyPress}
            search={search}
            users={users}
            title='고객 상태'
            name='고객이름'
            email='고객이메일'
            phone='전화번호'
            tableTitle1='고객상태'
            tableTitle2='고객이메일'
            tableTitle3='고객이름'
            tableTitle4='고객전화번호'
            tableTitle5='고객변경일'
            keyword='유저 검색'
            isOpen={true}
            />
            
            {pageOpen && [...new Array(pageNums)].map((page,index)=>
                    <div style={{marginTop:'5px'}}>
                   <button style={{border:'none',padding:'5px',cursor:'pointer'}} onClick={()=>getUserState(index+1)}>{index+1}</button>
                   </div>
                )}
        </>
    )
}

export default UserStatus
