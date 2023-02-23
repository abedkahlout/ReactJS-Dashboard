import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Layout/Home";
import Login from "./Pages/Login";
import {createTheme,ThemeProvider} from '@mui/material'
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Product from "./Pages/product";
import Dashboard from "./Pages/Dashboard";



const theme = createTheme({
  direction:"rtl",
})



function App() {
  
  useEffect(()=>{
    const lang = Cookies.get("i18next") || "en";
    if(lang==="ar"){
      document.body.dir="rtl"
    }
    else{
      document.body.dir="ltr"
    }
  },[])

  const {t} = useTranslation()

	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="home" element={<Dashboard /> } />
					<Route path="product" element={<Product /> } />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
