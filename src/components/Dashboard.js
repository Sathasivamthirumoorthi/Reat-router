import { Button, Container, Grid } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { useNavigate } from "react-router-dom";


export default function DashBoard(){
    
    const navigate = useNavigate() 

    const handleRegister = () => {
        navigate("/register")
    }


    const handleLogin = () => {
        navigate("/login")
    }

    
    return (
        <Container maxWidth="lg">
            <div className="pt-20 sm:pt-24 lg:pt-34 mb-20 max-w-30 mx-auto">
                <h1 class="font-sans md:font-serif text-center text-6xl font-extrabold tracking-tigh">
                Rapidly build modern websites without ever leaving your HTML.
                </h1>
            </div>  

            <Grid container spacing={3} className="text-center sm:pt-24 lg:pt-34"  >
                <Grid xs={12} lg={6} md={6} className="mt-4">
                    <Button variant="contained" startIcon={<GroupAddIcon/>} onClick={handleRegister}>
                        Register
                    </Button>
                </Grid>         
                <Grid xs={12} lg={6} md={6} className="mt-4">
                    <Button variant="contained" endIcon={<LoginIcon/>} onClick={handleLogin}>
                        Login    
                    </Button>                    
                </Grid>
            </Grid>



        </Container>
    )
}   