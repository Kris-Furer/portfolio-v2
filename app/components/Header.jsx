"use client";
import { useState } from "react";
import Modal from "./Modal";
import ClipboardButton from "./ClipboardButton";

export default function Header() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <header className='text-white p-5 py-4 w-full fixed z-20 top-0 left-0 border-b border-white '>
            <nav className='flex items-center justify-between'>
                <div className="flex logo items-center gap-4">
                    <a href="/"><img src="/img/logo.svg" alt="logo" /></a>
                    <a href="/"><h1 className="text-2xl font-display">Kris Furer</h1></a>
                </div>
                <div className='flex items-center gap-x-6'>
                    <button
                        onClick={() => setOpenModal(true)}
                        className="border border-white rounded-full p-2 px-7 hover:bg-white hover:text-black transition ease-in-out duration-300"
                    >
                        Contact
                    </button>
                </div>
            </nav>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)}>
                <div className="modal-content">
                    <a href="mailto:KrisFurer@gmail.com" className=' text-xl lg:text-6xl'>KrisFurer@gmail.com</a> <span> <ClipboardButton content="KrisFure@gmail.com" /></span>
                </div>
            </Modal>
        </header>
    );
}
