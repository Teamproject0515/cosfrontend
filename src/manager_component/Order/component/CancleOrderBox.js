import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

function CancleOrderBox({orders,deliveryStatus}) {
    return (
        <>
            <Table style={{width:'100%',marginTop:'30px'}}>
                    <TableHead>
                        <TableRow>
                            <TableCell alingn="right">고객이메일</TableCell>
                            <TableCell alingn="right">상품번호</TableCell>
                            <TableCell alingn="right">상품제목</TableCell>
                            <TableCell alingn="right">상품사이즈</TableCell>
                            <TableCell alingn="right">상품컬러</TableCell>
                            <TableCell alingn="right">주문개수</TableCell>
                            <TableCell alingn="right">주문일</TableCell>
                            <TableCell alingn="right">취소버튼</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.order.map((order,index) =>
                            <TableRow style={{height:'20%'}}>
                                <TableCell component="th">{order.user_email}</TableCell>
                                <TableCell alingn="right">{order.product_id}</TableCell>
                                <TableCell alingn="right">{order.product_title}</TableCell>
                                <TableCell alingn="right"> {order.product_size}</TableCell>
                                <TableCell alingn="right">{order.product_color}</TableCell>
                                <TableCell alingn="right">{order.amount}</TableCell>
                                <TableCell alingn="right">{order.order_date}</TableCell>
                                <TableCell><button className='optionPage' onClick={()=>deliveryStatus('취소완료',orders.order[index].order_id)} style={{border:'1px solid lightgray',width:'100%',textAlign:'left',marginTop:'0px'}}>
                                   취소완료</button></TableCell>
                            </TableRow>
                            )}
                    </TableBody>
                </Table>
        </>
    )
}

export default CancleOrderBox
