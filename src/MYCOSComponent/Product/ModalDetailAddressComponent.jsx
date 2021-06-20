import React, {useState} from 'react';
import {Button, Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import ApiService from '../../ApiService';

function ModalDetailAddressComponent(props) {


    const UserAddress = props.UserAddressBySeq;

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

      function submit(){
          const user_info = {
              address_seq : props.UserAddressBySeq.address_seq,
              user_email : UserAddress.user_email,
              address_phone : props.address_phone,
              address_phone2 : props.address_phone2,
              post_code : props.post_code,
              address : props.address,
              detail_address : props.detail_address,
              address_name : props.address_name,
              user_name : props.user_name,
          }
        //   console.log(user_info);
          ApiService.UpdateUserAddress(user_info);
          props.handleClose();
          
      }

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openDetailAddress}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.openDetailAddress}>
                    <div className={classes.paper}>
                        <div style={{textAlign:'left', marginTop:'10px'}}>
                        {/* <h5 style={{margin:'0px 0px 20px 0px'}}>배송지 정보</h5> */}
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>이메일</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" value={UserAddress.user_email} name="change_email" onChange={props.onChange} disabled/>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>휴대폰 번호</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" name="change_phone" onChange={props.onChange}/>
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.</div>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>받는 사람</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" name="change_user_name" onChange={props.onChange}/>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>주소 이름</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'15px'}} type="email" name="change_address_name" onChange={props.onChange}/>

                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>추가 연락처</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'285px', marginBottom:'5px'}} type="email" name="change_phone2" onChange={props.onChange}/>                            
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'15px'}}>"-" 없이 숫자만 입력해 주세요.(선택)</div>
                            
                            <div style={{fontSize:'11px', color:'black', textAlign:'left', marginBottom:'5px'}}>배송지주소</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'175px', marginBottom:'15px'}} type="email" value={props.post_code} name="change_post_code" onChange={props.onChange}/>
                            <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} onClick={() => props.toggleNav()}>찾기</Button>
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" value={props.address} name="change_address" onChange={props.onChange}/>
                            </div>
                            
                            <div>
                                <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'290px', marginBottom:'10px'}} type="email" name="change_detail_address" onChange={props.onChange}/>
                            </div>
                        </div>

                        <Button style={{backgroundColor:'#444', width:'148px', height:'30px', borderRadius:'0px', marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'}} onClick={() => submit()}>확인</Button>
                        <Button style={{backgroundColor:'white', width:'148px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'#444', border:'1px solid gray'}} onClick={() => props.handleClose()}>취소</Button>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
    
}

export default ModalDetailAddressComponent;
