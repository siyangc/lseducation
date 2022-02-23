import { 	
	Box, 
	Link,
	Typography,
} from "@mui/material"
import icon_call from "../assets/icons/call.png"
import icon_email from "../assets/icons/email.png"
import icon_bottom_part1 from "../assets/icons/bottom_part1.png"
import icon_bottom_part2 from "../assets/icons/bottom_part2.png"
import icon_bottom_part3 from "../assets/icons/bottom_part3.png"

const leftTextStyle={
	fontFamily: "Nunito-SemiBold",
	fontSize: "20px",
	color: "#FFFFFF",
	letterSpacing: "0.4px",
	lineHeight: "30px",
	marginLeft:"15px",
}

const rightTextStyle={
	fontFamily: "Nunito-SemiBold",
	fontSize: "20px",
	color: "#FFFFFF",
	letterSpacing: "0.4px",
	textAlign: "center",
	lineHeight: "30px",
}
export default function BottomBar(){
	return (
		<Box sx={{width:"100%",background:"#128967"}}>
			<Box sx={{display:"flex",position:"relative",maxWidth:"800px",flexWrap:"wrap",justifyContent:"space-between",margin:"auto"}}>
				{/* <img src={icon_bottom_part1} style={{position:"absolute",top:"201px"}}/>
				<img src={icon_bottom_part2} style={{position:"absolute",bottom:0,right:"152px"}}/>
				<img src={icon_bottom_part3} style={{position:"absolute",top:"-48px",right:0}}/> */}
				<Box sx={{
					marginLeft:"20px",
					marginBottom:"50px",
					marginTop:"50px",
					flex:1
					//margin:"auto"
					}}>
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "30px",
						color: "#FFFAF0",
					}}>Little Swan Education</Typography>
					<Box sx={{display:"flex",marginTop:"53px",alignItems:"center"}}>
						<img src={icon_call} width={"18px"} height={"18px"} style={{}}/>
						<Typography sx={leftTextStyle}>03 8201 7377</Typography>
					</Box>
					<Box sx={{display:"flex",marginTop:"17px",alignItems:"center"}}>
						<img src={icon_email} width={"18px"} height={"18px"} style={{}}/>
						<Typography sx={leftTextStyle}>info@littleswaneducation.com.au</Typography>
					</Box>
				</Box>

				<Box sx={{margin:"auto",marginBottom:"50px",flex:1,marginLeft:"30px",marginRight:"30px"}}>
					<Typography sx={{
						fontFamily: "Nunito-Bold",
						fontSize: "24px",
						color: "#FFFFFF",
						letterSpacing: "0.8px",
						lineHeight: "50px",
						textAlign:"center"
					}}>Website</Typography>
					<Link underline="none" href={`/#/service`}><Typography sx={rightTextStyle}>Our Service</Typography></Link>
					<Link underline="none" href={`/#/why-us`}><Typography sx={rightTextStyle}>Why Choose Us</Typography></Link>
					<Link underline="none" href={`/#/our-team`}><Typography sx={rightTextStyle}>Our Team</Typography></Link>
					<Link underline="none" href={`/#/contact-us`}><Typography sx={rightTextStyle}>Contact Us</Typography></Link>
				</Box>

			</Box>


			<Box sx={{height:"50px",background:"#C5E5CD"}}>
				<Typography sx={{
					fontFamily: "Nunito-SemiBold",
					fontSize: "16px",
					color: "#128967",
					letterSpacing: 0,
					lineHeight:"50px",
					textAlign: "center"}}>©2022 Copyright Reserved</Typography>
			</Box>
		</Box>
	)
}