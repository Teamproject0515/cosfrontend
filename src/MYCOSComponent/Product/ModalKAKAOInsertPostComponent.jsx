import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';
import {makeStyles} from '@material-ui/core';

function ModalKAKAOPostComponent(props) {



    // 모달
    const useStyles = makeStyles((theme) => ({
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: theme.palette.background.paper,
          boxShadow: theme.shadows[5],
          padding: theme.spacing(5, 5, 5),
          borderRadius:'10px'
        },
      }));

    const classes = useStyles();


    return (
        <Modal  
        className={classes.modal}
        open={props.isOpenInsertPost}
        onClose={props.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        >
            <Fade in={props.isOpenInsertPost}>
                <div className={classes.paper} style={{width:'640px'}}>
                    {props.isOpenInsertPost && props.searchAddress()}
                </div>
            </Fade>
        </Modal>
    )
}

export default ModalKAKAOPostComponent
