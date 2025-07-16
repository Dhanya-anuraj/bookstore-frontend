import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard, faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [status, setStatus] = useState(false)
  const [dropdownStatus, setDropdownStatus] = useState(false)
  return (
    <>

      <div className='md:grid grid-cols-3 md:px-10 px-4 py-2 flex items-center'>

        <div className='flex items-center ms-3'>
          <Link to={"/"}><img src="https://www.kindpng.com/picc/m/19-194546_icon-book-transparent-book-icon-png-png-download.png" alt="book-logo" style={{ width: '50px', height: '50px' }} /></Link>
          <h1 className='text-center text-2xl font-semibold ms-4 md:hidden'>BOOK STORE</h1>


        </div>
        <div className='md:flex justify-center items-center hidden'>
          <h1 className='text-center text-2xl font-semibold '>BOOK STORE</h1>
        </div>
        <div className='md:flex justify-end items-center hidden '>
          <FontAwesomeIcon className='me-5 text-xl' icon={faInstagram} />
          <FontAwesomeIcon className='me-5 text-xl' icon={faTwitter} />
          <FontAwesomeIcon className='me-5 text-xl' icon={faFacebook} />
          {/* 
       <Link to={'/login'}>
         <button className=' border border-black text-black rounded px-3 py-1'><FontAwesomeIcon icon={faUser} className='me-2' />Login</button>
  
       </Link> */}
          {/* dropdown */}
          <div class="relative inline-block text-left">
            <div>
              <button onClick={()=>setDropdownStatus(!dropdownStatus)} type="button" class=" items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-xs  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no-image" style={{ width: "40px", height: "40px" }} />

              </button>
            </div>
           {dropdownStatus && <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">

                <Link to={'/profile'}><p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} className='me-2' /> Profile</p></Link>
                <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"><FontAwesomeIcon icon={faPowerOff} className='me-2'/> Logout</button>
              </div>
            </div>
}

          </div>

        </div>

      </div>

      <nav className=' p-4 ' style={{ backgroundColor: "rgb(1, 1, 30)" }}>
        <div className='flex md:hidden justify-between items-center'>
          <span onClick={() => setStatus(!status)}><FontAwesomeIcon icon={faBars} className='text-2xl text-white' /></span>

          {/* <Link to={'/login'}><button className=' border border-white text-white rounded px-3 py-1 '><FontAwesomeIcon icon={faUser} className='me-2' />Login</button></Link> */}
  {/* dropdown */}
          <div class="relative inline-block text-left">
            <div>
              <button onClick={()=>setDropdownStatus(!dropdownStatus)} type="button" class=" items-center inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-4 py-2 text-sm font-semibold text-gray-900 shadow-xs  hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
                <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="no-image" style={{ width: "40px", height: "40px" }} />

              </button>
            </div>
           {dropdownStatus && <div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
              <div class="py-1" role="none">

                <Link to={'/profile'}><p className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-0"><FontAwesomeIcon icon={faAddressCard} className='me-2' /> Profile</p></Link>
                <button className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="menu-item-1"><FontAwesomeIcon icon={faPowerOff} className='me-2'/> Logout</button>
              </div>
            </div>
}

          </div>

        </div>
        <ul className={status ? `md:flex` : `md:flex hidden justify-center items-center`}>
          <Link to={'/'}><li className='md:mx-10 mx-1 mt-3 md:mt-0 text-white font-semibold '>Home</li></Link>
          <Link to={'/allbooks'}><li className='md:mx-10 mx-1  text-white font-semibold '>Books</li></Link>
          <Link to={'/careers'}> <li className='md:mx-10 mx-1  text-white font-semibold '>Careers</li></Link>
          <Link to={'/contacts'}><li className='md:mx-10 mx-1  text-white font-semibold '>Contact</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header
