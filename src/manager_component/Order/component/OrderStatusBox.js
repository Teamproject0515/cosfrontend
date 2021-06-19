import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import IconButton from "@material-ui/core/IconButton";
import Input from '@material-ui/core/Input';

function OrderStatusBox({onSearchType,onChangeSearch,onKeyPress,search,orders,returnOrderDetail}) {
    return (
        <>
            <div className="pageTitle">
                <div></div>
                <h1>주문 현황</h1>
                <div style={{ height: '30px', width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                    <select style={{ border: '1px solid lightGray', marginRight: '10px', fontSize: '12px' }} name="searchType" onChange={onSearchType}>
                        <option name="product_title" value="product_title" >상품 이름</option >
                        <option name="user_email" value="user_email">고객 이메일</option >
                    </select>
                    <Input style={{ fontSize: '12px' }} type="text" placeholder="상품 이름 검색" onChange={onChangeSearch} onKeyPress={onKeyPress} />
                    <IconButton className="menuButton" onClick={search}>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <Table style={{ width: '100%', marginTop: '30px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell alingn="right">고객이메일</TableCell>
                        <TableCell alingn="right">상품 번호</TableCell>
                        <TableCell alingn="right">상품제목</TableCell>
                        <TableCell alingn="right">상품사이즈</TableCell>
                        <TableCell alingn="right">상품컬러</TableCell>
                        <TableCell alingn="right">주문개수</TableCell>
                        <TableCell alingn="right">주문일</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.order.map((order, index) =>
                        <TableRow style={{ height: '20%' }}>
                            <TableCell component="th">{order.user_email}</TableCell>
                            <TableCell alingn="right"> {order.product_id}</TableCell>
                            <TableCell alingn="right">
                                <button style={{ border: 'none', backgroundColor: '#FFFFFF' }} onClick={() => returnOrderDetail(orders.order[index].order_detail_num, orders.order[index].user_email)}>{order.product_title}</button>
                            </TableCell>
                            <TableCell alingn="right"> {order.product_size}</TableCell>
                            <TableCell alingn="right">{order.product_color}</TableCell>
                            <TableCell alingn="right">{order.amount}</TableCell>
                            <TableCell alingn="right">{order.order_date}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </>
    )
}

export default OrderStatusBox
