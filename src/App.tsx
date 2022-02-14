import React, { useEffect }  from 'react';
import {
  BrowserRouter as Router,
  Route,
	Routes,
  useLocation
} from "react-router-dom"
import useMediaQuery from '@mui/material/useMediaQuery'
import { Box, Typography } from "@mui/material"
import Service from "./pages/Service/index"
import Contact from "./pages/Contact/index"
import Home from "./pages/Home/index"
import Introduction from "./pages/Introduction/index"
import Team from "./pages/Team/index"
import NavigationBar from './components/NavigationBar'
import TopBar from './components/TopBar'
import BottomBar from './components/BottomBar'

const ScrollToTop = (props:any) => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return props.children
}

function App() {
	const normalScreenWidth = useMediaQuery('(min-width:480px)');
  return (
		<Box sx={{
			//width:normalScreenWidth?"1440px":"100%",
			//minWidth:"1440px",
			width:"100%",
			margin:"auto",
			overflow:"hidden",
			textAlign: "center",
			letterSpacing:0
			}}>
			<Router>
				<ScrollToTop>
					<TopBar />
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/service" element={<Service/>}/>
						<Route path="/contact-us" element={<Contact/>}/>
						<Route path="/why-us" element={<Introduction/>}/>
						<Route path="/our-team" element={<Team/>}/>
					</Routes>
					<BottomBar />
				</ScrollToTop>
			</Router>
		</Box>
  )
}

export default App;
