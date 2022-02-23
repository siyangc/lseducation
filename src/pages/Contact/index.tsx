import React, { useEffect, useState } from "react"
import { Box, Typography,TextField, Alert } from "@mui/material"
import MainImage from "../../components/MainImage"
import icon_phone from "../../assets/icons/phone.jpg"
import icon_mail from "../../assets/icons/mail.jpg"
import icon_address from "../../assets/icons/address.jpg"
import img_contact_bg from "../../assets/images/contact_bg.png"
import emailjs from '@emailjs/browser'
import useMediaQuery from '@mui/material/useMediaQuery'
export default function Contact() {

	const largeScreenWidth = useMediaQuery('(min-width:960px)');
	const normalScreenWidth = useMediaQuery('(min-width:480px)');
	
	const detail = [
		{name:"Principle Office",text:"14-16 Prospect Street,Box Hill, VIC, 3128",icon:icon_address},
		{name:"Call Us",text:"03 8201 7377",icon:icon_phone},
		{name:"Send Us",text:"info@littleswaneducation.com.au",icon:icon_mail},
	]

	const Detail = ({name,text,icon}:{name:string,text:string,icon:string}) => {
		return (
			<Box sx={{display:"flex",marginBottom:"50px",flex:1,minWidth:normalScreenWidth?"400px":"300px",marginLeft:"10px",marginRight:"10px"}}>
				<Box sx={{}}>
					{normalScreenWidth &&
					(<Box sx={{width:"100px",height:"100px",borderRadius:"50%",background:"#FFFAF0",textAlign:"center",marginRight:"30px"}}>
						<img src={icon} width={"50px"} height={"50px"} style={{margin:"auto",marginTop:"25px"}} />
					</Box>
					)}
					
				</Box>
				<Box>
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "24px",
						color: "#383838",
						letterSpacing: 0,
						//lineHeight: "30px"
					}}>{name}</Typography>
					<Typography sx={{
						fontFamily: "Nunito-SemiBold",
						fontSize: "20px",
						color: "#171717",
						letterSpacing: "0.4px",
						//lineHeight: "30px",
						marginTop:normalScreenWidth?"20px":"5px"
					}}>{text}</Typography>
				</Box>
			</Box>
		)
	}

	const emailConfig = {
		service_id: 'service_lka3ycj',
		template_id: 'template_mjljte8',
		user_id: 'user_DCFJxzNv3uZNDqBPd5pkQ',
	}
	const [emailText,setEmailText] = useState({
		name:"",
		email:"",
		message:""})

  return (
    <Box>
      <MainImage currentImage="contact"/>
			<Box sx={{paddingTop:"93px",paddingBottom:"100px"}}>
				<Typography sx={{
					fontFamily: "Nunito-ExtraBold",
					fontSize: "30px",
					color: "#383838",
					textAlign: "center",
					marginBottom:"76px"
				}}>Let's Get In Touch</Typography>
				<Box sx={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",padding:largeScreenWidth?"0px 77px":normalScreenWidth?"0px 30px":"0px 2px"}}>
					{detail.map((item,index)=>{
						return <Detail key={index} name={item.name} text={item.text} icon={item.icon}/>
					})}
				</Box>
			</Box>

			<Box sx={{display:"flex"}}>
					<Box sx={{background:"#F8F8F8",paddingTop:"100px",width:largeScreenWidth?"50%":"100%"}}>
						<Typography sx={{
							fontFamily: "Nunito-ExtraBold",
							fontSize: "30px",
							color: "#383838",
							textAlign: "center",
							marginBottom:"30px"
						}}>Drop Us A Line</Typography>
						<Box sx={{margin:"auto",textAlign:"center"}}>
							<TextField 
								required
								id="message"
								//label=""
								multiline={true}
								rows={7}
								placeholder="Leave your message"
								sx={{width:"73%"}}
								onChange={(e)=>setEmailText({...emailText,message:e.currentTarget.value})}
							/>
						</Box>
						<Box sx={{display:"flex",margin:"auto",marginTop:"20px",width:"73%",justifyContent:"space-between"}}>
							<TextField sx={{width:"48%"}} id="name" required placeholder="Your name" onChange={(e)=>setEmailText({...emailText,name:e.currentTarget.value})}/>
							<TextField sx={{width:"48%"}} id="email" required placeholder="Your email" onChange={(e)=>setEmailText({...emailText,email:e.currentTarget.value})}/>
						</Box>
						<Box sx={{
							width:"20%",
							background: "#128967",
							borderRadius: "11px",
							margin:"auto",
							marginTop:"50px",
							marginBottom:"50px",
							cursor:"pointer"
						}}
							onClick={(e)=>{
								//console.log(emailText)
								if(!emailText.name || !emailText.message || !emailText.email){
									alert("please fill in the form")
								}
								//emailjs.sendForm('service_15s4zfn', 'template_mjljte8', JSON.stringify(emailText),"user_DCFJxzNv3uZNDqBPd5pkQ")
								fetch('https://api.emailjs.com/api/v1.0/email/send', {
										method: 'POST',
										headers: {
												'Content-Type': 'application/json',
												'Accept': 'application/json',
										},
										body: JSON.stringify({template_params:emailText,...emailConfig})
								})

								.then((result) => {
										console.log(result.text)
										alert('Your mail is sent!');

								}, (error) => {
										console.log(error.text);
										alert('Oops something went wrong...');

								});
							}}
						><Typography sx={{
							fontFamily: "Nunito-Bold",
							fontSize: "16px",
							color: "#FFFAF0",
							letterSpacing: "0.32px",
							lineHeight: "50px",
							textAlign:"center"
						}}>Send</Typography>
						</Box>
					</Box>
					{largeScreenWidth && <img src={img_contact_bg} style={{width:"50%"}}/>}
			</Box>
    </Box>
  )
}