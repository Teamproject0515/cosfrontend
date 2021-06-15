import React, {useEffect, useState} from 'react';
import {Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';

function ModalUpdateAccountComponent(props) {

    const [openAccountModify, setOpenAccountModify] = useState(false);
    const [openRepayModify, setOpenRepayModify] = useState(false);

    useEffect(() => {
        if(props.user_account.user_bank != null && props.user_account.user_account != null){
            setOpenAccountModify(true);
        }
        if(props.user_account.user_repay != null){
            setOpenRepayModify(true);
        }
    })

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
          padding: theme.spacing(2, 4, 3),
          borderRadius:'10px'
        },
      }));

    const classes = useStyles();

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openUserAccountInsert}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openUserAccountInsert}>
                <div className={classes.paper} style={{width:'640px'}}>
                                <div style={{height:'20px'}}></div>
                                <div style={props.centerDivBetween}>
                                    <h5 style={{margin:'0px'}}>{props.user_name}님의 환불계좌 정보</h5><Button style={{fontSize:'12px', margin:'0px', padding:'0px', color:'gray'}} onClick={() => props.openAccountButton()}>등록</Button>
                                </div>
                                
                                {props.userAccount01 && <props.UserAccount user_name={props.user_name} user_email={props.user_email} handleClose={props.handleClose}/>}

                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px', paddingTop:'0px'}}/>

                                <div style={{fontSize:'11px'}}>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>[등록된 환불 계좌]</div>
                                    
                                        <div style={{border:'1px solid lightgray', marginBottom:'10px', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <div style={{textAlign:'left'}}>
                                                이름 : {props.user_account.user_name}<br/>
                                                은행 : {props.user_account.user_bank}<br/>
                                                계좌번호 : {props.user_account.user_account}<br/>
                                            </div>
                                            <div>{openAccountModify && <Button onClick={() => props.update_user_account()} style={{fontSize:'12px', color:'gray'}}>수정</Button>}</div>
                                        </div>
                                        {props.updateUserAccount && <props.UpdateUserAccount user_name={props.user_name} user_email={props.user_email} handleClose={props.handleClose}/>}
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌 등록 및 수정 확인은 재로그인이 필요합니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌는 본인 명의의 계좌번호만 등록/변경 가능합니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>* 환불계좌는 저장하시면, 추후 이용 시 별도의 계좌입력 없이 이용하실 수 있습니다.</div>
                                    <div style={{textAlign:'left', marginBottom:'50px'}}>* 정보 입력 또는 수정일로부터 1년간 환불기록이 없을 경우, 금융정보보호정책에 따라 환불계좌 정보는 삭제됩니다.</div>
                                </div>

                                <div style={props.centerDivBetween}>
                                    <h5 style={{margin:'0px'}}>소득공제용 현금영수증</h5>
                                    <Button style={{fontSize:'12px', margin:'0px', padding:'0px', color:'gray', backgroundColor:'white'}} onClick={() => props.insertUserRepay()}>등록</Button>
                                </div>
                                
                                <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px', paddingTop:'0px'}}/>

                                <div style={{fontSize:'11px'}}>
                                    <div style={{textAlign:'left', marginBottom:'10px'}}>[등록된 소득공제용 현금영수증]</div>
                                    <div style={{border:'1px solid lightgray', marginBottom:'10px', padding:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
                                            <div style={{textAlign:'left'}}>
                                                소득공제용 정보 : {props.user_account.user_repay}<br/>
                                            </div>
                                            <div>{openRepayModify && <Button onClick={() => props.update_user_repay()} style={{fontSize:'12px', color:'gray', backgroundColor:'white'}}>수정</Button>}</div>
                                        </div>
                                        {props.openUpdateUserRepay && <props.UpdateUserRepay user_email={props.user_email} handleClose={props.handleClose}/>}
                                    {/* <div style={{textAlign:'left', marginBottom:'30px'}}>{props.user.user_repay}</div> */}
                                    {props.openInsertUserAccountPAY && <props.InsertUserAccountPAY user_email={props.user_email} handleClose={props.handleClose}/>}
                                   
                                </div>
                                
                            </div>
                    </Fade>
            </Modal>
        </div>
    )
}


export default ModalUpdateAccountComponent
