"use client";
import { useState, useEffect, useRef } from "react";
import gsap from 'gsap';
import { IoClose } from "react-icons/io5";
import ClipboardButton from "./ClipboardButton";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);
    const modalRef = useRef(null);

    // Function to handle modal close
    const handleClose = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: () => {
                setOpenModal(false);
            }
        })

    }
    // Prevent click event from bubbling up to the modal wrapper
    const handleModalInnerClick = (e) => {
        e.stopPropagation();
    };

    useEffect(() => {
        if (openModal) {
            gsap.fromTo(modalRef.current,
                { opacity: 0, },
                { opacity: 1, duration: 0.3 }
            );
        }
    }, [openModal]);

    return (
        <header className='text-white p-5 py-4 w-full fixed z-20 top-0 left-0 border-b border-white'>
            <nav className='flex items-center justify-between'>
                <div className="flex logo items-center gap-4">
                    <a href="/"><img src="/img/logo.svg" alt="logo" /></a>
                    <a href="/"><h1 className="text-2xl font-display">Kris Furer</h1></a>
                </div>
                <div className='flex items-center gap-x-6'>
                    <a href="#projects">Projects</a>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="border border-white rounded-full p-2 px-7 hover:bg-white hover:text-black transition ease-in-out duration-300"
                    >
                        Contact
                    </button>
                </div>
            </nav>
            {
                openModal && (
                    <div ref={modalRef}
                        onClick={handleClose}
                        className={`modalWrap rounded-md fixed flex items-center top-0 left-0 bg-stone-950 bg-opacity-70 w-full h-lvh justify-center ${openModal ? 'show' : ''}`}
                    >
                        <div
                            onClick={handleModalInnerClick}
                            className="modal-inner flex items-center border border-stone-500 rounded-3xl relative justify-center h-[90%] w-[90%] lg:h-[70%] lg:w-[70%] bg-stone-900"
                        >
                            <div className="modal-content">

                                <a href="mailto:KrisFurer@gmail.com" className=' text-xl lg:text-6xl'>KrisFurer@gmail.com</a> <span> <ClipboardButton content="KrisFure@gmail.com" /></span>
                                <IoClose
                                    size={30}
                                    className="absolute top-8 right-8 hover:scale-110 cursor-pointer transition ease-in-out duration-300"
                                    onClick={handleClose}
                                />
                            </div>
                        </div>
                    </div>
                )
            }
        </header>
    );
}
