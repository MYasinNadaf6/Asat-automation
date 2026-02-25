import { faEnvelopeOpen, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
function Contact(){
    return(
       <div>
        <div className='h-screen w-full text-white flex items-center justify-center'>
            <div className='h-120 w-[90%] mt-5 flex '>
                <div className='parant flex h-120 w-[50%] mt-10'>
                    {/* heading */}
                    <div className='h-15 w-20 bg-black flex items-center gap-2  '>
                        <img src="./logo.png" alt="" />
                        <h1 className='text-2xl'>
                       | ASAT AUTOMATION
                    </h1>
                    </div>
                    {/*contact info*/}
                    <div className='mt-20'>
                        <h1 className='text-xl'>
                            Contact Details
                        </h1>
                        <h1>
                            <FontAwesomeIcon icon={faEnvelopeOpen} /> incquiries
                            <h1 className="text-xl text-gray-400">
                              <a href="">asatautomation@gmail.com</a>  
                            </h1>
                        </h1>
                        <h1>
                            <FontAwesomeIcon icon={faEnvelopeOpen} /> Product and servises
                            <h1 className="text-xl text-gray-400">
                                sales.asatautomations@gmail.com
                            </h1>
                        </h1>
                        <h1>
                            <FontAwesomeIcon icon={faPhone} />Phon
                             <h1>
                                +91 9657679504
                             </h1>
                        </h1>
                        <h1>
                            <FontAwesomeIcon icon={faLocation} />
                           <h1 className="text-m text-gray-400">
                             ASAT Plaza Kulsum Coloney Infront of Madrasa, Wagnaka, Waghwadi, Taluka- Walwa, District-Sangli, Maharashtra, India, PIN 415407
                           </h1>
                        </h1>
                    </div>
                    
                </div>
                <div>
                <h1>VISIT US</h1>
                <div className='h-100 w-130 bg-amber-950'>
                   <iframe className='h-full w-full' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3814.7321150811454!2d74.23762177456621!3d17.03680518379183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc10b793912b745%3A0xabe30ba5229791b4!2sASAT%20AUTOMATIONS!5e0!3m2!1sen!2sin!4v1769541110968!5m2!1sen!2sin" frameborder="0" />
                </div>
                </div>
                
            </div>
 
        </div>
       </div>
    );
}
export default Contact;