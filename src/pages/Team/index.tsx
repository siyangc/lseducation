import React, { useEffect, useState } from "react"
import { Box, Typography } from "@mui/material"
import MainImage from "../../components/MainImage"
import ContactSection from "../../components/ContactSection"
import img_team_member1 from "../../assets/images/team_member1.jpg"
import img_team_member2 from "../../assets/images/team_member2.jpg"
import img_team_member3 from "../../assets/images/team_member3.jpg"
import img_team_member4 from "../../assets/images/team_member4.jpg"
import icon_moon from "../../assets/icons/moon.png"
import useMediaQuery from '@mui/material/useMediaQuery'

export default function Team() {

	const normalScreenWidth = useMediaQuery('(min-width:480px)');
	const TeamMembers = [
		{name:"Olivia Zhao",intro:[
			"Master in Early Childhood Education of Monash University",
			"Registered Kinder Teacher",
			"Centre manager",
			"Approved provider",
			"12-year experience in childcare"],imgUrl:img_team_member1},
		{name:"Debbi Cilli",intro:[
			"Bachelor in Early Childhood Education of Merlbourne University",
			"Centre manager",
			"11-year experience in childcare"
		],imgUrl:img_team_member2},
		{name:"Maria Tsinongas",intro:[
			"Bachelor in Early Childhood Education of Melbourner University",
			"Registered Kinder Teacher",
			"Centre manager",
			"Educational leader",
			"10-year experience in childcare"
		],imgUrl:img_team_member3},
		{name:"Bobbie-Jo Quin",intro:[
			"Diploma in Early Childhood Education",
			"Assistant manager",
			"5-year experience in childcare"
		],imgUrl:img_team_member4},
	]

	const SingleText = ({text}:{text:string}) => {
		return (
			<Box sx={{display:"flex"}}>
				<Box sx={{width:"20px"}}>
					<Box sx={{width:"10px",height:"10px",borderRadius:"50%",background:"#C5E5CD",marginTop:"6.5px"}}></Box>
				</Box>
				<Typography sx={{
					width:"266px",
					fontFamily: "Nunito-SemiBold",
					fontSize: "16px",
					color: "#383838",
					lineHeight: "24px"
				}}>{text}</Typography>
			</Box>
		)
	}
	const TeamSection = ({name,intro,imgUrl}:{name:string,intro:Array<string>,imgUrl:string}) => {
		return (
			<Box sx={{width:"496px",display:"flex",marginTop:"80px"}}>
				{/* <img src={imgUrl} width={"180px"} height={"180px"} style={{marginRight:"18px"}}/> */}
				<Box sx={{width:"286px",marginLeft:normalScreenWidth?"100px":"30px"}}>
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "30px",
						color: "#383838",
						letterSpacing: 0,
						lineHeight: "30px",
						marginBottom:"18px"
					}}>{name}</Typography>
					{intro.map((text,index)=>(
						<SingleText text={text} key={index} />
					))}
				</Box>
			</Box>
		)
	}
  return (
    <Box>
      <MainImage currentImage="team"/>
			<Box sx={{background:"#FFFDF8",position:"relative"}}>
				{/* <img src={icon_moon} width={"156px"} height={"156px"} style={{position:"absolute",right:"-20px",top:"150px"}} />
				<Box sx={{position:"absolute",width:"76px",height:"76px",left:"-23px",bottom:"80px",background:"#A4ACFD",borderRadius:"50%"}}></Box> */}
				<Typography sx={{
					paddingTop:"80px",
					fontFamily: "Nunito-ExtraBold",
					fontSize: "40px",
					color: "#A4ACFD",
					letterSpacing: "1px",
					textAlign: "center",
					lineHeight: "50px",
					}}>
					About Us
				</Typography>
				<Typography sx={{
					fontFamily: "Nunito-SemiBold",
					fontSize: "20px",
					color: "#171717",
					letterSpacing: "0.4px",
					textAlign: "center",
					lineHeight: "30px",
					maxWidth:"814px",
					width:"80%",
					margin:"auto",
					marginTop:"30px",
				}}>
					Little Swan Education comprises a group of delicated and capable team members, 
					who have proven skills and experience in Long Day-care co-ordination throughout Australia. 
					We are committed to raising the benchmark for Childcare and Early Learning in Australia.
					 We have created a complete and effective operation management systerm for 
					 running a long day care and kinder service.
				</Typography>
				<Box sx={{display:"flex",margin:"auto",maxWidth:"1024px",flexWrap:"wrap",justifyContent:"space-between",paddingBottom:"100px"}}>
					{TeamMembers.map((member,index)=>{
						return (
							<TeamSection key={index} name={member.name} imgUrl={member.imgUrl} intro={member.intro} />
						)
					})}
				</Box>
				
			</Box>

			{/* <ContactSection /> */}
    </Box>
  )
}
