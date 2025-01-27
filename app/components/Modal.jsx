// Modal.js
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { IoClose } from "react-icons/io5";

export default function Modal({ isOpen, onClose, children }) {
    const modalRef = useRef(null);

    useEffect(() => {
        if (isOpen) {
            gsap.fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 });
        }
    }, [isOpen]);

    const handleCloseClick = () => {
        gsap.to(modalRef.current, {
            opacity: 0,
            duration: 0.3,
            onComplete: onClose,
        });
    };

    const handleModalInnerClick = (e) => {
        e.stopPropagation();
    };

    if (!isOpen) return null;

    return (
        <div
            ref={modalRef}
            onClick={ handleCloseClick }
            className="modalWrap rounded-md fixed flex items-center top-0 left-0 bg-stone-950 bg-opacity-50 w-full h-lvh justify-center"
        >
            <div
                onClick={handleModalInnerClick}
                className="modal-inner flex items-center border border-stone-500 rounded-3xl relative justify-center h-[90%] w-[90%] lg:h-[70%] lg:w-[70%] bg-stone-900"
            >
                {children}
                <IoClose
                    size={30}
                    className="absolute top-8 right-8 hover:scale-110 cursor-pointer transition ease-in-out duration-300"
                    onClick={ handleCloseClick }
                />
            </div>
        </div>
    );
}
