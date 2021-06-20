import React,{useState} from 'react'
import Table from '@material-ui/core/Table';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from "@material-ui/core/IconButton";
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import Input from '@material-ui/core/Input';
import UserStatusTableBody from './UserStatusTableBody';
import UserListTableBody from './UserListTableBody';

function UserTableBox(
    {onSearchType,onChangeSearch,onKeyPress,search,users,title,name,email,phone,
        tableTitle1,tableTitle2,tableTitle3,tableTitle4,tableTitle5,keyword,statusOpen,listOpen,isOpen}
    ) {
      const [IsOpen,setIsOpen] = useState(isOpen);
    return (
        <>
          <div  className="pageTitle">
               <div></div>
                <h1>{title}</h1>
                <div style={{ height: '30px', width: '30%', display: 'flex', justifyContent: 'flex-end' }}>
                    <select style={{ border: '1px solid lightGray', marginRight: '10px', fontSize: '12px' }} name="searchType" onChange={onSearchType}>
                        <option name="user_name" value="user_name" >{name}</option >
                        <option name="user_email" value="user_email">{email}</option >
                        <option name="user_phone" value="user_phone">{phone}</option>
                    </select>
                    <Input style={{ fontSize: '12px' }} type="text" placeholder={keyword} onChange={onChangeSearch} onKeyPress={onKeyPress} />
                    <IconButton className="menuButton" onClick={search}>
                        <SearchOutlinedIcon />
                    </IconButton>
                </div>
            </div>
            <Table style={{ width: '100%', marginTop: '30px' }}>
                <TableHead>
                    <TableRow>
                        <TableCell alingn="right">{tableTitle1}</TableCell>
                        <TableCell alingn="right">{tableTitle2}</TableCell>
                        <TableCell alingn="right">{tableTitle3}</TableCell>
                        <TableCell alingn="right">{tableTitle4}</TableCell>
                        <TableCell alingn="right">{tableTitle5}</TableCell>
                    </TableRow>
                </TableHead>
               {IsOpen?<UserStatusTableBody users={users}/>:<UserListTableBody users={users}/>}
            </Table>  
        </>
    )
}

export default UserTableBox
