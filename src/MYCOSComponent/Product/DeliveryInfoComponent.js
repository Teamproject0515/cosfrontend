import React, {useState, useEffect} from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow, Grid, Button} from '@material-ui/core';
import ApiService from '../../ApiService';
import { makeStyles } from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Paper from '@material-ui/core/Paper';
import ModalOrderInfo from './ModalOrderInfoComponent';

const columns = [
    { id: 'name', label: '주문', minWidth: 60 },
    { id: 'code', label: '날짜', minWidth: 80 },
    { id: 'population', label: '배송현황', minWidth: 80},
    { id: 'size', label: '총계', minWidth: 200 },
    { id: 'density', label: '', minWidth: 200, align: 'right' },
  ];
  
  const useStyles = makeStyles({
    root: {
      width: '100%',
      border:'0px',
      boxShadow:'0px',
    },
    container: {
      maxHeight: 700,
      border:'0px',
      
    },
  });
  

  export default function StickyHeadTable(props) {
    const [state, setState] = useState(0);
    const [orderList, setOrderList] = useState([]);

    useEffect(() => {
        ApiService.getUserOrderList(props.user.user_email)
        .then( res => {
            setOrderList(res.data);
            setState(1);
            // console.log(orderList);
            // console.log(orderList.length);
        })
        .catch(err => {
            console.log('product_list print error!', err);
        })
    },[props.user.user_email, state])


    const classes = useStyles();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [openOrderInfo, setOpenOrderInfo] = useState(false);
    const [orderInfo, setOrderInfo] = useState([]);
    const [orderDetailInfo, setOrderDetailInfo] = useState([]);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    const handleClose = (e) => {
        setOpenOrderInfo(false);
    }
  
    function selectOrderInfo(order_id){
        setOpenOrderInfo(true);

        // 해당 order_id로 order table에서 조회하기
        ApiService.selectOrderInfo(order_id)
            .then( res => {
            setOrderInfo(res.data);
            // console.log(orderInfo);
        })

        // 해당 order_id로 product, order_detail을 조인해서 조회하기
        ApiService.selectOrderDetailInfo(order_id)
            .then( res => {
            setOrderDetailInfo(res.data);
            // console.log(orderDetailInfo);
        })
    }
      
    function returnOrder(order_id, order_status){
        if(order_status === '배송준비중'){
            if(window.confirm("정말 주문을 취소하시겠습니까?")){
                ApiService.returnOrder(order_id);
                alert('주문 취소 요청 됐습니다.');
            }else{
                alert('주문 취소가 취소됐습니다.')
            }
        }else if(order_status === '취소요청'){
            alert('이미 주문취소 요청을 했습니다.');
        }else if(order_status === '취소완료'){
            alert('이미 취소완료된 주문입니다.')
        }
        setState(2);
    }

    return (
    <Grid item xs={6} sm={8}>
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                    
                    <TableRow>
                        {columns.map((column) => (
                        <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                        >
                            {column.label}
                        </TableCell>
                        ))}
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {orderList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((order) => {
                        return (
                        <TableRow hover role="checkbox" tabIndex={-1} key={order.order_id} >
                            <TableCell style={{border:'0px'}}>{order.order_id}</TableCell>
                            <TableCell style={{border:'0px'}}>{order.order_date}</TableCell>
                            <TableCell style={{border:'0px'}}>{order.order_status}</TableCell>
                            <TableCell style={{border:'0px'}}>총 금액 : {order.total_price}원, {order.order_product_amount}개 상품</TableCell>
                            <TableCell style={{textAlign:'right', border:'0px'}}>
                                <Button style={button1} onClick={() => selectOrderInfo(order.order_id)}>주문내역</Button>
                                <Button style={button2} onClick={() => returnOrder(order.order_id, order.order_status)}>취소</Button>
                            </TableCell>
                        </TableRow>
                        
                        );
                    })}
                    {openOrderInfo && <ModalOrderInfo openOrderInfo={openOrderInfo} orderInfo={orderInfo} orderDetailInfo={orderDetailInfo} handleClose={handleClose}/>}

                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={orderList.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    </Grid>
    );
  }

const button1 = {
    backgroundColor:'#444', width:'105px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'white', border:'0px'
}

const button2 = {
    width:'70px', height:'30px', borderRadius:'0px', marginLeft:'10px',marginBottom:'0px', boxShadow:'none', fontSize:'13px', color:'gray', border:'1px solid gray'
}






















// function DeliveryInfoComponent(props) {
//     return (
//         <Grid item xs={6} sm={7}>
//             <div style={{fontSize:'13px', textAlign:'left', marginBottom:'20px'}}>주문상세 내역</div>
//             <div style={{minHeight:'800px'}}>

//                 <Table style={{marginBottom:'20px'}}>
//                     <TableBody >
//                         <TableRow style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
//                             <Grid item xs={6} sm={8} style={{minWidth:'560px'}}>                        
//                                 <TableCell style={{border:'0px'}}>주문번호</TableCell>
//                                 <TableCell style={{border:'0px'}}>날짜</TableCell>
//                                 <TableCell style={{border:'0px'}}>배송 상태</TableCell>
//                                 <TableCell style={{border:'0px'}}>총계</TableCell>
//                             </Grid>
//                             <Grid item xs={6} sm={4} style={{minWidth:'280px'}}>                        
                            
//                             </Grid>
//                         </TableRow>
//                         <hr style={{height:'1px', backgroundColor:'lightgray', border:'0px', opacity:'70%', margin:'0px', paddingBottom:'0px', paddingTop:'0px'}}/>



//                         <TableRow style={{display:'flex', justifyContent:'space-between', padding:'10px'}}>
//                             <Grid item xs={6} sm={8} style={{minWidth:'560px'}}>                        
//                                 <TableCell style={{border:'0px'}}>#111111</TableCell>
//                                 <TableCell style={{border:'0px'}}>2021-06-11</TableCell>
//                                 <TableCell style={{border:'0px'}}>배송준비중</TableCell>
//                                 <TableCell style={{border:'0px'}}>총 금액 : 95000원, 6개 상품</TableCell>
//                             </Grid>
//                             <Grid item xs={6} sm={4} style={{minWidth:'280px'}}>                        
//                                 <TableCell style={{border:'0px'}}><Button style={button}>배송조회</Button><Button style={button}>배송조회</Button></TableCell>
//                             </Grid>
//                         </TableRow>
//                     </TableBody>
//                 </Table>
//             </div>
//         </Grid>
//     )
// }


// export default DeliveryInfoComponent
