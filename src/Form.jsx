import { faEnvelope, faHouse, faIndustry, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Helmet } from 'react-helmet'

function Form() {
  const handleSubmit = (e)=>{
    e.preventDefault()
    const url = "https://script.google.com/macros/s/AKfycbyvYy1NNyAJJpCNRjjxjGNNmPmuwUm9Vz1nJDv7JGJbRt4UbnKSEoTYtmxe87EvWbtf1Q/exec"
    fetch(url,{
      method:"POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:(`Name=${e.target.name.value}&Email=${e.target.email.value}&Machine=${e.target.machine.value}&Address=${e.target.address.value}`)
    }).then(res=>res.text()).then(data=>{
      alert(data);
      e.target.reset();
    }).catch(error=>console.log(error))
  }



  return (
<div className='h-screen w-full flex items-center justify-center'>
  <div className='h-150 w-[50%] text-white p-6'>
  <form action="" onSubmit={handleSubmit}  className="login__form border-2 border-zinc-50">
            <h1 className="login__title text-2xl">Booking info of Product</h1>

            <div className="login__content">
               <div className="login__box">
                  <FontAwesomeIcon className='ri-user-3-line' icon={faUser} />
                  <div className="login__box-input">
                     <input type="text" name='name'required className="login__input border-b-2 border-white" id="login-email" placeholder="Name"/>
        
                  </div>
               </div>

               <div className="login__content">
               <div className="login__box">
                  <FontAwesomeIcon className='ri-user-3-line' icon={faEnvelope} />
                  <div className="login__box-input">
                     <input type="text" name='email'required className="login__input  border-b-2 border-white" id="login-email" placeholder="Email"/>
                    
                  </div>
               </div>

               <div className="login__box">
                  <FontAwesomeIcon className='ri-user-3-line' icon={faIndustry} />
                  <div className="login__box-input">
                     <input type="text" name='machine'required className="login__input border-b-2 border-white" id="login-email" placeholder="Machine"/>
                   
                  </div>
               </div>

               <div className="login__box">
               <FontAwesomeIcon className='ri-user-3-line' icon={faPhone} />
                  <div className="login__box-input">
                     <input type="number" name='phon' required className="login__input  border-b-2 border-white" id="login-pass" placeholder="Phone No."/>
             
                     <i className="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>

               <div className="login__box">
                  <FontAwesomeIcon className='ri-user-3-line' icon={faHouse} />
                  <div className="login__box-input">
                     <input type="text" name='address' required className="login__input  border-b-2 border-white" id="login-email" placeholder="address"/>
                    
                  </div>
               </div>
            </div>
            </div>

          <button className='bg-amber-50 p-4 text-black rounded-2xl ml-[45%] hover:scale-105 duration-300'>
            Submit
            </button>    
         </form>
         <Helmet>
         
         
         </Helmet>
        
          
         
        
  </div>
 
</div>

  )
}

export default Form