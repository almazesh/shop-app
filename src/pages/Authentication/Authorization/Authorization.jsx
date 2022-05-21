import { Card, Grid, Typography } from '@mui/material'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Form } from '../../../components/Forms'
import { useAuthorization } from '../../../apps/Auth/Hooks/useAuthorization';

const Authorization = () => {

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

  const { actions } = useAuthorization()

  const onSubmit = React.useCallback(data => {
    actions.post(data).then(res => {
      if(res.status === 200){
        localStorage.setItem('token' , JSON.stringify(res.data.auth_token))
        window.location.reload()
      }
    })
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
            Authorization
          </Typography>
          
          <form onSubmit={handleSubmit(onSubmit)}>

            <Form.TextInput
              type="text"
              label="Username"
              {...register('username')}
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

export default Authorization