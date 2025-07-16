import React, { useState } from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons'

function Careers() {
    const [modalStatus , setModalStatus] = useState(false)
    return (
        <>
            <Header />
            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-center text-2xl font-semibold mt-10'>Careers</h1>
                <p className=' md:px-30 px-5 md:text-center text-justify md:ms-5 mt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam quis quasi corrupti facere eos voluptatem, quo vero! Nihil totam itaque porro dolorem ullam! Sequi quam, veritatis tenetur nisi libero quisquam quasi ut sapiente laborum natus fuga cumque eius rem nihil aperiam deserunt neque ducimus iste, aliquam possimus excepturi ea! Deleniti distinctio,  reiciendis aliquid unde laudantium voluptas praesentium, quia debitis ratione voluptate. Quo aliquam voluptatum dicta consectetur. Consectetur.</p>
            </div>
            <div className='md:px-20 px-5 md:mt-20'>
                <h2 className=' mt-10 font-medium text-2xl'>Current Openings</h2>
                <div className='flex justify-center items-center'>
                    <div className='flex  items-center my-8 md:w-1/4 1/2'>
                        <input type="text" placeholder='Search by title' className='placeholder-gray-300 border border-gray-300 px-3 py-2 w-full shadow' />
                        <button className='bg-green-800 px-5 py-2 text-white hover:border hover:border-green-800 hover:bg-white hover:text-green-800'>Search</button>
                    </div>
                </div>
            </div>

            <div className='md:px-30 px-5 md:py-10 py-5'>
                <div className='shadow
                 p-3 rounded border border-gray-200 '>

                    <div className="md:grid grid-cols-[8fr_1fr] md:p-5 p-2">
                        <div>
                            <h1 className='text-xl'>Job Title</h1>
                            <hr className='text-gray-300 mt-2' />
                            <div className='md:px-5 mt-5'>
                                <p><FontAwesomeIcon icon={faLocationDot} className='me-2 text-blue-400' />Location</p>
                                <p className='mt-2'>Job Type : Senior Level</p>
                                <p className='mt-2' >Salary : 10 lakh</p>
                                <p className='mt-2'>Qualification : M-Tech/B-Tech/BCA/MCA</p>
                                <p className='mt-2'>Experience : 5-7</p>
                                <p className='mt-2'>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident eligendi unde cum dolores repudiandae accusamus est distinctio totam eveniet? Corrupti beatae nisi incidunt nemo dicta. Officiis nostrum quo laborum sed.</p>
                            </div>
                        </div>
                        <div className=' flex md:justify-center items-start justify-end md:mt-0 mt-3 '>
                            <button className='bg-blue-700 text-white px-3 py-2 rounded' onClick={()=>setModalStatus(true)}>Apply<FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2' /></button>
                        </div>

                    </div>

                </div>
            </div>


           {modalStatus && <div class="relative z-10" aria-labelledby="dialog-title" role="dialog" aria-modal="true">

                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex md:min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

                        <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            {/* title */}
                            <div class="bg-gray-900 p-4 flex justify-between px-4">
                                <h1 className='text-white text-2xl'>Application Form</h1>
                                <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark} className='text-white fa-2x' />

                            </div>


                            {/* body of modal */}
                            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <div className="grid grid-cols-2">
                                    <div className='flex justify-center flex-col'>
                                        <div className="my-3">
                                            <input type="text" className='border border-gray-300 rounded w-full p-1 placeholder:text-sm' placeholder='Full Name' />

                                        </div>
                                        <div className="my-3">
                                            <input type="text" className='border border-gray-300 rounded w-full p-1 placeholder:text-sm' placeholder='Email ID' />

                                        </div>
                                    </div>
                                    <div className='flex justify-center flex-col ms-2'>
                                        <div className="my-3">
                                            <input type="text" name="" id="" placeholder='Qualification' className='border border-gray-300 rounded w-full p-1 placeholder:text-sm' />
                                        </div>
                                        <div className="my-3">
                                            <input type="text" name="" id="" placeholder='Phone' className='border border-gray-300 rounded w-full p-1 placeholder:text-sm' />
                                        </div>
                                    </div>
                                </div>
                                <div className="my-3">
                                    <textarea name="" id="" className='border border-gray-300 w-full rounded pb-6 placeholder:text-sm p-1' placeholder='Cover Letter' />
                                </div>
                                <div className="mb-3">
                                    <p className='text-gray-400'>Resume</p>
                                    <input type="file" className='border border-gray-300 w-full rounded  file:bg-gray-400 file:p-1 file:text-white' />
                                </div>
                            </div>

                            {/* footer of modal */}
                            <div class="bg-gray-200 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">

                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-green-500 sm:ml-3 sm:w-auto hover:bg-white hover:border hover:border-green-600 hover:text-green-600">Submit</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-amber-500 text-white hover:border hover:border-amber-500 hover:text-amber-500 hover:bg-white px-3 py-2 text-sm font-semibold  shadow-xs ring-inset  sm:mt-0 sm:w-auto">Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>}


            <Footer />
        </>
    )
}

export default Careers
