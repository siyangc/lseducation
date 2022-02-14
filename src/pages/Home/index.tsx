import React, { useEffect, useState } from "react"
import { Box, Typography,Link } from "@mui/material"
import MainImage from "../../components/MainImage"
import img_home_bg from "../../assets/images/home_bg.jpg"
import img_home_middle from "../../assets/images/home_middle.jpg"
import icon_vision from "../../assets/icons/vision.png"
import icon_values from "../../assets/icons/values.png"
import icon_purpose from "../../assets/icons/purpose.png"
import icon_philosophy from "../../assets/icons/philosophy.png"
import img_home_kid from "../../assets/images/home_kid.jpg"
import img_home_detail1 from "../../assets/images/home_detail1.png"
import img_home_detail2 from "../../assets/images/home_detail2.png"
import img_home_detail3 from "../../assets/images/home_detail3.png"
import icon_moon from "../../assets/icons/moon.png"
import icon_white_flower from "../../assets/icons/white_flower.png"
import icon_yellow_arrow from "../../assets/icons/yellow_arrow.png"
import ScrollAnimation from "react-animate-on-scroll"

export default function Home() {

	const IntroContent=[
		{title:"VISION",text:"To create an early childhood service that is a centre for excellence.",url:icon_vision},
		{title:"PURPOSE",text:"To create better outcomes for children and their families.",url:icon_purpose},
		{title:"VALUES",text:"Quality education and care, a safe and secure sense of belonging, an emotionally safe place for everyone, respect, honesty and integrity.",url:icon_values},
		{title:"CENTRE PHILOSOPHY",text:"Driven by Reggio Emilia and Montessori pedagogy.",url:icon_philosophy}
	]
	const IntroSection = ({title,text,url}:{title:string,text:string,url:string}) => {
		return (
			<Box sx={{width:"345px",marginTop:"70px",textAlign:"center"}}>
				<Box sx={{
					background: "#FFFAF0",
					width:"75px",
					height:"75px",
					borderRadius:"50%",
					margin:"auto",
					marginBottom:"18px",
					display:"flex"
				}}>
					<img src={url} style={{margin:"auto"}} width={"38px"} height={"38px"}/>
				</Box>
				
				<Typography sx={{
					fontFamily: "Nunito-ExtraBold",
					fontSize: "24px",
					color: "#FFFFFF",
					letterSpacing: "0.8px",
					lineHeight: "50px"}}>{title}</Typography>
				<Typography sx={{
					fontFamily: "Nunito-SemiBold",
					fontSize: "20px",
					color: "#FFFFFF",
					letterSpacing: "0.4px",
					textAlign: "center",
					lineHeight: "30px",
					//width:"345px"
				}}>{text}</Typography>
			</Box>
		)
	}

	const detailTitleStyle={
		fontFamily: "Nunito-ExtraBold",
		fontSize: "24px",
		color: "#FFFFFF",
		letterSpacing: "0.8px",
		lineHeight: "50px",
		marginTop:"21px"
	}

	const detailTextStyle={
		fontFamily: "Nunito-SemiBold",
		fontSize: "20px",
		color: "#FFFFFF",
		letterSpacing: "0.4px",
		textAlign: "center",
		lineHeight: "30px",
		width: "297px",
		margin:"auto"
	}

	const DetailSection = () => {
		return (
			<Box sx={{display:"flex",padding:"30px 98px",justifyContent:"space-between",marginBottom:"100px"}}>
				<Box sx={{width:"400px",height:"500px",background:"#A4ACFD",borderRadius:"30px",textAlign:"center"}}>
					<img src={img_home_detail1} width={"169px"} height={"169px"} style={{marginTop:"68px"}}/>
					<ScrollAnimation 
						animateIn='bounce'
						initiallyVisible={true}
						animateOnce={true}>
					<Typography sx={detailTitleStyle}>Our Service</Typography>
					</ScrollAnimation>
					<Typography sx={detailTextStyle}>Quality Care For your kids to help them grow.</Typography>
					<Box sx={{width:"140px",height:"45px",borderRadius:"25px",background:"#FFFFFF",margin:"auto",marginTop:"27px"}}>
						<Link underline="none" href="/service">
							<Typography sx={{
								fontFamily: "Nunito-Bold",
								fontSize: "16px",
								color: "#A4ACFD",
								letterSpacing: 0,
								textAlign: "center",
								lineHeight:"45px"
							}}>View More</Typography>
						</Link>
					</Box>
				</Box>
				<Box sx={{width:"400px",height:"500px",background:"#128967",borderRadius:"30px",textAlign:"center"}}>
					<img src={img_home_detail2} width={"169px"} height={"169px"} style={{marginTop:"68px"}}/>
					<ScrollAnimation 
						animateIn='bounce'
						initiallyVisible={true}
						animateOnce={true}>
						<Typography sx={detailTitleStyle}>Why Choose Us</Typography>
					</ScrollAnimation>
					<Typography sx={detailTextStyle}>Better Development, Better Learning.</Typography>
					<Box sx={{width:"140px",height:"45px",borderRadius:"25px",background:"#FFFFFF",margin:"auto",marginTop:"27px"}}>
						<Link underline="none" href="/why-us">
							<Typography sx={{
								fontFamily: "Nunito-Bold",
								fontSize: "16px",
								color: "#128967",
								letterSpacing: 0,
								textAlign: "center",
								lineHeight:"45px"
							}}>View More</Typography>
						</Link>
					</Box>
				</Box>
				<Box sx={{width:"400px",height:"500px",background:"#EA938C",borderRadius:"30px",textAlign:"center"}}>
					<img src={img_home_detail3} width={"169px"} height={"169px"} style={{marginTop:"68px"}}/>
					<ScrollAnimation 
						animateIn='bounce'
						initiallyVisible={true}
						animateOnce={true}>
					<Typography sx={detailTitleStyle}>Our Team</Typography>
					</ScrollAnimation>
					<Typography sx={detailTextStyle}>Professionals and Friendly to look after your kids.</Typography>
					<Box sx={{width:"140px",height:"45px",borderRadius:"25px",background:"#FFFFFF",margin:"auto",marginTop:"27px"}}>
						<Link underline="none" href="/our-team">
							<Typography sx={{
								fontFamily: "Nunito-Bold",
								fontSize: "16px",
								color: "#EA938C",
								letterSpacing: 0,
								textAlign: "center",
								lineHeight:"45px"
							}}>View More</Typography>
						</Link>
					</Box>
				</Box>
			</Box>
		)
	}
  return (
    <Box>
      <MainImage currentImage="home"/>
			<Box sx={{height:"704px"}}>
				<Box sx={{textAlign:"center",paddingTop:"107px"}}>
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "40px",
						color: "#A4ACFD",
						letterSpacing: "1px",
						textAlign: "center",
						lineHeight: "50px"
					}}>
					Encouraging the best learning
					<br />
					outcomes for children
					</Typography>
				</Box>
				<Box sx={{width:"814px",textAlign:"center",margin:"auto",marginTop:"48px"}}>
				<ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' duration={2}>
					<Typography sx={{
						fontFamily: "Nunito-SemiBold",
						fontSize: "20px",
						color: "#171717",
						letterSpacing: "0.4px",
						textAlign: "center",
						lineHeight: "30px"}}>
						Little Swan Education comprises a group of delicated and capable team members, 
						who have proven skills and experience in Long Day-care co-ordination throughout Australia. 
						We are committed to raising the benchmark for Childcare and Early Learning in Australia. 
						We have created a complete and effective operation management systerm for running a long day care and kinder service.</Typography>
				</ScrollAnimation>
				</Box>
			</Box>

			<Box sx={{backgroundImage:`url(${img_home_bg})`,height:"980px",width:"100%",backgroundRepeat: "no-repeat",position:"relative"}}>
				<img src={icon_yellow_arrow} style={{position:"absolute",bottom:"-102px",right:"0px"}} width={"100px"} height={"204px"}/>
				<Box sx={{width:"887px",textAlign:"center",margin:"auto",position:"relative"}}>
						<img src={icon_moon} width={"134px"} height={"134px"} style={{position:"absolute",right:"-72px",top:"-72px"}} />
						<img src={icon_white_flower} width={"218px"} height={"218px"} style={{position:"absolute",left:"-109px",bottom:"-109px"}} />
					<img src={img_home_middle} width={"100%"} style={{borderRadius:"30px",marginTop:"-230px"}}/>
				</Box>
				<Box sx={{width:"887px",margin:"auto",textAlign:"center",display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
						{IntroContent.map((item,index)=>{
							return (<IntroSection title={item.title} text={item.text} key={index} url={item.url}/>)
						})}
				</Box>
			</Box>

			{/* <Box>
				<Box sx={{display:"flex",padding:"116px 107px"}}>
						<img src={img_home_kid} width={"540px"} height={"500px"}/>
						<Box sx={{paddingTop:"145px",marginLeft: "71px"}}>
							<Typography sx={{
								fontFamily: "Nunito-ExtraBold",
								fontSize: "40px",
								color: "#128967",
								letterSpacing: "1px",
								lineHeight: "50px",
								
							}}>
								<span>You</span>
								<span style={{color:"#FFD756"}}> Can </span>
								<span style={{color:"#A4ACFD"}}>Rely On</span>
								<span style={{color:"#EA938C"}}> Us</span>
							</Typography>
							<ScrollAnimation animateIn="fadeIn" animateOut='fadeOut' duration={2}>
							<Typography sx={{
								fontFamily: "Nunito-SemiBold",
								fontSize: "20px",
								color: "#171717",
								letterSpacing: "0.4px",
								lineHeight: "30px",
								width: "516px",
								marginTop: "40px"
							}}>Bayswater Childcare and Kinder at 27 Orange Grove, Bayswater, VIC, 3134 
								operated by Little Swan Education management team, 
								has been rated with EXCEEDING in line with National Quality Standard.</Typography>
								</ScrollAnimation>
						</Box>
						
				</Box>

				<DetailSection />
			</Box> */}
    </Box>
  )
}