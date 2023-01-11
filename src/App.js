import { Container } from "@mui/material";
import { createContext, useContext, useState } from "react";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";



const themes = {
  dark : {  
    color: "white",
    background : "#004C99"
  },
  lite : {
    color : "black",
    background: "white"
  }
}


export const ThemeContext = createContext(themes.dark);

export default function App() {
  
  const [theme,setTheme] = useState(themes.lite)

  const getTheme = (value) =>{
    if(value){
      setTheme(themes.dark)
    }else{
      setTheme(themes.lite)
    }
  }

  return (
    <Container maxWidth={false} sx={theme} style={{width:"100%",height:"100vh"}}> 
    <ThemeContext.Provider value={theme}>
      <div>
        <Header getTheme={getTheme}/>


          <h1 className="text-center p-5 text-6xl font-extrabold">KGX</h1>

        
        <Outlet/>

      </div>
    </ThemeContext.Provider>
    </Container>
  )
}