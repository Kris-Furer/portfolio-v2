import React, { useState } from 'react';
import {IoCopy } from 'react-icons/io5';

export default function ClipboardButton({content}) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(content)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000); // Reset the copied state after 2 seconds
          })
          .catch(err => console.error('Failed to copy: ', err));
    };

    return (
        <span className='relative'>
            <button
                onClick={handleCopy}
                className=" hover:scale-110 cursor-pointer  relative transition ease-in-out duration-300"
                aria-label="Copy email to clipboard"
            >
                <IoCopy className="pb-1" size={30} />
                {copied && <p className="absolute text-sm text-cyan-500">Copied</p>}

            </button>
           
        </span>
    );
}
