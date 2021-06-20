import React, { useState, useEffect } from 'react';
import AxiosApiService from '../../AxiosApiService'
import UserTableBox from './component/UserTableBox';

function UserList(props) {
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
        getUserList(0)
        getUserCount()
    }, [])

    const onKeyPress = (e) => {
        if (e.key === "Enter") {
            search();
        }
    }

    //서버 유저목록 가져옴
    const getUserList = (pageNum) => {
        AxiosApiService.getUserList(pageNum)
            .then(res => {
                setUsers({
                    user: res.data
                })
                window.scrollTo(0, 0);
            })
            .catch(err => {
                props.history.push('/managerDefaultErr');
                console.log('getUserList() Error!', err);
            })
    }

    function getUserCount() {
        AxiosApiService.userCount()
            .then(res => {
                setPageNums(res.data)
            })
           
            .catch(err => {
                props.history.push('/managerDefaultErr');
                console.log('getProductCount() Error!', err);
            })
    }

    function search() {
        console.log(searchType, keyword);
        AxiosApiService.userseachList(searchType, keyword)
            .then(res => {
                const userCheck = {
                    user: res.data
                }
                
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

    return (
        <>
             <UserTableBox 
            onSearchType={onSearchType}
            onChangeSearch={onChangeSearch}
            onKeyPress={onKeyPress}
            search={search}
            users={users}
            title='고객 목록'
            name='고객이름'
            email='고객이메일'
            phone='전화번호'
            tableTitle1='고객이메일'
            tableTitle2='고객이름'
            tableTitle3='고객전화번호'
            tableTitle4='고객주소'
            tableTitle5='고객가입일'
            keyword='유저 검색'
            isOpen={false}
            />
            <div style={{ display: 'flex', marginTop: '10px' }}>
                {pageOpen&&[...new Array(pageNums)].map((page, index) =>
                    <div style={{ marginRight: '5px' }}>
                        <button style={{ border: 'none', padding: '5px', cursor: 'pointer' }} onClick={() => getUserList(index + 1)}>{index + 1}</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default UserList
