import React from 'react';
import {Button, Modal, Backdrop, Fade, Grid} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';
import { withRouter } from 'react-router-dom';
import { useState } from 'react';
import DivEtcInfo from './DivEtcInfoComponent';

function ModalDetailAddressComponent(props) {
    
    const imgUrl = '/imgs/';

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

    // 선택한 상품의 상세 페이지로 이동
    function Productinfo(ID){
        window.localStorage.setItem("ProductID", ID);
        props.history.push('/product-detail');
    }

    const [openEtcInfo, setOpenEtcInfo] = useState(false);

    function openEtcInfoButton(){
        if(openEtcInfo === false){
            setOpenEtcInfo(true);
        }else{
            setOpenEtcInfo(false);
        }
    }

    return (
        <div>
            {/* 휴대전화번호 변경 모달 */}
            <Modal
                className={classes.modal}
                open={props.openOrderInfo}
                onClose={props.handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
            >
                <Fade in={props.openOrderInfo}>
                    <Grid item xs={6} sm={3} style={{minWidth:'650px'}}>
                        <div className={classes.paper}>
                            <div style={{textAlign:'left', marginTop:'10px'}}>

                                <div style={{display:'flex', justifyContent:'space-between'}}>
                                    <div>
                                        <div style={{fontSize:'14px', color:'black', textAlign:'left', marginBottom:'5px'}}>주문상세내역</div>
                                        <div style={{fontSize:'13px'}}>{props.orderInfo.order_date} 주문 · 주문번호 {props.orderInfo.order_id}</div>
                                        <div style={{marginBottom:'20px', marginTop:'20px'}}><b>{props.orderInfo.order_status}</b></div>
                                    </div>
                                    <Button style={button2} onClick={() => props.handleClose()}>닫기</Button>
                                </div>
    

                                <div style={{border:'1px solid lightgray', padding : '10px', borderRadius:'5px'}}>
                                {props.orderDetailInfo.map(detailinfo => 
                                <div style={{display:'flex', fontSize:'13px', marginBottom:'3px', marginTop:'3px'}} onClick = {() => {Productinfo(detailinfo.product_id)}}>
                                    <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                        <img src={imgUrl+detailinfo.imgs[0]} style={{width:'100px'}}/>
                                    </Grid>
                                    <Grid item xs={6} sm={10} style={{paddingTop:'10px'}}>
                                        <div>{detailinfo.product_title}</div>
                                        <div>{detailinfo.product_price}원 / {detailinfo.amount}개</div>
                                    </Grid>
                                </div>
                                )}
                                </div>

                                <div style={{marginTop:'50px', fontSize:'13px'}}>
                                    <div><b>받는사람 정보</b></div>
                                    <hr style={{height:'2px', border:'0px', backgroundColor:'black', marginTop:'15px', marginBottom:'15px'}}/>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px', marginBottom:'5px'}}>
                                            <div>받는사람</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.user_name}</div>
                                        </Grid>                                        
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>받는 주소</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>({props.orderInfo.post_code}) {props.orderInfo.address} {props.orderInfo.detail_address}</div>
                                        </Grid>
                                    </div>
                                </div>
                                
                                <div style={{marginTop:'50px', fontSize:'13px'}}>
                                    <div><b>결제 정보</b></div>
                                    <hr style={{height:'2px', border:'0px', backgroundColor:'black', marginTop:'15px', marginBottom:'15px'}}/>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px', marginBottom:'5px'}}>
                                            <div>결제수단</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.pay_info}</div>
                                        </Grid>                                        
                                    </div>
                                    <div style={{display:'flex'}}>
                                        <Grid item xs={6} sm={2} style={{minWidth:'120px'}}>
                                            <div>총 상품 가격</div>
                                        </Grid>
                                        <Grid item xs={6} sm={10}>
                                            <div>{props.orderInfo.total_price}원</div>
                                        </Grid>
                                    </div>
                                </div>

                                <div style={{marginTop:'50px', fontSize:'13px'}}>
                                    <div style={{display:'flex', alignItems:'center'}}>
                                        <div><b>취소/반품/교환 신청</b> 전 확인해주세요.</div>
                                        <div>
                                            <Button style={{height:'20px'}}onClick={() => openEtcInfoButton()}>더보기 〉</Button>
                                        </div>
                                    </div>



                                    {openEtcInfo && <DivEtcInfo/>}
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Fade>
            </Modal>
        </div>
    )
}

const button2 = {
    width:'50px', height:'30px', borderRadius:'0px', marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'gray', border:'1px solid lightgray'
}

export default withRouter(ModalDetailAddressComponent);
