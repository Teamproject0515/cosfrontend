import React from 'react'
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function UserListTableBody({users}) {
    return (
        <>
             <TableBody>
                    {users.user.map(user =>
                        <TableRow style={{ height: '20%' }}>
                            <TableCell alingn="right"> {user.user_email} </TableCell>
                            <TableCell alingn="right">{user.user_name}</TableCell>
                            <TableCell alingn="right">{user.user_phone}</TableCell>
                            <TableCell alingn="right">{user.address}</TableCell>
                            <TableCell alingn="right">{user.user_regdate}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
        </>
    )
}

export default UserListTableBody
