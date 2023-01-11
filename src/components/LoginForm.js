import { Button, Card, CardContent, Grid, IconButton, TextField } from '@mui/material';
import { useFormik, Form, FormikProvider } from 'formik';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom';




export const LoginForm = (props) => {

    let navigate = useNavigate();

    const handleBack = () =>{
        navigate('/')
    }

    const formik = useFormik({
      initialValues: {
        name: '',
        email : '',
        phone : '',
        college : ''
      },
      validationSchema : Yup.object({
        name: Yup.string().required("Name is require"),
        email: Yup.string().required("Email is require"),
        phone: Yup.string().required("Phone is require"),
        college: Yup.string().required("College is require"),
    
      }),

      onSubmit: values => {
        props.getItem(values)
        // console.log(values)
        },
    });
    const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

    return (
        <Card>
            
            <CardContent>
                <IconButton onClick={handleBack}>
                    <ArrowBackIosIcon/> 
                </IconButton>
                <h3 className='text-3xl text-purple mb-5 text-center' >Login 😇</h3>                
                <form onSubmit={formik.handleSubmit}>

                    <Grid container direction={"column"} spacing={0} alignItems={"center"} gap={3} width={400} >  
                    <TextField fullWidth
                    id="outlined-password-input"
                    label="Name"
                    type="text"
                    autoComplete="current-password"
                    {...formik.getFieldProps('name')}
                    error={Boolean(touched.name && errors.name)}
                    helperText={touched.name && errors.name}

                    />
                    <TextField fullWidth
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    autoComplete="current-password"
                    {...formik.getFieldProps('email')}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}


                    />
                    <TextField fullWidth
                    id="outlined-password-input"
                    label="Phone"
                    type="text"
                    autoComplete="current-password"
                    {...formik.getFieldProps('phone')}

                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}

                    />
                    <TextField fullWidth
                    id="outlined-password-input"
                    label="College"
                    type="text" 
                    autoComplete="current-password"
                    {...formik.getFieldProps('college')}
                    error={Boolean(touched.college && errors.college)}
                    helperText={touched.college && errors.college}
                    />
                    </Grid>

                    <Button type='submit' variant='outlined' sx={{marginTop:"20px",textAlign:"center"}}>
                        Submit
                    </Button>
                    
            </form>
            </CardContent>
       </Card>
    );
  };