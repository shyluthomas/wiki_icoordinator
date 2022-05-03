import React from 'react'
import { Input, Button } from 'reactstrap'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import { createStyles, makeStyles } from '@mui/styles';
import Avatar from '@mui/material/Avatar';
const Topbar = () => {
    // const useSt
    return (
        <div className='top-bar-main'>
            <React.Fragment>
                <span className='header-font-size-main'>iCoordinator</span>
            </React.Fragment>
            <div className='top-bar-elmnt-right'>
                <Input placeHolder='Search' style={{ borderRadius: '40px' }} size='sm' type="text" />
                <Button color='light' size='sm' style={{ width: '120px', borderRadius: '40px', height: '30px' }}>Search
                </Button>
                <NotificationsNoneIcon color="white" />
                <Avatar alt='' src='https://www.w3schools.com/howto/img_avatar.png' />
            </div>
        </div>
    )
}

export default Topbar