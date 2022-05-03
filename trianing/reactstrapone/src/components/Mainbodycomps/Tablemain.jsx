import React from 'react'
import { Table } from 'reactstrap'
// import data from './data.json'
import { useDispatch, useSelector } from 'react-redux'
import { delete_data } from '../../Store/slice'
const Tablemain = () => {
  const data = useSelector((state)=>state.data.data)
  const dispatch =useDispatch()
    console.log("The data from app selector",data)
    return (
        <div className='table-container'>
            <Table>
                <tbody>
                    <tr>
                        <th>
                            NAME
                        </th>
                        <th>
                            PORTAL PERMISSION
                        </th>
                        <th>
                            ALLOWED CLIENT
                        </th>
                        <th>
                            ACTIONS
                        </th>
                    </tr>
                    {
                        data.map((item, key) => {
                            return (
                                <tr key={key}>
                                    <td>
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.portal_permission}
                                    </td>
                                    <td>
                                        {item.allowed_clients}
                                    </td>
                                    <td>
                                        <span>
                                            <a href="#resend">Resend</a>|
                                            <span onClick={()=>dispatch(delete_data({ key : key}))} >Delete</span>
                                        </span>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    

                </tbody>
            </Table>
        </div>
    )
}

export default Tablemain



