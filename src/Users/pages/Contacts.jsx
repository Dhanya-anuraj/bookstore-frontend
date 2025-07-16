import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone, faEnvelopeOpenText } from '@fortawesome/free-solid-svg-icons'
import Header from '../Components/Header'
import Footer from '../../components/Footer'

function Contacts() {
    return (
        <>
         <Header/>
            <div className='flex justify-center  items-center flex-col md:px-40 px-10 m'>
                <h1 className='my-5 text-3xl text-center font-medium'>Contacts</h1>

                <p className='md:text-center text-justify '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus in harum quidem quo illo dolor eius accusantium possimus impedit et, quod minus, fuga, suscipit deserunt? In quas animi facere perspiciatis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis necessitatibus sequi expedita perspiciatis consequatur culpa architecto distinctio doloremque repudiandae excepturi, reprehenderit quod impedit commodi accusantium veniam quisquam doloribus nobis iure?</p>
            </div>

            <div className="md:grid grid-cols-3 py-4 mt-10">
                <div className='flex justify-center items-center'>
                    <span className='bg-gray-300 me-2 flex justify-center items-center' style={{ width: "50px", height: "50px", borderRadius: "50%" }}><FontAwesomeIcon icon={faLocationDot} className='text-2xl ' /></span>
                    <p>123 Man Street, AP 4B,<br /> Anytown, CA 91234</p>
                </div>

                <div className='flex justify-center items-center md:my-0 my-2'>

                    <span className='bg-gray-300 md:me-2 flex justify-center items-center me-15' style={{ width: "50px", height: "50px", borderRadius: "50%" }}><FontAwesomeIcon icon={faPhone} className='text-2xl ' /></span>
                    <span>+91 9874581230 </span>

                </div>

                <div className='flex justify-center items-center md:my-0 my-2np'>
                    <span className='bg-gray-300 me-2 flex justify-center items-center' style={{ width: "50px", height: "50px", borderRadius: "50%" }}><FontAwesomeIcon icon={faEnvelopeOpenText} className='text-2xl ' /></span>
                    <p>bookstore@gmail.com</p>

                </div>
            </div>

            <div className='md:grid grid-cols-2 mt-10 py-5'>
              <div className=' flex justify-center items-center '>
                    <div className='bg-gray-300 shadow p-4 md:w-2/3 w-3/4 rounded  '>
                        <div className='py-4'><h4 className='text-center'>Send me Message</h4></div>

                        <form>
                            <div className="my-3 ">
                                <input type="text" placeholder='Name' className='px-3 py-1 rounded bg-white w-full' />
                            </div>
                            <div className="my-3 ">
                                <input type="email" placeholder='Email Id' className='px-3 py-1 rounded bg-white w-full' />
                            </div>
                            <div className="my-3 ">
                                <textarea type="email" placeholder='Message' className='px-3 py-3 rounded bg-white w-full' />
                            </div>
                            <div className="my-3 ">
                                <button className='bg-black text-white p-2 w-full rounded hover:bg-gray-300 hover:text-black hover:border border-black'>Send</button>
                            </div>
                        </form>
                    </div>
              </div>
                <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d125743.66684746367!2d76.2642304!3d9.9763557!3m2!1i1024!2i768!4f13.1!2m1!1skochi%20book%20store!5e0!3m2!1sen!2sin!4v1745773129293!5m2!1sen!2sin" width="500" height="330" style={{border:"0"}} allowFullScreen="" loading="lazy" className='mt-4 md:mt-0 max-w-3/4 mx-12 md:mx-0' referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>

            </div>

           <Footer/>
        </>
    )
}

export default Contacts
