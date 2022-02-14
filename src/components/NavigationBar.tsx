import { 	
	Box, 
	Typography,
	Link,
} from "@mui/material"
import {
  useLocation
} from "react-router-dom"
import React, { useEffect, useState } from "react"
import useMediaQuery from '@mui/material/useMediaQuery'
export default function NavigationBar(){

	const normalScreenWidth = useMediaQuery('(min-width:480px)');
  const { pathname } = useLocation()

	const menu = [
		{name:"Our Service",link:"/service"}, 
		{name:"Why Choose Us",link:"/why-us"}, 
		{name:"Our Team",link:"/our-team"}
	]

	const textStyle = {
		fontFamily: "Nunito-ExtraBold",
		fontSize: "18px",
		color: "#128967",
		letterSpacing: 0,
		textAlign: "justify",
		lineHeight: "110px",
	}
	const underlineStyle = {
		textDecoration: "underline",
		textUnderlineOffset: "10px"
	}
	return (
		<>
			{
			//normalScreenWidth && 
			<Box sx={{display:"flex",lineHeight: "110px",width:"561px",justifyContent:"space-between"}}>
				{menu.map((item,index)=>{
					return (
						<Box 
							sx={{}}
							key={index}
						>
							<Link underline="none" href={item.link}>
								<Typography sx={item.link===pathname?[textStyle, underlineStyle]:[textStyle]}>{item.name}</Typography>
							</Link>
						</Box>
					)
				})}
				<Box sx={{}}>
					<Box sx={{
						background: "#138060",
						borderRadius: "25px",
						width:"165px",
						height:"50px",
						textAlign:"center",
						marginTop:"30px"
						//lineHeight:"110px"
						}}>
						<Link underline="none" href={`contact-us`}>
							<Typography 
								sx={{
									lineHeight:"50px",
									fontFamily: "Nunito-ExtraBold",
									fontSize: "18px",
									color: "#FFFAF0",
									letterSpacing: 0,
									}}>
										Contact Us
							</Typography>
						</Link>
					</Box>
				</Box>
			</Box>}
		</>
	)
}
