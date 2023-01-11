import { useContext, useState } from "react";
import { Button, IconButton } from "@mui/material"
import NightsStayIcon from '@mui/icons-material/NightsStay';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { ThemeContext } from "../App";
import { useNavigate } from "react-router-dom";


export default function Header({getTheme}){

    const navigate = useNavigate()

    const theme = useContext(ThemeContext)

    
    const [CurrentTheme , setCurrentTheme] = useState(true) 


    const handleClick = () => {
        setCurrentTheme(!CurrentTheme)
        getTheme(CurrentTheme)
    }

    const handleLogin = () =>{
        navigate("/login")
    }

    const handleRegister = () =>{
        navigate("/register")
    }

    return( 
    <nav className="flex items-center justify-between p-2 border-b-2 text-center">

        <div>
            <h3 className="text-2xl">Hello World</h3>
        </div>
        
        <div>
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 group group-hover:from-blue-500 group-hover:to-purple-600 hover:text-white"
        
        onClick={handleLogin}
        >
            <span className="px-5 py-2 bg-white rounded-md group group-hover:bg-opacity-0">
                Sign in
            </span>
        </button>

        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-gray-900 rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 group group-hover:from-blue-500 group-hover:to-purple-600 hover:text-white"
        onClick={handleRegister}
        >
            <span className="px-5 py-2 bg-white rounded-md group group-hover:bg-opacity-0">
                Sign up
            </span>
        </button>


        <IconButton onClick={handleClick}>
            {
                CurrentTheme ?  <NightsStayIcon sx={theme}/> : <WbSunnyIcon sx={theme}/>
            }
        </IconButton>

        </div>

    </nav>
    )
}