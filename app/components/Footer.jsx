import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";



export default function Footer() {
    return (
        <footer>
            <div className="footer-inner flex justify-between items-center p-4 border-b border-white">
                <p className='text-3xl py-3'>Kris Furer Web</p>
                <div className="socials flex gap-3 ">
                    <a className='text-stone-400 hover:text-stone-100 transition duration-300' target='_blank' href="https://github.com/Kris-Furer" aria-label="GitHub Profile of Kris Furer" ><IoLogoGithub size={25}/></a>
                    <a className='text-stone-400 hover:text-stone-100 transition duration-300'target='_blank' href="https://www.linkedin.com/in/kris-furer/" aria-label="Linkedin Profile of Kris Fure"><FaLinkedin size={25} /></a>
                    <a className='text-stone-400 hover:text-stone-100 transition duration-300'target='_blank' href="https://open.spotify.com/playlist/2S2bPEoMywe707BLIAPNmG" aria-label="Spotify Playlist"><FaSpotify size={25} /></a>
                </div>
            </div>
        </footer>
    )
}
