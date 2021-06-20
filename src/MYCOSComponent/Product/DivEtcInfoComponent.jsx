import React, {useState} from 'react';
import {Grid} from '@material-ui/core';
import ApiService from '../../ApiService';

function InsertUserAccount(props) {

    return (
        <div>
            <hr style={{height:'2px', border:'0px', backgroundColor:'black', marginTop:'15px', marginBottom:'15px'}}/>
            <div style={{display:'flex'}}>
                <Grid item xs={6} sm={12} style={{minWidth:'120px'}}>
                    <div><b style={{color:'gray'}}>취소</b></div>
                    <div style={{fontSize:'11px', color:'gray'}}>
                    - 여행/레저/숙박 상품은 취소 시 수수료가 발생할 수 있으며,<br/>
                    취소수수료를 확인하여 2일 이내(주말,공휴일 제외) 처리결과를 문자로 안내해드립니다.(당일 접수 기준, 마감시간 오후 4시)<br/>
                    - 문화 상품은 사용 전날 24시까지 취소 신청 시 취소수수료가 발생되지않습니다.<br/>
                    </div>

                    <br/>

                    <div><b style={{color:'gray'}}>반품</b></div>
                    <div style={{fontSize:'11px', color:'gray'}}>
                    - 상품 수령 후 7일 이내 신청하여 주세요.<br/>
                    - 상품이 출고된 이후에는 배송 완료 후, 반품 상품을 회수합니다.<br/>
                    - 설치상품/주문제작/해외배송/신선냉동 상품 등은 고객센터에서만 반품 신청이 가능합니다. <br/>
                    </div>

                    <br/>

                    <div><b style={{color:'gray'}}>교환</b></div>
                    <div style={{fontSize:'11px', color:'gray'}}>
                    - 상품의 교환 신청은 고객센터로 문의하여 주세요.<br/>
                    </div>
                </Grid>       
            </div>
        </div>
    )
}


export default InsertUserAccount
