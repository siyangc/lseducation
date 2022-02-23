import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import MainImage from "../../components/MainImage"
import { subTitleStyle,textStyle,nameStyle } from "../../css/text"
import img_intro_bg from "../../assets/images/intro_bg.jpg"
import img_intro_kid1 from "../../assets/images/intro_kid1.jpg"
import img_intro_kid2 from "../../assets/images/intro_kid2.jpg"
import img_intro_kid3 from "../../assets/images/intro_kid3.jpg"
import img_intro_kid4 from "../../assets/images/intro_kid4.jpg"
import img_intro_kid5 from "../../assets/images/intro_kid5.jpg"
import icon_yellow_flower from "../../assets/icons/yellow_flower.png"
import icon_white_flower from "../../assets/icons/white_flower.png"
import icon_red_flower from "../../assets/icons/red_flower.png"
import icon_blue_arch from "../../assets/icons/blue_arch.png"
import icon_rose from "../../assets/icons/rose.png"
import icon_yellow_arrow from "../../assets/icons/yellow_arrow.png"
import ScrollAnimation from "react-animate-on-scroll"
import useMediaQuery from '@mui/material/useMediaQuery'
export default function Introduction() {

	const normalScreenWidth = useMediaQuery('(min-width:480px)');
	const largeScreenWidth = useMediaQuery('(min-width:960px)');
	const coreValueTitleStyle = {
		fontFamily: "Nunito-SemiBold",
		fontSize: "36px",
		color: "#FFFFFF",
		letterSpacing: "0.72px",
		textAlign: "center",
		lineHeight: "30px"
	}

	const coreValueTextStyle = {
		fontFamily: "Nunito-SemiBold",
		fontSize: "20px",
		color: "#FFFFFF",
		letterSpacing: "0.4px",
		textAlign: "center",
		lineHeight: "30px"
	}

	const IntroText = [
		{title:"Education",titleColor:"#EA938C",backgroundColor:"#F8F8F8",text:"To offer education to children, families and educators from our local and wider community. We promote learning to foster health and wellbeing and support people in making the best choices for themselves and those they support. Our children's programs are based on their interests, through a variety of open ended experiences, designed to support individual developmental needs, whilst encouraging exploration, investigation and inquiry. We balance intentional teaching with child directed learning opportunities whilst we encourage children to seek new challenges and take considered risks in a play based learning environment. ",imgUrl:img_intro_kid1,direction:1},
		{title:"Belonging",titleColor:"#128967",backgroundColor:"#FFFFFF",text:"To ensure we are meeting everyone's individual needs, children, families and our stakeholders are involved in decision making about the centre. We value the relationships we build and strive for thorough, open lines of communication. We want families and children to feel welcome and during a time of need we want to wrap our services around them to ensure they are supported through hardship. We honour culture, religion, traditions and families individual choices. We encourage children in developing their sense of agency and we invite extended family to participate in our programs. We work closely with inclusion support services to ensure everyone can access the services they require. ",imgUrl:img_intro_kid2,direction:2},
		{title:"Wellbeing",titleColor:"#A4ACFD",backgroundColor:"#FFFAF0",text:"Children's individual needs are at the forefront of every decision we make. We work together to ensure smooth transitions from home to care, between the various services within the centre and when moving on to school. We focus on developing respectful relationships with children, families and between each of the services offered. We model behaviour management and support children in developing self-regulation. Wellbeing is a state of physical, mental and social wellbeing and our varied services together, support families and children in all these areas. We have a zero tolerance towards child abuse and neglect. We aim to accept and include everyone through positive interactions. All services and staff agree to adhere to the Child Safe Standards. ",imgUrl:img_intro_kid3,direction:1},
		{title:"Respect",titleColor:"#FFFAF0",backgroundColor:"#128967",text:"We work together as a team, treating each other with respect to ensure we are creating the best possible outcomes for families. We listen to one another and are generous, empathic, respectful and honest in our interactions with people. We uphold the rights of each child and encourage and respect people's personal space and belongings. We provide each other with feedback and we deliver this in a way that supports personal and professional growth. We respect each child, parent and educator as valued and unique. ",imgUrl:img_intro_kid4,direction:2},
		{title:"Integrity",titleColor:"#EA938C",backgroundColor:"#FFFFFF",text:"We provide quality education, health and care services to all children and families. We maintain our morals, principles and values in our interactions with others. We care for the environment, we are honest, we trust one another and we value open lines of communication. We ensure that all decisions made about children, families and the centre are made in consultation with those involved. ",imgUrl:img_intro_kid5,direction:1}
	]
	const IntroSection = (intro:{
		title:string,
		titleColor:string,
		backgroundColor:string,
		text:string,
		imgUrl:string,
		direction:number
	}) => {
		return (
			<Box sx={{display:"flex",background:intro.backgroundColor,justifyContent:"space-between",flexDirection:intro.direction===1?"row":"row-reverse",flexWrap:"wrap",paddingTop:"75px"}}>
				<Box sx={{margin:"auto",width:"80%",marginBottom:"50px",maxWidth:"500px",marginTop:"10px"}}>
					<Box sx={{marginTop:"102px",width:"210px",height:"50px",background:intro.titleColor,borderRadius:"24px"}}>
						<Typography sx={{
							fontFamily: "Nunito-Bold",
							fontSize: "30px",
							color: intro.title==="Respect"?"#128967":"#FFFFFF",
							letterSpacing: "1px",
							lineHeight: "50px",
							textAlign:"center"
						}}>{intro.title}</Typography>
					</Box>
					<ScrollAnimation animateIn={intro.direction===1?"slideInLeft":"slideInRight"} offset={0}>
					<Typography sx={{
						maxWidth:"497px",
						fontFamily: "Nunito-SemiBold",
						fontSize: "16px",
						color: "#171717",
						letterSpacing: 0,
						lineHeight: "24px",
						marginTop:"34px"
					}}>{intro.text}</Typography>
					</ScrollAnimation>
				</Box>
				<img src={intro.imgUrl} style={{marginTop:"75px",borderRadius:"30px",margin:"auto",maxWidth:"650px",width:"80%",marginBottom:"50px"}}/>
			</Box>
		)
	}
  return (
    <Box>
      <MainImage currentImage="introduction"/>
			<Box sx={{background:`url(${img_intro_bg})`,position:"relative"}}>
				{/* <img src={icon_blue_arch} style={{position:"absolute",left:"-10px",top:"55px"}} width={"180px"} height={"180px"}/>
				<img src={icon_rose} style={{position:"absolute",left:"682px",bottom:"75px"}} width={"75px"} height={"75px"}/>
				<img src={icon_yellow_arrow} style={{position:"absolute",bottom:"180px",right:"0px"}} width={"100px"} height={"204px"}/> */}
				<Typography sx={[subTitleStyle,{paddingTop:"141px"}]}>
					Rich Expirence
				</Typography>
				<Typography sx={[textStyle,{margin:"auto",marginTop:"55px",maxWidth:"1014px",width:"90%",paddingBottom:"100px"}]}>
					We have ample and rich experiences in operating long day care and kinder in Australia and 
					we have a complete operation system in child care based industry, including, educational program, 
					children’s health and safety, the service environment, staff hiring/training/arrangement, 
					collaborative partnerships with families and local communities, operational system in risk 
					management and effective operation of a quality service, critical reflection system 
					for the improvement of daily practice. </Typography>
			</Box>

			<Box sx={{padding:largeScreenWidth? "99px 97px 140px 97px": normalScreenWidth?"99px 50px 140px 50px":"99px 0px 100px 0px"}}>
				<Typography sx={nameStyle}>Core Values</Typography>
				<Box sx={{display:"flex",justifyContent:"space-between",marginTop:"56px",flexWrap:"wrap"}}>
					<Box sx={{minWidth:"300px",width:normalScreenWidth?"400px":"90%",height:"297px",background: "#A4ACFD",borderRadius: "30px",position:"relative",margin:"auto",marginTop:"70px"}}>
						{normalScreenWidth && <img src={icon_red_flower} style={{position:"absolute",left:"146px",top:"-55px"}} width={"108px"} height={"108px"}/>}
						<Typography sx={[coreValueTitleStyle,{marginTop:"82px"}]}>1</Typography>
						<Typography sx={[coreValueTextStyle,{margin:"auto",marginTop:"20px",width:"297px"}]}>Deliver high quality education and care, in a centre that showcases excellence.</Typography>
					</Box>
					<Box sx={{minWidth:"300px",width:normalScreenWidth?"400px":"90%",height:"297px",background: "#128967",borderRadius: "30px",position:"relative",margin:"auto",marginTop:"70px"}}>
						{normalScreenWidth && <img src={icon_yellow_flower} style={{position:"absolute",left:"146px",top:"-55px"}} width={"108px"} height={"108px"}/>}
						<Typography sx={[coreValueTitleStyle,{marginTop:"82px"}]}>2</Typography>
						<Typography sx={[coreValueTextStyle,{margin:"auto",marginTop:"20px",width:"297px"}]}>Be an employer of choice where staff wellbeing and professional learning is valued.</Typography>
					</Box>
					<Box sx={{minWidth:"300px",width:normalScreenWidth?"400px":"90%",height:"297px",background: "#EA938C",borderRadius: "30px",position:"relative",margin:"auto",marginTop:"70px"}}>
						{normalScreenWidth && <img src={icon_white_flower} style={{position:"absolute",left:"146px",top:"-55px"}} width={"108px"} height={"108px"}/>}
						<Typography sx={[coreValueTitleStyle,{marginTop:"82px"}]}>3</Typography>
						<Typography sx={[coreValueTextStyle,{margin:"auto",marginTop:"20px",width:"297px"}]}>To be an affordable and sustainable centre underpinned by governance based on best practice.</Typography>
					</Box>
				</Box>
			</Box>

			<Box sx={{height:"140px",background:"#138060"}}>
				<Typography sx={{
					fontFamily: "Nunito-ExtraBold",
					fontSize: "40px",
					color: "#FFFAF0",
					letterSpacing: "1px",
					textAlign: "center",
					lineHeight: "140px"
				}}>Our Philosophy</Typography>
			</Box>

			{IntroText.map((intro,index)=>{
				return (<IntroSection 
					title={intro.title}  
					text={intro.text}
					backgroundColor={intro.backgroundColor}
					imgUrl={intro.imgUrl}
					direction={intro.direction}
					titleColor={intro.titleColor}
					key={index}/>)
			})}
    </Box>
  )
}
