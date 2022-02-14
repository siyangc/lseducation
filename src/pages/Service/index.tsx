import React, { useEffect, useState } from "react"
import { Box, Typography,Link } from "@mui/material"
import MainImage from "../../components/MainImage"
import img_service_kid1 from "../../assets/images/service_kid1.png"
import img_service_kid2 from "../../assets/images/service_kid2.png"
import img_service_bg from "../../assets/images/service_bg.jpg"
import icon_moon from "../../assets/icons/moon.png"
import ContactSection from "../../components/ContactSection"
import ScrollAnimation from "react-animate-on-scroll"

export default function Service() {

	const dotStyle = {
		width:"10px",
		height:"10px",
		borderRadius:"50%",
		marginTop:"6.5px"
	}

	const textStyle= {
		fontFamily: "Nunito-SemiBold",
		fontSize: "16px",
		color: "#171717",
		letterSpacing: 0,
		lineHeight: "24px",
		width:"469px"
	}

	const textWhiteStyle= {
		fontFamily: "Nunito-SemiBold",
		fontSize: "16px",
		color: "#FFFFFF",
		letterSpacing: 0,
		lineHeight: "24px",
		width:"469px"
	}

	const listStyle = {
		display:"flex",
		marginBottom:"24px"
	}
  return (
    <Box>
      <MainImage currentImage="service"/>
			<Box sx={{height:"890px",background:"#FFFDF8",position:"relative"}}>
			<img src={icon_moon} width={"156px"} height={"156px"} style={{position:"absolute",right:"-20px",top:"150px"}} />
			<Box sx={{position:"absolute",width:"76px",height:"76px",left:"118px",bottom:"160px",background:"#A4ACFD",borderRadius:"50%"}}></Box>
				<Typography sx={{
					fontFamily: "Nunito-ExtraBold",
					fontSize: "40px",
					color: "#A4ACFD",
					letterSpacing: "1px",
					textAlign: "center",
					lineHeight: "50px",
					marginTop:"80px"
				}}>
					We're here to help
				</Typography>
				<Typography sx={{
					fontFamily: "Nunito-SemiBold",
					fontSize: "20px",
					color: "#171717",
					letterSpacing: "0.4px",
					textAlign: "center",
					lineHeight: "30px",
					width:"814px",
					margin:"auto",
					marginTop:"30px"
				}}>
					Little Swan Education offers quality long day care and kinder management services for our clients. 
					We manage and operate child care centres in line with a comprehensive service level agreement to provide the following: 
				</Typography>

				<Box sx={{display:"flex",marginLeft:"156px",marginTop:"58px", position:"relative"}}>
					
					<img src={img_service_kid1} width={"540px"} height={"500px"} />
					<Box sx={{width:"494px",marginLeft:"60px"}}>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#FFD756"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>
								Compliance with Education and Care Services National Regulation/Law
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#A4ACFD"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>
								Staff training with the provision of professional development training session
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#EA938C"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>Manage centre enrolment with a marketing plan</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#128967"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>Financial management including booking keeping, payroll and accounting</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#C5E5CD"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>
								Compliance with all other legal requirements, such as, 
								National Quality Standards, Early Years Learning Framework, 
								Code of Ethic, Rights of the child, etc.
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#EA938C"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>Developing policies and a robust system for review</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#A4ACFD"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>Developing a strategic plan to guide business practices</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#FFD756"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textStyle}>
								Developing risk plans to ensure potential scenarios are considered and risk mitigation reduces risk to a low rating
							</Typography>
							</ScrollAnimation>
						</Box>
					</Box>
				</Box>
			</Box>

			<Box sx={{height:"772px",background:`url(${img_service_bg})`,position:"relative"}}>
					<Box sx={{display:"flex",paddingLeft:"172px",paddingTop:"122px"}}>
					<Box sx={{width:"494px",marginLeft:"60px"}}>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#FFD756"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
								Developing centre values, culture documents and guiding principles to ensure the centre, children, 
								families and staff are considered in all decisions
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#A4ACFD"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
								Ensuring thorough communication lines between staff and families, management and families, 
								management and board members, staff and children and the centre and the wider community
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#EA938C"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
								A staff culture and wellbeing program to protect staff and 
								ensure they are valued and honoured for the work they do</Typography>
								</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#128967"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
								Business systems to ensure the centres finances, billing, salaries, government reporting 
								and children’s services regulations are adhered to at all times</Typography>
								</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#C5E5CD"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
								Mentoring and professional development opportunities to support staff in achieving the highest 
								standards of education and care
							</Typography>
							</ScrollAnimation>
						</Box>
						<Box style={listStyle}>
							<Box sx={{width:"20px"}}><Box sx={[dotStyle,{background:"#EA938C"}]}></Box></Box>
							<ScrollAnimation animateIn="fadeInRight" offset={0}>
							<Typography sx={textWhiteStyle}>
							Documentation has been designed and created to support staff in reaching exceeding practices in relation to the National Quality Standards
							</Typography>
							</ScrollAnimation>
						</Box>
					</Box>
					<img src={img_service_kid2} width={"540px"} height={"500px"} />
				</Box>
			</Box>

			{/* <ContactSection /> */}
    </Box>
  )
}
