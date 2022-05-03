import React from 'react'
import MainbodyTop from './Mainbodycomps/MainbodyTop'
import Tablemain from './Mainbodycomps/Tablemain'
import Toolbar from './Mainbodycomps/Toolbar'
const Mainbody = () => {
  return (
    <div className='main-body'>
      <MainbodyTop/>
      <Tablemain/>
      <Toolbar/>
    </div>
  )
}

export default Mainbody
