import { Container, Grid } from "@mui/material"
import { LoginForm } from "../components/LoginForm"

export const Login = () =>{

    
    const getItem = (values) =>{
        console.log(values)
    }


    return (
        <Container maxWidth="lg">
            <Grid 
            container 
            spacing={3} 
            direction="column"
            alignItems="center"
            justifyContent="center"
            style={{minHeight : "100vh"}}
            >
                <Grid item xs={3}>
                    <LoginForm  getItem = {getItem} />
                </Grid>

            </Grid>
        </Container>
    )
}