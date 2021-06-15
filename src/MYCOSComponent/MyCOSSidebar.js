import React from 'react'
import {Grid} from '@material-ui/core';

function ManagerSidebar({memberinfoOpen,deliveryinfoOpen,addressinfoOpen}) {
    return (
        <Grid item xs={6} sm={3} style={{minHeight:'800px'}}>
            <div style={labelStyle} onClick={()=>memberinfoOpen()}>회원정보</div>
            <div style={labelStyle} onClick={()=>deliveryinfoOpen()}>주문내역</div>
            <div style={labelStyle} onClick={()=>addressinfoOpen()}>배송지관리</div>
            {/* <div style={labelStyle} >예치금</div>
            <div style={labelStyle}>영수증/세금계산서</div> */}
        </Grid>
    )
}

const labelStyle = {
    textAlign:'left', fontSize:'13px', marginBottom:'8px', color:'#999999'
}

export default ManagerSidebar
