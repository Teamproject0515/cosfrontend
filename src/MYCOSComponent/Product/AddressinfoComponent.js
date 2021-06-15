import React, {useState,useEffect} from 'react';
import {Table, TableBody, TableCell, TableRow, Grid, Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

import ApiService from '../../ApiService';
import DaumPostcode from 'react-daum-postcode';
import ModalKAKAOPost from './ModalKAKAOPostComponent';
import ModalKAKAOInsertPost from './ModalKAKAOInsertPostComponent';
import ModalDetailAddress from './ModalDetailAddressComponent';
import ModalUpdateAddress from './ModalUpdateAddressComponent';
import ModalInsertAddress from './ModalInsertAddressComponent';

function AddressinfoComponent(props) {

    const [useraddresses,setuseraddresses] = useState([]);
    const [isOpenUpdatePost, setIsOpenUpdatePost] = useState(false);
    const [isOpenPost, setIsOpenPost] = useState(false);
    const [isOpenInsertPost, setIsOpenInsertPost] = useState(false);
    const [openDetailAddress, setOpenDetailAddress] = useState(false);
    const [openInsertAddress, setOpenInsertAddress] = useState(false);
    const [UserAddressBySeq, setUserAddressBySeq] = useState('');
    const [state, setState] = useState(0);

    const [post_code,setPost_code] = useState('');                  //우편번호
    const [address,setAddress] = useState('');                  //주소
    const [user_seq, setUser_seq] = useState(props.user.user_seq);
    const [user_email, setUser_email] = useState(props.user.user_email);
    const [address_phone, setAddress_phone] = useState(null);
    const [address_phone2, setAddress_phone2] = useState(null);
    const [detail_address, setDetail_Address] = useState(null);
    const [address_name, setAddress_name] = useState(null);
    const [user_name, setUser_name] = useState(null);

    const [changePostcode, setChangePostcode] = useState('');

    const [user_info, setUserinfo] = useState([]);

    useEffect(() => {
        ApiService.getUserAddressList(user_email)
        .then( res => {
            setuseraddresses(res.data);
            setState(0);
            // console.log("회원 배송지 리스트 불러오기 : "+useraddresses);
            // console.log("state : " + state);

        })
        .catch(err => {
            console.log('userinfo print error!', err);
        })
        
    },[user_email, isOpenUpdatePost, isOpenPost, state, openDetailAddress]);


    // 수정 누르면 뜨는 모달 데이터
    function toggleUpdatePost(address_seq){
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        ApiService.getUserAddressByAddress_seq(address_seq)
        .then( res => {
            setUserAddressBySeq(res.data);
            setState(1);
            // console.log(state);
        })
        .catch(err => {
            console.log('UserAddressBySeq print error!', err);
        })
        setIsOpenUpdatePost(isOpenUpdatePost => !isOpenUpdatePost);
    }


    const toggleNav = (e) => {
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        setIsOpenPost(isOpenPost => !isOpenPost);
        setState(2);
    }

    const toggleInsertNav = (e) => {
        //사용자가 클릭시 falue면 true로 true면 falue로 토글
        setIsOpenInsertPost(isOpenInsertPost => !isOpenInsertPost);
        setState(4);
    }

    const handleClose = (e) => {
        setIsOpenPost(false);
        setIsOpenInsertPost(false);
        setOpenDetailAddress(false);
        setIsOpenUpdatePost(false);
        setOpenInsertAddress(false);
        setState(3);
    };

    const onChange = (e) => {
        if(e.target.name === "change_email"){
            setUser_email(e.target.value);
        }else if(e.target.name === "change_phone"){
            setAddress_phone(e.target.value);
        }else if(e.target.name === "change_phone2"){
            setAddress_phone2(e.target.value);
        }else if(e.target.name === "change_post_code"){
            setPost_code(e.target.value);
        }else if(e.target.name === "change_address"){
            setAddress(e.target.value);
        }else if(e.target.name === "change_detail_address"){
            setDetail_Address(e.target.value);
        }else if(e.target.name === "change_address_name"){
            setAddress_name(e.target.value);
        }else if(e.target.name === "change_user_name"){
            setUser_name(e.target.value);
        }
    }

   function AddressAdd(){
    //    console.log(useraddresses);
       setOpenInsertAddress(true);
   }
    
    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        paper: {
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[5],
            padding: theme.spacing(5, 5, 5),
            borderRadius:'10px'
        },
    }));
    
    const classes = useStyles();


    //카카오 주소 api 수정에 필요함
    function seachAddress(e){
        const onCompletePost = (data) => {
            let fullAddress = data.address;
            let zonecode = data.zonecode;
            let extraAddress = ''; 
            
            if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }

            const post_code = zonecode;
            const address = fullAddress;
            setPost_code(zonecode);
            setAddress(fullAddress);
            setState(5);
            setIsOpenPost(false);
            setIsOpenUpdatePost(false);
            setOpenDetailAddress(true);
        }     
    
        const postCodeStyle =  makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
        }));
        return (
            <Modal
            className={classes.modal}
            open={isOpenPost}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={isOpenPost}>
                    <div className={classes.paper} style={{width:'640px'}}>
                        {isOpenPost && <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />}
                    </div>
                </Fade>
            </Modal>
        );
    }    


    //카카오 주소 api 인서트에 필요함
    function searchAddress(e){
        const onCompletePost = (data) => {
            let fullAddress = data.address;
            let zonecode = data.zonecode;
            let extraAddress = ''; 
            
            if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            }

            const post_code = zonecode;
            const address = fullAddress;
            setPost_code(zonecode);
            setAddress(fullAddress);
            setState(11);
            setIsOpenInsertPost(false);
        }     
    
        const postCodeStyle =  makeStyles((theme) => ({
        paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        },
        }));
        return (
            <Modal
            className={classes.modal}
            open={isOpenInsertPost}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
            >
                <Fade in={isOpenInsertPost}>
                    <div className={classes.paper} style={{width:'640px'}}>
                        {isOpenInsertPost && <DaumPostcode style={postCodeStyle} onComplete={onCompletePost} />}
                    </div>
                </Fade>
            </Modal>
        );
    }    


    function onNextButton(){
        setIsOpenPost(false);
        setIsOpenUpdatePost(false);
        setOpenDetailAddress(true);
        setState(6);
    }

    function deleteUserAddress(address_seq){
        setState(7);
        // console.log(state);
        ApiService.deleteUserAddress(address_seq);
        setState(8);
        alert("주소가 삭제됐습니다.");
        // console.log(state);
    }



    return (
        <>
        <Grid item xs={6} sm={8}>
            <div style={{display:'flex', justifyContent:'space-between'}}>
                <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>배송지 정보</div><div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>
                    <Button style={{fontSize:'13px', padding:'0px'}} onClick={() => AddressAdd()}>배송지 추가</Button>
                </div>
            </div>
            <div style={{minHeight:'800px'}}>

                {useraddresses.map(useraddress => 
                        
                <Table style={{marginBottom:'30px'}}>
                    <TableBody style={{borderRadius:'10px', padding:'10px', minWidth:'600px'}}>
                        <TableRow key={useraddress.user_email} style={{display:'flex', alignItems:'center'}}>
                            <TableCell style={{fontSize:'11px', border:'0px', padding:'0px', color:'black', paddingBottom:'10px', paddingRight:'50px'}}>{useraddress.address_name}</TableCell><TableCell style={{border:'0px', padding:'0px', paddingBottom:'10px'}}>
                                <Button style={{fontSize:'11px', padding:'0px'}} onClick={() => toggleUpdatePost(useraddress.address_seq)}>수정</Button>
                                <Button style={{fontSize:'11px', padding:'0px'}} onClick={() => deleteUserAddress(useraddress.address_seq)}>삭제</Button>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.address_phone}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.address}</TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell style={{fontSize:'11px', border:'0px', margin:'0px', padding:'0px', color:'#999'}}>{useraddress.detail_address}</TableCell>
                        </TableRow>   
                    </TableBody>
                </Table>
                )}

                {isOpenPost && <ModalKAKAOPost isOpenPost={isOpenPost} setIsOpenPost={setIsOpenPost} handleClose={handleClose} user_email={user_email} setOpenDetailAddress={setOpenDetailAddress} seachAddress={seachAddress}/>}
                {isOpenInsertPost && <ModalKAKAOInsertPost isOpenInsertPost={isOpenInsertPost} setIsOpenInsertPost={setIsOpenInsertPost} handleClose={handleClose} searchAddress={searchAddress} UserAddressBySeq={UserAddressBySeq}/>}
                {isOpenUpdatePost && <ModalUpdateAddress isOpenUpdatePost={isOpenUpdatePost} handleClose={handleClose} UserAddressBySeq={UserAddressBySeq} toggleNav={toggleNav} onChange={onChange} onNextButton={onNextButton}/>}
                {openDetailAddress && <ModalDetailAddress openDetailAddress={openDetailAddress} UserAddressBySeq={UserAddressBySeq} handleClose={handleClose} post_code={post_code} address={address} toggleNav={toggleNav} address_phone2={address_phone2}  onChange={onChange} detail_address={detail_address} address_phone={address_phone} address_name={address_name} user_name={user_name}/>}
                {openInsertAddress && <ModalInsertAddress openInsertAddress={openInsertAddress} UserAddressBySeq={UserAddressBySeq} handleClose={handleClose} post_code={post_code} address={address} toggleInsertNav={toggleInsertNav} address_phone2={address_phone2}  onChange={onChange} detail_address={detail_address} address_phone={address_phone} address_name={address_name} user_email={user_email} user_name={user_name} setState={setState}/>}
            </div>
        </Grid>
        </>
    )
}

const button = {
    width:'170px', border:'1px solid lightgray', margin:'5px'
}

export default AddressinfoComponent
