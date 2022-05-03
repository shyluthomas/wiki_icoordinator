import React from 'react'
import { useFormik } from 'formik'
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
} from 'reactstrap'
import { add_data } from '../../../Store/slice'
import { useDispatch, useSelector } from 'react-redux';

const validate = (values) => {
    const errors = {}
    if (!values.name) {
        errors.name = 'Required'
    }
    if (!values.portal_permission) {
        errors.portal_permission = 'Add Portal Permissions'
    }
    if (!values.allowed_clients) {
        errors.allowed_clients = 'Clients to be added'
    }
    if (!values.name && !values.portal_permission && !values.allowed_clients) {
        errors.full = true
    }
    return errors
}
const InviteModal = ({ closeFx }) => {
    const { data } = useSelector((state) => state.data)
    // console.log(data,'this is selected data')
    const formik = useFormik(
        {
            initialValues: {
                name: '',
                portal_permission: '',
                allowed_clients: ''
            },
            validate,
            onSubmit: (values) => {
                console.log('this is the values', values)
                closeFx();
                dispatch(add_data(values))
                // const { name, portal_permission, allowed_clients } = values
                console.log("the data before adding", { data })
                //    localStorage.setItem('name',name)
                //    localStorage.setItem('portal_permission',portal_permission)
                //    localStorage.setItem('allowed_clients',allowed_clients)
                localStorage.setItem('data', values)

            }
        }
    )

    const dispatch = useDispatch()
    return (
        <div className='modal-body'>
            <div className='modal-top'>
                <span className='main-font'>Invite Members</span>
                <Button close onClick={() => closeFx()} />
            </div>
            <Form className='form-main' onSubmit={formik.handleSubmit} >
                <FormGroup >
                    <Label for='name'>
                        Name
                    </Label>
                    <Input
                        id='name'
                        onChange={formik.handleChange}
                        value={formik.values.name} />

                    {formik.errors.name ? <span>{formik.errors.name}</span> : null}
                </FormGroup>
                <FormGroup >
                    <Label for='portal-permission' >
                        Portal Permission
                    </Label>
                    <Input
                        id='portal_permission'
                        onChange={formik.handleChange}
                        value={formik.values.portal_permission} />
                    {formik.errors.portal_permission ? <span>{formik.errors.portal_permission}</span> : null}

                </FormGroup>
                <FormGroup >
                    <Label for='allowed-clients' >
                        Allowed Client
                    </Label>
                    <Input
                        id='allowed_clients'
                        onChange={formik.handleChange}
                        value={formik.values.allowed_clients} />
                    {formik.errors.allowed_clients ? <span>{formik.errors.allowed_clients}</span> : null}

                </FormGroup>

                <Button disabled={formik.errors.full ? true : false} type='submit' color='primary'>Submit</Button>
            </Form>
        </div>
    )
}

export default InviteModal
