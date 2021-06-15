import React from 'react';
import {Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';

function ModalDeleteUserComponent(props) {

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
                open={props.openUserDelete}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openUserDelete}>
                    <div className={classes.paper} style={{width:'640px'}}>
                        <h5>회원 탈퇴</h5>
                        <div style={{fontSize:'12px', textAlign:'left'}}>
                        이용해 주셔서 감사합니다.<br/>
                        이용하시면서 불만족스러웠던 점을 지적해주시면 서비스 개선에 참고하도록 하겠습니다.<br/>
                        회원 탈퇴 시, 아래 사항을 유의해 주시기 바랍니다.<br/>
                        </div>

                        <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 50px 0px', paddingBottom:'0px'}}/>
                        <h5>회원탈퇴 확인사항</h5>
                        <div style={{fontSize:'12px', textAlign:'left'}}>
                        ※ 재가입하셔도 개인정보가 복원되지 않습니다.<br/>
                        더현대닷컴에 가지고 계신 더머니, 예치금, 할인쿠폰 등의 혜택이 자동 삭제되며, 재가입하실 경우에도 복원되지 않습니다.<br/>
                        <br/>
                        ※ 아이디를 재사용하실 수 없습니다.<br/>
                        기존에 사용하셨던 ID는 재가입 시 사용하실 수 없습니다.<br/>
                        <br/>
                        ※ 탈퇴 후에도 게시판형 서비스에 등록한 게시물은 그대로 남아 있습니다.<br/>
                        게시판 등에 올린 게시글 및 댓글은 탈퇴시 자동삭제되지 않고 남아 있습니다. 삭제를 원하시는 게시글이 있다면 탈퇴전에 삭제하시기 바랍니다.<br/>
                        (단, 답글이 달린 글은 삭제 불가)
                        <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'50px 0px 50px 0px', paddingBottom:'0px'}}/>

                        ※ 진행중인 주문, 반품이 있을 시 회원 탈퇴가 불가능 합니다. 해당 사항을 완료 후 탈퇴를 하실 수 있습니다.<br/>
                        </div>
                        <div style={{marginTop:'50px', marginBottom:'50px'}}></div>
                        <div style={{display:'flex', justifyContent:'center'}}>
                            <button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', border:'1px solid lightgray', marginRight:'10px'}} onClick={props.handleClose}>취소</button>
                            <button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'}} name='recheck_user_delete' onClick={props.handleOpen}>회원 탈퇴</button><br/>
                        </div>
                    </div>
                </Fade>
            </Modal>

            <Modal
                className={classes.modal}
                open={props.openReCheckUserDelete}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                        <Fade in={props.openReCheckUserDelete}>
                            <div className={classes.paper}>
                                <h5>정말 회원 탈퇴 하시겠습니까?</h5>
                                    <Button variant="contained" style={{backgroundColor:'white', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', border:'1px solid lightgray', marginRight:'10px'}} onClick={props.handleClose}>취소</Button>
                                    <Button variant="contained" style={{backgroundColor:'#444', width:'200px', height:'40px', borderRadius:'0px', marginBottom:'10px', boxShadow:'none', fontSize:'13px', color:'white'}} name='recheck_user_delete' onClick={props.deleteUser}>회원 탈퇴</Button><br/>
                            </div>
                            </Fade>
                    </Modal>       
        </div>
    )
}


export default ModalDeleteUserComponent
