import { 	
	Box, 
	Typography,
	Link,
	AppBar,
	IconButton,
	MenuItem,
	Menu,
	Divider
} from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import {
  useLocation
} from "react-router-dom"
import React, { useEffect, useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery'
export default function NavigationBar(){

	const largeScreenWidth = useMediaQuery('(min-width:1024px)');
	const smallScreenWidth = useMediaQuery('(max-width:480px)')
  const { pathname } = useLocation()

	const menu = [
		{name:"Our Service",link:"/#/service"}, 
		{name:"Why Choose Us",link:"/#/why-us"}, 
		{name:"Our Team",link:"/#/our-team"}
	]

	const fullMenu = [
		{name:"Our Service",link:"/#/service"}, 
		{name:"Why Choose Us",link:"/#/why-us"}, 
		{name:"Our Team",link:"/#/our-team"},
		{name:"Contact Us",link:"/#/contact-us"}
	]
	const textStyle = {
		fontFamily: "Nunito-ExtraBold",
		fontSize: "1.8rem",
		color: "#128967",
	}
	const underlineStyle = {
		textDecoration: "underline",
		textUnderlineOffset: "1rem"
	}

	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

	return (
		<>
			{largeScreenWidth && 
			<Box sx={{display:"flex",alignItems:"center",width:"561px",justifyContent:"space-between"}}>
				{menu.map((item,index)=>{
					return (
						<Box key={index}>
							<Link underline="none" href={item.link}>
								<Typography sx={item.link===pathname?[textStyle, underlineStyle]:[textStyle]}>{item.name}</Typography>
							</Link>
						</Box>
					)
				})}
					<Box sx={{
						background: "#138060",
						borderRadius: "25px",
						width:"165px",
						height:"50px",
						}}>
						<Link underline="none" href={`/#/contact-us`}>
							<Typography 
								sx={{
									lineHeight:"50px",
									fontFamily: "Nunito-ExtraBold",
									fontSize: "1.8rem",
									color: "#FFFAF0",
									}}>
										Contact Us
							</Typography>
						</Link>
					</Box>
			</Box>}
			{!largeScreenWidth && 
					<Box sx={{ flexGrow: 1, display:"flex" }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{width:"50px",height:"50px",color:"#123433"}}/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display:"flex",
              }}
            >
              {fullMenu.map((item,index) => (
								<Link underline="none" href={item.link} key={index}>
                <MenuItem key={index} onClick={handleCloseNavMenu} sx={{width:"200px",height:"100px",background:(index===1 || index=== 3) ?"#FFFAF0": "#FFFFFF"}}>
                  <Typography sx={[textStyle,{textAlign:"center",fontSize:"2rem"}]}>{item.name}</Typography>
                </MenuItem>
								</Link>
              ))}
            </Menu>
          </Box>
			}
		</>
	)
}
