import React from 'react';

import {Grid, Table, TableRow, TableCell} from '@material-ui/core';


function NewArrivalsComponent(props){

    return (
            <Grid item xs={6} sm={3}>
                <Table style={style_table}>     
                    <div align="right" onClick = {() => {props.function()}}>
                        <TableRow>
                            <TableCell style={style_tablecell_img}> <img src={props.img} style={{width:'100%'}}/></TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style_tablecell}>{props.title}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell style={style_tablecell}>{props.link}</TableCell>
                        </TableRow>
                    </div>
                </Table>
            </Grid>
    )       
}

const style_tablecell_img = {
    border : '0px',
    padding : '0px',
}

const style_tablecell = {
    border : '0px',
    fontSize : '12px',
    padding : '10px 0px 10px 0px',
}

const style_table = {
    marginBottom:'30px'
}


export default NewArrivalsComponent;