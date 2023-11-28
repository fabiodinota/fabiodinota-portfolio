import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useThemeContext } from '../context/themeContext';
import Image from 'next/image';
import Arrow_dark from '../../public/Arrow_dark.svg';
import Arrow_light from '../../public/Arrow_light.svg';

interface InputFieldProps {
    placeholder: string;
    name: string;
    onChange: (_: FormEvent<HTMLInputElement>) => void;
    type?: string;
}


export const InputField: React.FC<InputFieldProps> = ({ placeholder, name, onChange, type }) => {
    const { colors, border, theme } = useThemeContext();
  return (
    <input 
        type={type || 'text'} 
        required
        placeholder={placeholder}
        name={name}
        autoComplete='off'
        onChange={(e) => onChange(e)}
        alt='What is your name or social media handle?'
        className={` w-full h-[70px] flex-shrink-0 border ${border} text-[20px] font-extralight px-5 focus:outline-none placeholder:font-thin placeholder:text-[20px] ${theme === "dark" ? "placeholder:text-white" : "placeholder:text-black"} align-middle`}
    />
  )
}

interface TextAreaProps {
    placeholder: string;
    name: string;
    onChange: (_: FormEvent<HTMLTextAreaElement>) => void;
}

export const TextArea: React.FC<TextAreaProps> = ({ placeholder, name, onChange }) => {
    const { colors, border, theme } = useThemeContext();
    return (
        <textarea
            placeholder={placeholder}
            name={name}
            onChange={(e) => onChange(e)}
            className={` w-full min-h-[160px] max-h-[300px] border pt-5 ${border} text-[20px] font-extralight px-5 focus:outline-none placeholder:font-thin placeholder:text-[20px] ${theme === "dark" ? "placeholder:text-white" : "placeholder:text-black"} align-middle`}
        />
    )
}

interface SelectProps {
    name: string;
    value: string;
    onChange: (_: FormEvent<HTMLSelectElement>) => void;
}

export const Select:React.FC<SelectProps> = ({ name, value, onChange }) => {
    const { colors, border, theme } = useThemeContext();

    const [open, setOpen] = useState<boolean>(false);

    return (
        <div onClick={() => setOpen(!open)} className='relative w-full'>
             <select
                name={name}
                value={value}
                required
                onChange={(e) => onChange(e)}
                className={`appearance-none w-full h-[70px] flex-shrink-0 border ${border} text-[20px] font-extralight px-5 focus:outline-none placeholder:font-thin placeholder:text-[20px] align-middle`}
            >
                <option>
                    Commission
                </option>
                <option>
                    Question
                </option>
                <option>
                    Collaboration
                </option>
                <option>
                    Bug Report
                </option>
                <option>
                    Other...
                </option>
            </select>
            <Image
                className={`absolute right-5 top-1/2 transform -translate-y-1/2 z-10 -rotate-90`}
                src={theme === "dark" ? Arrow_dark : Arrow_light}
                alt="arrow"
            />
        </div>
    )
}

interface SubmitButtonProps {
    onClick: (_: FormEvent) => void;
    text: string;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({ onClick, text }) => {
    const { colors, border, theme } = useThemeContext();
  return (
    <button
        type='submit'
        className={`w-full h-[70px] hover:underline flex-shrink-0 border ${border} text-[20px] font-extralight px-5 focus:outline-none align-middle`}
        onClick={(e) => onClick(e)}
    >
        {text}
    </button>
    )
}

export default SubmitButton