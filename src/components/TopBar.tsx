import { 	
	Box, 
	Link,
	Typography,
} from "@mui/material"
import NavigationBar from "./NavigationBar"
import useMediaQuery from '@mui/material/useMediaQuery'

export default function TopBar(){

	const largeScreenWidth = useMediaQuery('(min-width:1024px)');
	
	return (
		<>	
					<Box sx={{display:"flex",width:"100%",height:"11rem",justifyContent:"space-between"}}>
						<Box sx={{marginLeft:"121px",width:"320px"}}>
							<Link underline="none" href={`/`}>
								<Typography sx={{
									lineHeight:"11rem",
									fontFamily: "Nunito-ExtraBold",
									fontSize: "3rem",
									color: "#128967",
									letterSpacing: 0,
								}}>Little Swan Education</Typography>
							</Link>
						</Box>
						<Box sx={{marginRight: "80px"}}>
							<NavigationBar />
						</Box>
					</Box>
		</>
	)
}