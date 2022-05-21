import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '../../../components/Forms'
import { useRegistration } from '../../../apps/Auth/Hooks/useRegistration';
import { useNavigate } from 'react-router-dom';

const Registration = () => {

  const resetFields = () => {
    reset({
      username: '',
      email:'',
      bio:'',
      password:''
    })
  }

  const { 
    handleSubmit, 
    register , 
    reset 
  } = useForm()

  const { actions } = useRegistration()

  const navigate = useNavigate()

  const onSubmit = React.useCallback(data => {
    actions.post(data)
    .then(res => (res.status >= 200 && res.status < 300) && navigate('/authorization'))
    resetFields()
  }, [actions])



  return (
    <Grid 
      container 
      justifyContent='center'
      alignItems='center'
      height='80vh'
    >
      <Grid 
        xs={12} 
        md={6} 
        xl={3}
        item
      >
        <Card style={{padding:'2rem'}}>
          <Typography 
            typography='h6' 
            textAlign='center' 
            style={{marginBottom:'1.5rem'}}
          >
            Registration
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}>

            <Form.TextInput
              type="text"
              label="Username"
              {...register('username')}
            />

            <Form.TextInput
              type="email"
              label="Email"
              {...register('email')}
            />

            <Form.TextInput
              type='text'
              label="Bio"
              {...register('bio')}
            />

            <Form.TextInput
              type='password'
              label="Password"
              {...register('password')}
            />

            <Form.SubmitBtn />
          </form>
          
        </Card>
      </Grid>
    </Grid>
  )
}

export default Registration