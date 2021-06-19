import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function UserStatusTableBody({users}) {
    return (
        <>
             <TableBody>
                    {users.user.map(user =>
                        <TableRow style={{ height: '20%' }}>
                            <TableCell component="th" >{user.user_crud}</TableCell>
                            <TableCell alingn="right"> {user.user_email} </TableCell>
                            <TableCell alingn="right">{user.user_name}</TableCell>
                            <TableCell alingn="right">{user.user_phone}</TableCell>
                            <TableCell alingn="right">{user.user_regdate}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
        </>
    )
}

export default UserStatusTableBody
