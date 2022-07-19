import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Store from "./pages/Store";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./styles/style.css";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const RouteSwitch = () => {
    return (
        <ThemeProvider theme={darkTheme}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage/>}/>
                    <Route path="/store" element={<Store/>}/>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    )
}

export default RouteSwitch;