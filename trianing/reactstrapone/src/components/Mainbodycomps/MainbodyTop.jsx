import React,{useState} from 'react'
import { Breadcrumb, BreadcrumbItem,Button } from 'reactstrap'
import InviteModal from './Modalmainbody/InviteModal'
import { useSelector } from 'react-redux'
const MainbodyTop = () => {
  const [modalfx,setModalfx] = useState(false)
  const openFx = () =>{
    setModalfx(true)
  }
  const closeFx = ()=>{
    setModalfx(false)
  }
  const data = useSelector((state)=>state.data)
  console.log('Here is the data from store',data)
 console.log(data)
  return (
    <div className='main-body-container'>
        <span className='main-font'>Admin</span>
        <div className='breadcrumb-container'>
            <Breadcrumb className='breadcrumbs'>
            <BreadcrumbItem className='breadcrumbs-child'>Home</BreadcrumbItem>
            <BreadcrumbItem className='breadcrumbs-child'>Admin</BreadcrumbItem>
            <BreadcrumbItem className='breadcrumbs-child'>Invitatons</BreadcrumbItem>
            </Breadcrumb>
        </div>
        <div className='current-nav'>
           <span className='font-navigation'>Invitations</span> 
        </div>
        <div className="Invitebtn-container">
            <Button onClick={()=>openFx()}className='InviteBtn'>+Invite</Button>
        </div>
        {
          modalfx && 
          <div className='modal-container'>
            <InviteModal closeFx={closeFx}/>
          </div>
        }
    </div>
  )
}

export default MainbodyTop