import React from 'react'
import Avatar from '@mui/material/Avatar';

const Sidebar = () => {
    return (
        <div className='sidebar-main'>
            <div className='sidebar-profile' >
                <Avatar alt='' src='https://www.w3schools.com/howto/img_avatar.png' />
                <span> Full Name</span>   
                <span>Proffessional Title</span>
            </div>
             
                <div className="sidebar-navs">
                    <span>PORTAL</span>
                    <span>Work Spaces</span>
                    <span>Portal Members</span>
                    <span>Invitations</span>
                </div>
        </div>
    )
}

export default Sidebar