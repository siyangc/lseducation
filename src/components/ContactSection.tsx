import { Box, Typography,Link } from "@mui/material"
import { subTitleStyle } from "../css/text"
import icon_red_triangle from "../assets/icons/red_triangle.png"

export default function ContactSection(){
	return (
		<Box sx={{position:"relative"}}>
				<Typography sx={{
					marginTop:"84px",
					fontFamily: "Nunito-ExtraBold",
					fontSize: "40px",
					color: "#A4ACFD",
					letterSpacing: "1px",
					textAlign: "center",
					lineHeight: "50px",
					marginBottom:"50px"
				}}>
					Get Your Little Ones Started Today
				</Typography>
				<Typography sx={{
					fontFamily: "Nunito-SemiBold",
					fontSize: "20px",
					color: "#171717",
					letterSpacing: "0.4px",
					textAlign: "center",
					lineHeight: "30px",
					marginBottom:"56px"
				}}>Our community is ready to welcome you with open arms.</Typography>
				<img src={icon_red_triangle} width={"74px"} height={"74px"} style={{position:"absolute",left:"211px",top:"144px"}}/>
			<Box sx={{
				margin:"auto",
				width:"165px",
				height:"50px",
				background: "#138060",
				borderRadius: "25px",
				marginBottom:"82px"
			}}>
				<Link underline="none" href="\contact-us">
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "18px",
						color: "#FFFAF0",
						letterSpacing: 0,
						textAlign: "center",
						lineHeight:"50px",
					}}>Contact Us</Typography>
				</Link>
			</Box>
		</Box>
	)
}