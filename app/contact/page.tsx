"use client";

import React, { FormEvent, useState } from "react";
import { useThemeContext } from "../context/themeContext";
import { InputField, Select, TextArea } from "../components/ContactComponents";
import Image from "next/image";
import ContactImage from "../../public/Contact.png";
import axios from "axios";

function Contact() {
	const { colors, border } = useThemeContext();

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

   /*  const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const EmailData = {
            type: contactInfo.type,
            name: contactInfo.name,
            email: contactInfo.email,
            subject: contactInfo.subject,
            budget: contactInfo.budget,
            message: contactInfo.message
        }

        axios.post('/api', EmailData)
            .then((response) => {
                console.log(response.status, response.data);
            })
            .catch((err) => {
                console.log(err)
            })
    } */

	return (
        <>
            <div className={`border-b ${border} absolute z-50 ${colors.background} top-0 left-0 w-full h-[80px] flex lg:hidden justify-start items-center px-5 text-[20px] ${colors.primary}`}>
                Contact Me
            </div>
            <div
                className={`${colors.primary} h-full w-full  overflow-y-scroll relative flex flex-row justify-center items-start top-0`}
            >
                <div className="w-full max-w-[1300px] h-full  p-5 lg:px-10 flex flex-row items-start lg:items-center relative top-[80px] lg:top-0 justify-evenly space-x-5">
                    <div
                        className="flex flex-col gap-5 justify-start items-start w-full lg:w-[60%]"
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
{/*                         <button onClick={(e) => handleSubmit(e)}>Submit</button>
 */}                    </div>
                    <div
                        className={`relative w-[40%] h-[750px] hidden lg:flex border ${border}`}
                    >
                        <Image 
                            src={ContactImage}
                            className="object-cover aspect-[original]"
                            fill
                            alt="Contact Me" 
                        />
                    </div>
                </div>
            </div>
        </>
	);
}
export default Contact;
