import React from 'react';
import {makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';

function ModalUpdateSNSComponent(props) {

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
                open={props.openUserSNSConnect}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={props.openUserSNSConnect}>
                    <div className={classes.paper} style={{width:'640px'}}>
                        <h5>개인계정 연결관리</h5>
                        <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px'}}/>
                        <div>
                            {/*<div style={{display:'flex'}}>
                                <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>NAVER</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                            </div>*/}
                            <div style={{display:'flex'}}>
                                <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>KAKAO</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                            </div>
                            {/*<div style={{display:'flex'}}>
                                <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>FACEBOOK</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                            </div>
                            <div style={{display:'flex'}}>
                                <div  style={{fontSize:'12px', textAlign:'left', width:'40px'}}>GOOGLE</div><div style={{fontSize:'12px', width:'60px'}}> : </div><div style={{fontSize:'12px', textAlign:'left', width:'60px'}}>등록하기</div>
                            </div>*/}
                            <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'10px 0px 10px 0px', paddingBottom:'0px'}}/>
                        </div>
                    </div>
                </Fade>
            </Modal>
        </div>
    )
}


export default ModalUpdateSNSComponent
