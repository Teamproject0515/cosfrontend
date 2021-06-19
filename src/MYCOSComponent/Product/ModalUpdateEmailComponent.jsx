import React from 'react';
import {Button, makeStyles, Modal, Backdrop, Fade} from '@material-ui/core';

function ModalUpdateEmailComponent(props) {

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
                open={props.open}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.open}>
                    <div className={classes.paper}>
                        <div style={{textAlign:'left', marginTop:'10px'}}>
                        <h5 style={{margin:'0px 0px 20px 0px'}}>이메일 변경신청</h5>
                            <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'5px'}}>변경할 이메일 주소</div>
                            <input style={{textAlign:'left', border:'0px', borderRadius:'0px', padding:'8px', fontSize:'11px', color:'gray', backgroundColor:'#E7E7E7', width:'170px', marginBottom:'10px'}} type="email" placeholder="이메일 주소를 입력해주세요." name="change_email" onChange={props.onChange} onKeyPress={props.onKeyPress}/>
                            <Button style={{backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white'}} name="update_email" onClick={() => props.updateButton()}>수정하기</Button>
                            {/* <div style={{fontSize:'11px', color:'gray', textAlign:'left', marginBottom:'0px'}}>* 변경된 정보는 재로그인을 통해서 확인할 수 있습니다.</div> */}
                        </div>
                    </div>
                    </Fade>
            </Modal>
        </div>
    )
}


export default ModalUpdateEmailComponent
