import React, { useEffect, useState } from "react"
import { Box, Typography,TextField, Alert } from "@mui/material"
import MainImage from "../../components/MainImage"
import icon_phone from "../../assets/icons/phone.jpg"
import icon_mail from "../../assets/icons/mail.jpg"
import icon_address from "../../assets/icons/address.jpg"
import img_contact_bg from "../../assets/images/contact_bg.png"
import emailjs from '@emailjs/browser'

export default function Contact() {

	const detail = [
		{name:"Principle Office",text:"14-16 Prospect Street,Box Hill, VIC, 3128",icon:icon_address},
		{name:"Call Us",text:"03 8201 7377",icon:icon_phone},
		{name:"Send Us",text:"childcarekbayswater@gmail.com",icon:icon_mail},
	]

	const Detail = ({name,text,icon}:{name:string,text:string,icon:string}) => {
		return (
			<Box sx={{display:"flex",width:"400px"}}>
				<Box sx={{width:"100px",height:"100px",borderRadius:"50%",background:"#FFFAF0",textAlign:"center",marginRight:"30px"}}>
					<img src={icon} width={"50px"} height={"50px"} style={{margin:"auto",marginTop:"25px"}} />
				</Box>
				<Box>
					<Typography sx={{
						fontFamily: "Nunito-ExtraBold",
						fontSize: "24px",
						color: "#383838",
						letterSpacing: 0,
						lineHeight: "30px"
					}}>{name}</Typography>
					<Typography sx={{
						fontFamily: "Nunito-SemiBold",
						fontSize: "20px",
						color: "#171717",
						letterSpacing: "0.4px",
						lineHeight: "30px",
						marginTop:"20px"
					}}>{text}</Typography>
				</Box>
			</Box>
		)
	}

	const emailConfig = {
		service_id: 'service_15s4zfn',
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
			<Box sx={{paddingTop:"93px",paddingLeft:"96px",paddingRight:"96px",paddingBottom:"100px"}}>
				<Typography sx={{
					fontFamily: "Nunito-ExtraBold",
					fontSize: "30px",
					color: "#383838",
					letterSpacing: 0,
					textAlign: "center",
					marginBottom:"76px"
				}}>Let's Get In Touch</Typography>
				<Box sx={{display:"flex",justifyContent:"space-between"}}>
					{detail.map((item,index)=>{
						return <Detail key={index} name={item.name} text={item.text} icon={item.icon}/>
					})}
				</Box>
			</Box>

			<Box sx={{display:"flex",height:"687px"}}>
					<Box sx={{width:"50%",background:"#F8F8F8",paddingTop:"100px"}}>
						<Typography sx={{
							fontFamily: "Nunito-ExtraBold",
							fontSize: "30px",
							color: "#383838",
							letterSpacing: 0,
							textAlign: "center",
							marginBottom:"30px"
						}}>Drop Us A Line</Typography>
						<Box sx={{width:"528px",height:"220px",margin:"auto"}}>
							<TextField 
								required
								id="message"
								//label=""
								multiline={true}
								rows={7}
								placeholder="Leave your message"
								sx={{width:"528px",height:"220px"}}
								onChange={(e)=>setEmailText({...emailText,message:e.currentTarget.value})}
							/>
						</Box>
						<Box sx={{display:"flex",marginTop:"20px",marginLeft:"96px",marginRight:"96px",justifyContent:"space-between"}}>
							<TextField sx={{width:"254px"}} id="name" required placeholder="Your name" onChange={(e)=>setEmailText({...emailText,name:e.currentTarget.value})}/>
							<TextField sx={{width:"254px"}} id="email" required placeholder="Your email" onChange={(e)=>setEmailText({...emailText,email:e.currentTarget.value})}/>
						</Box>
						<Box sx={{
							width:"148px",
							height:"50px",
							background: "#128967",
							borderRadius: "11px",
							margin:"auto",
							marginTop:"50px",
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
										console.log(result.text);
								}, (error) => {
										console.log(error.text);
								});
							}}
						><Typography sx={{
							fontFamily: "Nunito-Bold",
							fontSize: "16px",
							color: "#FFFAF0",
							letterSpacing: "0.32px",
							lineHeight: "50px",
							textAlign:"center"
						}}>Send</Typography></Box>
					</Box>
					<img src={img_contact_bg} width={"50%"}/>
			</Box>
    </Box>
  )
}