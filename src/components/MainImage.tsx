import { 	
	Box, 
	Typography,
	Link,
} from "@mui/material"
import { useEffect,useState } from "react"
import img_home from "../assets/images/home.jpg"
import img_team from "../assets/images/team.jpg"
import img_service from "../assets/images/service.jpg"
import img_why_us from "../assets/images/why_us.jpg"
import img_contact from "../assets/images/contact.jpg"
import useMediaQuery from '@mui/material/useMediaQuery'

export default function MainImage({
	currentImage
}:{
	currentImage:string
}){
	const normalScreenWidth = useMediaQuery('(min-width:480px)');
	const largeScreenWidth = useMediaQuery('(min-width:960px)');
	const exLargeScreenWidth = useMediaQuery('(min-width:1200px)');
	const mainImageConfig:{[name:string]:{name:string,showTag:boolean,url:string}} = {
		"home":{name:"Home",showTag:false,url:img_home},
		"contact":{name:"Contact Us",showTag:true,url:img_contact},
		"team":{name:"Our Team",showTag:true,url:img_team},
		"introduction":{name:"Why Choose Us",showTag:true,url:img_why_us},
		"service":{name:"Our Service",showTag:true,url:img_service},
	}
	
	useEffect(()=>{
		// mainImageConfig.map((item)=>{
		// 	item.name===currentImage
		// })
	},[currentImage])

	useEffect(()=>{

	},[])
	return (
		<Box sx={{position:"relative"}}>
			<img src={mainImageConfig[currentImage].url} width={"100%"}/>
			{
			largeScreenWidth && 
			mainImageConfig[currentImage].showTag &&
			<Box sx={{
				width:"31%",
				height:"20%",
				position:"absolute",
				bottom:"20%",
				background:"#FFFAF0",
				}}>
				<Box sx={{width:"100%",display:"flex",alignItems:"center",height:"100%"}}>
				<Typography sx={{
					width:"100%",
					fontFamily:"Nunito-ExtraBold",
					fontSize: exLargeScreenWidth?"50px":"30px",
					color: "#128967",
					letterSpacing: 0,
					textAlign: "center",
					//lineHeight:"124px"
				}}>{mainImageConfig[currentImage].name}</Typography>
				</Box>
			</Box>}
		</Box>
	)
}