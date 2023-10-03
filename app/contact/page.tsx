"use client";

import React, { FormEvent, useState } from "react";
import { useThemeContext } from "../context/themeContext";
import SubmitButton, { InputField, Select, TextArea } from "../components/ContactComponents";
import Image from "next/image";
import ContactImageWhite from "../../public/Contact_white.png";
import ContactImageBlack from "../../public/Contact_black.png";
import axios from "axios";

function Contact() {
	const { colors, border, theme } = useThemeContext();

    type ContactInfoSelectType = "Commission" | "Question" | "Collaboration" | "Bug Report" | "Other";

    interface ContactInfoProps {
        type: ContactInfoSelectType;
        name: string;
        email: string;
        subject: string;
        budget?: string;
        message: string;
    }

    const [contactInfo, setContactInfo] = useState<ContactInfoProps>({
        type: 'Commission',
        name: '',
        email: '',
        subject: '',
        budget: '',
        message: ''
    })

    const [message, setMessage] = useState<string>("");

   const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if(contactInfo.name === '' || contactInfo.email === '' || contactInfo.subject === '' || contactInfo.message === '') {
            setMessage("Please fill out all the required fields.")
            return;
        }

        const EmailData = {
            type: contactInfo.type,
            name: contactInfo.name,
            email: contactInfo.email,
            subject: contactInfo.subject,
            budget: contactInfo.budget,
            message: contactInfo.message
        }

        axios.post('/api/send', EmailData, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => {
                setMessage("Message sent successfully!")
            })
            .catch((err) => {
                setMessage("Something went wrong, please try again later.")
            })
    }

	return (
        <>
            <div className={`border-b ${border} absolute z-40 ${colors.background} top-0 left-0 w-full h-[80px] flex lg:hidden justify-start items-center px-5 text-[20px] ${colors.primary}`}>
                Contact Me
            </div>
            <div
                className={`${colors.primary} h-full w-full  overflow-y-scroll relative flex flex-row justify-center items-start top-0`}
            >
                <div className="w-full max-w-[1300px] h-full  p-5 lg:px-10 flex flex-row items-start relative top-[80px] lg:top-[2em] justify-evenly space-x-10">
                    <div
                        className="flex flex-col gap-5 justify-start items-start w-full lg:w-[60%] overflow-y-scroll lg:pb-5"
                    >
                        <div className="hidden lg:block">
                            <h1 className={`text-[30px] font-normal text-left ${colors.primary}`}>
                                Contact Me
                            </h1>
                            <p className={`font-extralight text-[20px] ${colors.primary}`}>
                                Get in touch with me! I will get back to you as soon as possible.
                            </p>
                        </div>
                        <Select name="type" value={contactInfo.type} onChange={
                            (e) => setContactInfo({...contactInfo, type: e.currentTarget.value as ContactInfoSelectType})
                        }/>
                        <InputField placeholder="Name" name="name" onChange={
                            (e) => setContactInfo({...contactInfo, name: e.currentTarget.value})
                        }/>
                        <InputField placeholder="Email" name="email" type="email" onChange={
                            (e) => setContactInfo({...contactInfo, email: e.currentTarget.value})
                        }/>
                        <InputField placeholder="Subject" name="subject" onChange={
                            (e) => setContactInfo({...contactInfo, subject: e.currentTarget.value})
                        }/>
                        {contactInfo.type === 'Commission' && 
                            <InputField placeholder="Budget" name="budget" onChange={
                                (e) => setContactInfo({...contactInfo, budget: e.currentTarget.value})
                            }/>
                        }
                        <TextArea placeholder="Message" name="message" onChange={
                            (e) => setContactInfo({...contactInfo, message: e.currentTarget.value})
                        }/>
                        <SubmitButton 
                            text="Send"
                            onClick={(e) => handleSubmit(e)}
                        />
                        <p className={`text-[20px] font-extralight ${message === "Message sent successfully!" ? "text-green-500" : "text-red-600"}`}>
                            {message}
                        </p>
                   </div>
                    <div
                        className={`relative w-[500px] h-[750px] hidden lg:block`}
                    >
                        <Image 
                            src={theme === "dark" ? ContactImageBlack : ContactImageWhite}
                            className="object-contain"
                            fill
                            quality={100}
                            sizes="500px"
                            alt="Contact Me" 
                        />
                    </div>
                </div>
            </div>
        </>
	);
}
export default Contact;
