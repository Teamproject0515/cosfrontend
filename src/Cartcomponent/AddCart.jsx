import { Table, TableBody, TableCell, TableHead, TableRow, Button, Typography } from '@material-ui/core';
import React from "react";
import ApiService from "../ApiServiceChu";
import {withRouter} from "react-router-dom";


const addCart = ({history})=>{

    const saveCart = ()=>{
        let cart={
            userId:"licsh12@gmail.com",
            productId:1,
            amount:1
        }

        ApiService.addCart(cart)
        .then(()=>{
            history.push("/cart/list")
        })
        .catch(err=>{
            console.log("savecart 에러",err);
        });


    }
    return(
        <div>
            <h2>물품정보가 들어 있습니다. 장바구니에 담아보세요</h2>
            <Button variant="contained" color="primary" onClick={saveCart}>장바구니</Button>
        </div>
    );
}
export default withRouter(addCart);