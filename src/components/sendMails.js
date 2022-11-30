import { Button, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import axios from 'axios'

const SendMails = () => {


    const [data, setData] = useState({
        email: "",
        message: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(data);
        axios.post('http://localhost:8080/send-mails', data).then((response) => {
            console.log("successfully sent", response);
        }).catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <>
            <section className='col-lg-8 col-md-10 col-11 mx-auto'>
                <h4 className='text-center'>Feedback Form</h4>
                <form onSubmit={handleSubmit} method={'POST'} className="col-12 text-center">
                    <TextField variant='outlined' className='col-10 my-3' placeholder='Enter the email..' label="Enter mail" type={'email'} value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} />
                    <TextField variant='outlined' className='col-10 my-3' placeholder='Enter the message..' label="Enter message" value={data.message} multiline minRows={4} onChange={(e) => setData({ ...data, message: e.target.value })} />
                    <Button type='submit' className='col-6 mx-auto my-3' variant='contained' color="primary">Send Mail</Button>
                </form>
            </section>
        </>
    )
}

export default SendMails