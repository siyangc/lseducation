import { 	
	Box, 
	Link,
	Typography,
} from "@mui/material"
import NavigationBar from "./NavigationBar"
import useMediaQuery from '@mui/material/useMediaQuery'

export default function TopBar(){

	const largeScreenWidth = useMediaQuery('(min-width:1024px)');
	const smallScreenWidth = useMediaQuery('(max-width:480px)')

	return (
		<>	
					<Box sx={{
						display:"flex",
						height:"11rem",
						justifyContent:"space-between",
						padding:"0 7%",
						textAlign:"center",
						alignItems:"center"}}>
						<Box sx={{width:"320px",margin:"1rem"}}>
							<Link underline="none" href={`/`}>
								<Typography sx={{
									fontFamily: "Nunito-ExtraBold",
									fontSize: smallScreenWidth?"2rem":"3rem",
									color: "#128967",
								}}>Little Swan Education</Typography>
							</Link>
						</Box>
						<Box>
							<NavigationBar />
						</Box>
					</Box>
		</>
	)
}