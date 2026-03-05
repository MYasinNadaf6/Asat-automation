import { faEnvelopeOpen, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Footer from './Footer';
import Feedback from './Feedback';

function Contact() {
    return (
        <div className="heading min-h-screen">
            {/* Top Map Section */}
            <div className='w-full text-white p-6 md:p-10'>
                <h1 className='text-3xl md:text-4xl font-bold mb-6'>VISIT US</h1>
                <div className='h-[400px] md:h-[450px] w-full rounded-xl overflow-hidden border border-amber-950 shadow-2xl'>
                    <iframe 
                        className='h-full w-full grayscale contrast-125' 
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15254.4939233633!2d74.4533!3d17.08!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDA0JzQ4LjAiTiA3NMKwMjcnMTEuOSJF!5e0!3m2!1sen!2sin!4v1700000000000" 
                         
                        allowFullScreen
                    />
                </div>
            </div>

            {/* Main Content Section */}
            <div className='flex flex-col lg:flex-row gap-12 p-6 md:p-10 max-w-7xl mx-auto items-start'>
                
                {/* Left: Contact Info */}
                <div className='w-full lg:w-1/2'>
                    <div className='flex items-center gap-3 mb-8'>
                        <img src="./logo.png" alt="ASAT Logo" className="h-12" />
                        <h1 className='text-2xl text-amber-50 font-bold tracking-wider'>
                            | ASAT AUTOMATION
                        </h1>
                    </div>

                    <div className='text-amber-50 space-y-8'>
                        <h2 className='text-2xl font-semibold text-amber-500'>Contact Details</h2>
                        
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="mt-1.5 text-amber-600" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Inquiries</p>
                                    <a href="mailto:asatautomation@gmail.com" className="text-lg text-gray-300 hover:text-amber-500 transition">asatautomation@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="mt-1.5 text-amber-600" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Product & Services</p>
                                    <p className="text-lg text-gray-300">sales.asatautomations@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faPhone} className="mt-1.5 text-amber-600" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Phone</p>
                                    <p className="text-lg text-gray-300">+91 9657679504</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <FontAwesomeIcon icon={faLocation} className="mt-1.5 text-amber-600" />
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-gray-500 font-bold">Our Location</p>
                                    <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                                        ASAT Plaza Kulsum Coloney, Infront of Madrasa, Wagnaka, Waghwadi, 
                                        Taluka-Walwa, District-Sangli, Maharashtra, India, PIN 415407
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Feedback Form */}
                <Feedback />
            </div>

            <Footer />
        </div>
    );
}

export default Contact;