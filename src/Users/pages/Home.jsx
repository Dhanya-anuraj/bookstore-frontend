import React from 'react'
import Header from '../Components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Header/>
     
     <header>
       <div className='main flex justify-center items-center md:w-full '>
        <div  className='md:grid grid-cols-3  md:w-full'>
          <div></div>
          <div className='text-white flex justify-center flex-col items-center'>
            <h1 className='md:text-5xl text-4xl'>Wonderful Gifts</h1>
            <p className='mt-3'>Give your family and friends a book</p>
            <div className='w-full flex  items-center mt-5'>
              <input type="text" placeholder='Search Books' className='bg-white placeholder-gray-600 px-3 py-2 rounded-3xl mt-3 w-full '/>
              <FontAwesomeIcon icon={faMagnifyingGlass} className='text-blue-700 mt-3 text-xl' style={{marginLeft:"-40px"}} />
            </div>
          </div>
          <div></div>
        </div>

       </div>

     </header>

     {/* new arrivals */}

    <section className='flex justify-center flex-col items-center md:Px-40 md:p-10 p-5'>
       <h1 className='font-bold'>NEW ARRIVALS</h1>
       <p className='font-medium'>Exlplore Our Latest Collection</p>

       <div className="md:grid grid-cols-4 w-full md:px-30">
         <div className='p-4 shadow-md mt-10'>
           <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{width:"100%", height:"300px"}} />
           <div className='flex justify-center items-center flex-col mt-3'>
             <p className='text-blue-600'>Dan Brown</p>
             <h3>The Da Vinci Code</h3>
             <p>$18</p>
           </div>
         </div>
         <div className='p-4 shadow-md mt-10'>
           <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{width:"100%", height:"300px"}} />
           <div className='flex justify-center items-center flex-col mt-3'>
             <p className='text-blue-600'>Dan Brown</p>
             <h3>The Da Vinci Code</h3>
             <p>$18</p>
           </div>
         </div>
         <div className='p-4 shadow-md mt-10'>
           <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{width:"100%", height:"300px"}} />
           <div className='flex justify-center items-center flex-col mt-3'>
             <p className='text-blue-600'>Dan Brown</p>
             <h3>The Da Vinci Code</h3>
             <p>$18</p>
           </div>
         </div>
         <div className='p-4 shadow-md mt-10'>
           <img src="https://t1.bookpage.com/wp-content/uploads/2023/12/13145351/myseasonofscandal.jpg" alt="no-image" style={{width:"100%", height:"300px"}} />
           <div className='flex justify-center items-center flex-col mt-3'>
             <p className='text-blue-600'>Dan Brown</p>
             <h3>The Da Vinci Code</h3>
             <p>$18</p>
           </div>
         </div>
       </div>
       <div className='flex justify-center items-center'>
        <Link to={'/allbooks'}><button className='bg-blue-900 px-4 py-2 mt-5 text-white hover:bg-white hover:text-blue-900 hover:border hover:border-blue-900' >Explore Now</button></Link>
       </div>
    

    </section>

    {/* author */}
    <section className='flex justify-center flex-col items-center md:Px-40 md:p-10 p-5'>
      <div className="md:grid grid-cols-2 md:px-30 px-5">
        <div>
          <div className='flex justify-center items-center flex-col'>
            <h1 className='font-bold'>FEATURED AUTHORS</h1>
            <p className='font-medium'>Captivates with every word</p>
          </div>
          <p className='text-justify mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ipsum. Ab repellat autem amet, sapiente quo nihil, similique velit culpa iste enim voluptates, laborum sint veritatis reprehenderit omnis ex. Velit eligendi amet magnam iste itaque aliquid, repellendus repellat voluptas? Quis, fuga. Pariatur nesciunt maiores, in, magni ipsa iure delectus modi necessitatibus harum consequuntur qui aliquam ab animi odit sed quod accusantium nemo. Dicta facilis nostrum incidunt dolor fugiat officia, .</p>
          <p className='text-justify mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cum fugit deleniti ratione, eveniet odio quibusdam repudiandae exercitationem beatae quod similique, esse illo asperiores necessitatibus voluptatibus libero atque officia sint iste ipsum? Quam praesentium cum porro similique animi blanditiis quas sapiente, cumque eligendi odit possimus asperiores non aliquam ipsum natus soluta ipsa debitis in minima! Enim perferendis similique quia fugit voluptas non exercitationem provident cupiditate in reiciendis ab veritatis nam sequi dolore</p>
        </div>
        <div className='md:flex justify-center items-center md:px-15 pt-8'>
          <img src="https://thumbs.dreamstime.com/b/portrait-male-african-american-professional-possibly-business-executive-corporate-ceo-finance-attorney-lawyer-sales-stylish-155546880.jpg" alt="no-image" style={{width:"100%", height:"400px"}} />
        </div>

      </div>

    </section>
    
    {/* testimonial */}

    <section className='flex justify-center flex-col items-center md:Px-40 md:p-10 p-5'>
      <h1 className='font-bold'>TESTIMONIALS</h1>
      <p className='font-medium'>See What Others Are Saying</p>
      
      <img src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="no-image" style={{width:"150px", height:"150px"}} />
      <p className='text-justify md:px-40  px-5 mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi numquam dolorum iure ad alias aliquid debitis ex? At, voluptatum molestiae? Incidunt accusamus voluptatibus harum molestias dolorem enim earum qui animi? Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nemo fugiat ut laudantium, architecto, autem sit ipsum nam molestiae ex praesentium repellendus ad, ea odit deserunt ratione dicta. Culpa, facere. </p>
    </section>
    <Footer/>
    </>
  )
}

export default Home
