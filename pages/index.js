import Head from 'next/head'

import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import { MdAddCall, MdEmail } from 'react-icons/md'
import { AiOutlineMail } from 'react-icons/ai'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>

      <div className='  text-blue-600 text-xl  bg-white text-center flex    p-2 '>
        <div className=' gap-6  flex'>
          <div className=' items-center justify-center gap-2  flex'>
            <MdAddCall></MdAddCall>
            <h1>+977-9802755603</h1> </div>
          <div className='flex  '>
            <div className=' mt-1 '><MdEmail></MdEmail></div>
            <h1>contact@codebluefox.com</h1>
          </div>

        </div>


        <div className=' right-0 absolute'>
          <button className=' text-white bg-blue-600 rounded-xl'>Support Login</button>

        </div>
      </div>
      <span className=' h-0.5  bg-blue-600 w-full flex '></span>




      {/* NAVIGATION BAR */}
      <div className=' flex flex-row h-auto  bg-white p-3  text-blue-600  text-2xl justify-end gap-10 '>

        <a href='#' >Home</a>
        <a href='#'> Service</a>
        <a href='#'>About Us</a>
        <a href='#'> Clients</a>
        <a href='#'>Careers</a>
        <a href='#'> Contact</a>
      </div>



      {/* HOMEPAGE */}
      <div className=' bg-blue-100'>
        <div className='flex flex-row   justify-between gap-20   '>
          <div className='   flex-col flex flex-1  ' >
            <div className='  mt-10 '> <h1 className='  ml-8 text-blue-600  text-6xl'> Helping Brands to</h1>
              <h1 className='  text-blue-600 text-6xl  ml-16 mt-4 '> Reach Full Potential </h1></div>
            <div className=' text-2xl  ml-8 text-center mt-6'><h1 className=' '>Over 5 years working in IT services developing software applications
              mobile apps and Designing for clients. As a company, we strive to
              make your life as easy as possible with our products. Our goal is to
              help our customers by planning, developing, and delivering the best
              possible solutions</h1></div>
          </div>

          <div className=' right-1 flex-1'>
            <img src='/pro.png' width={550}></img>
          </div>
        </div>


        {/* SERVICES  */}
        <div className=' flex flex-col items-center mt-3 '>
          <h1 className=' text-blue-600 text-6xl'> Services</h1>
          <h1 className=' text-2xl'> What Solution We Provide to Our Valued Customers</h1>
        </div>

        {/*  block here */}

        <div className='  flex justify-between  mx-28 gap-20 mt-4 '>

          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/graphics.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Graphic Desgin</h1>
              <h1 className=' text-xs text-left mx-2 mb-2' > Providing you with attractive and creative design
                solutions that satisfy your needs today and open
                up opportunities tomorrow, we help you branding
                and creative your value for frequent running your
                business.</h1>
            </div>

          </div>


          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/software.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Software Development</h1>
              <h1 className=' text-xs text-left mx-2' > Providing you with powerful and adaptable digital
                solutions that satisfy your needs today and open
                up opportunities tomorrow, we help transforming
                you and frequently running your business.</h1>
            </div>

          </div>
          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/web.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Web Development</h1>
              <h1 className=' text-xs text-left mx-2' >We build dynamic experiences and a wide variety of
                custom web development solutions. Over 5 years of
                experience makes us an excellent and feasible Web
                Development Company.</h1>
            </div>

          </div>
        </div>

        <div className='  flex justify-between  mx-28 gap-20 mt-8 '>

          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/mobile.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Mobile App Development</h1>
              <h1 className=' text-xs text-left mx-2 mb-2' >Increased usage of the mobile app has created a
                demand for a customer-centered mobile apps that
                elevates your business to profit and usability. We
                build an interactive and adaptable mobile apps.</h1>
            </div>

          </div>


          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/api.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>API Integration</h1>
              <h1 className=' text-xs text-left mx-2' > Our system integration services will ensure that your
                web app or website is flawlessly integrated with the
                standard or custom APIs.</h1>
            </div>

          </div>
          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/networking.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Networking</h1>
              <h1 className=' text-xs text-left mx-2' >If you want to give a stability service you need to
                have own server and data for 24/7 services and
                we ensure to provide server and networking.</h1>
            </div>

          </div>
        </div>
        {/*  SERVICES END HERE */}



        {/* why choose */}
        <h1 className=' mt-5 text-5xl text-blue-600 text-center'>Why choose us</h1>
        <h1 className=' text-xl text-center'>We Create Result-Oriented Dynamic Applications</h1>


        <div className=' flex  flex-row     mt-4   '>

          <div className='  flex-1'>
            <img src='/choose.png'></img>
          </div>

          {/*  why choose us */}
          <div className=' flex flex-1 flex-col '>
            <div className='flex gap-4 flex-1 '>
              <div > <img src='/build.png' width={50}></img></div>
              <div> <h1 className=' text-2xl text-blue-600'>Build Integrity & Transparency</h1>
                <h1> We beleive in building trust and 100% transparency with our clients.</h1>
              </div>
            </div>
            <div className=' flex gap-4 flex-1 '>
              <div ><img src='/deliver.png' width={50}></img></div>
              <div> <h1 className=' text-2xl text-blue-600'>Deliver Perfect Solution</h1>
                <h1> We focus on building the right product that resolve users,challenges.</h1>
              </div>
            </div>
            <div className=' flex gap-4 flex-1 '>
              <div><img src='/practice.png' width={50}></img>
              </div>
              <div> <h1 className=' text-2xl text-blue-600'>Practice Agility</h1>
                <h1> We meet our client's ever-changing needs with our agile approach </h1></div>
            </div>
            <div className=' flex gap-4 flex-1'>
              <div><img src='/build.png' width={50}></img></div>
              <div><h1 className=' text-2xl text-blue-600'>Drive Innovation</h1>
                <h1> We are focused on delivering  client-centric innovation and value to your bussiness.</h1>
              </div>
            </div>
          </div>
        </div>


        {/* why choose block  */}
        <div className='  flex justify-between  mx-10 gap-10 mt-4 '>

          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/high.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>High-quality Code</h1>
              <h1 className=' text-xs text-left mx-2 mb-2' >Code that is clear, simple, well-tested, bug-free,
                refactored, documented, and performant.
              </h1>
            </div>

          </div>


          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/agile.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Agile Approach</h1>
              <h1 className=' text-xs text-left mx-2' > Helps us to deliver value to our customers
                faster and with fewer headaches.
              </h1>
            </div>

          </div>
          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/fullstack.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Full-stack Teams</h1>
              <h1 className=' text-xs text-left mx-2' >Our team members collectively have all the
                skills needed to solve the problems.</h1>
            </div>

          </div>
          <div className=' flex flex-1 flex-col  bg-white  rounded-xl'>

            <div className='flex-1 flex  justify-center'><img src='/data.png' width={140}></img></div>
            <div className=' text-center flex-1'><h1 className='  text-2xl text-blue-600 '>Data Reliability & Security</h1>
              <h1 className=' text-xs text-left mx-2' >Identify the unreliable data, fix the issue with reliable
                data, and confirm that the system is 100% safe.</h1>
            </div>

          </div>
        </div>


        {/* we are trusted by */}
        <h1 className=' mt-10 text-5xl text-blue-600 text-center'>We are trusted by</h1>
        <h1 className='  text-xl text-center'>Our Clients worked for Bussiness</h1>

        {/* oval div */}
        <div className=' flex right-2 mt-4   justify-center gap-8  '>
          <div className='  border-collapse coll  '>
            <img className='   h-24 w-24  rounded-full object-cover inline-block items-center justify-center       ' src='/d.jpg'></img>
          </div>
          <div className='  '>
            <img className='  h-24 w-24  rounded-full object-cover inline-block items-center justify-center      ' src='/e.jpg'></img>
          </div>
          <div className='  '>
            <img className='  h-24 w-24   rounded-full object-cover inline-block items-center justify-center      ' src='/f.jpg'></img>
          </div>
          <div className=' '>
            <img className='  h-24 w-24   rounded-full object-cover inline-block items-center justify-center      ' src='/g.jpg'></img>
          </div>
          <div className=' '>
            <img className='  h-24 w-24 object-cover inline-block   rounded-full items-center justify-center   ' src='/h.jpg'></img>
          </div>
        </div>

        {/* Testimonials */}
        <h1 className=' mt-10 text-5xl text-blue-600 text-center'>Testimonials</h1>
        <h1 className='  text-xl text-center'>What our customers say about us</h1>

        <div className='   gap-10 flex  mt-14'>

          <div className=' transform transition-all  hover:scale-125 flex-1 bg-white  rounded-2xl  text-center '>
            <img className=' -translate-y-8   h-24 w-24 object-cover rounded-full inline-block border-2 border-blue-300 bg-opacity-10 items-center justify-center' src='/c.jpg'></img>
            <h1 className='text-2xl text-blue-600 font-bold '>Sanjay Chaudhary</h1>
            <h1 className=' tracking-wider semi-bold'>Managing Director</h1>
            <h1 className=' text-xs'>My Tripary Pvt. Ltd.</h1>
            <h1 className=' text-left mx-3'>Code that is clear, simple, well-tested, bug-free,
              refactored, documented, and performant. Code
              that is clear, simple, well-tested, bug-free,</h1>
          </div>

          <div className=' transform transition-all  hover:scale-125 flex-1 bg-white   text-center rounded-2xl   '>
            <img className=' -translate-y-8  h-24 w-24 object-cover rounded-full inline-block border-2 border-blue-300 bg-opacity-10 items-center justify-center' src='/a.jpg'></img>
            <h1 className=' text-2xl text-blue-600 font-bold '>Sanjay Chaudhary</h1>
            <h1 className=' tracking-wider semi-bold'>Managing Director</h1>
            <h1 className=' text-xs'>My Tripary Pvt. Ltd.</h1>
            <h1 className=' text-left mx-3'>Code that is clear, simple, well-tested, bug-free,
              refactored, documented, and performant. Code
              that is clear, simple, well-tested, bug-free,</h1>
          </div>

          <div className=' transform transition-all  hover:scale-125 flex-1 bg-white   text-center  rounded-2xl '>
            <img className=' -translate-y-8  h-24 w-24 object-cover rounded-full inline-block border-2 border-blue-300 bg-opacity-10 items-center justify-center' src='/b.jpg'></img>
            <h1 className=' text-2xl text-blue-600 font-bold '>Sanjay Chaudhary</h1>
            <h1 className=' tracking-wider semi-bold'>Managing Director</h1>
            <h1 className=' text-xs'>My Tripary Pvt. Ltd.</h1>
            <h1 className=' text-left mx-3'>Code that is clear, simple, well-tested, bug-free,
              refactored, documented, and performant. Code
              that is clear, simple, well-tested, bug-free,</h1>
          </div>

          <div className=' transform transition-all  hover:scale-125 flex-1 bg-white   text-center  rounded-2xl '>
            <img className=' -translate-y-8  h-24 w-24 object-cover rounded-full inline-block border-2 border-blue-300 bg-opacity-10 items-center justify-center' src='/b.jpg'></img>
            <h1 className=' text-2xl text-blue-600 font-bold '>Sanjay Chaudhary</h1>
            <h1 className=' tracking-wider semi-bold'>Managing Director</h1>
            <h1 className=' text-xs'>My Tripary Pvt. Ltd.</h1>
            <h1 className=' text-left mx-3'>Code that is clear, simple, well-tested, bug-free,
              refactored, documented, and performant. Code
              that is clear, simple, well-tested, bug-free,</h1>
          </div>

        </div>

        {/*  slider */}
        <div className=' gap-4 m-14 object-cover justify-center flex'>
          <div className=' bg-white h-4 w-4 rounded-full border-2 border-blue-600'></div>
          <div className='  bg-blue-600 h-4 w-4 rounded-full border-2 border-blue-600'></div>
          <div className=' bg-white h-4 w-4 rounded-full border-2 border-blue-600'></div>
        </div>

        {/* Our Tools & Technology */}

        <h1 className=' mt-10 text-5xl text-blue-600 text-center'>Our Tools & Technology</h1>
        <h1 className='  text-xl text-center '>We design & develop every website, application, or mobile app using the <br />
          latest technologies with fluid UI/UX and use an agile process.</h1>

        <div className='   flex  justify-center object-cover '>
          <div>
            <img className=' flex-1 border-4   m-32 border-blue-600 rounded-full ' src='/tool.png' width={400}></img>
          </div>
        </div>
        {/* circular oval here */}


        <div className='  flex bg-blue-600'>
          <div className=' mt-3 ml-32  flex-1  '>
            <h1 className=' text-white text-5xl'>
              Get Free Consultancy<br />
              From Our Experts.</h1>
            <h1 className=' mt-3 text-white'>Discuss how you can benefit from our Web Design, Graphic Design,
              Custom Application, Mobile App Development & other Software solutions.
            </h1>
          </div>

          <div className=' flex-1 flex justify-center items-center'>

            <img src='/girl.png' width={300}></img>

            <button className='  border-2 mb-12 ml-4 bg-white text-center text-2xl text-blue-600 rounded-lg'>
              Request Quote</button>
          </div>
        </div>

        <div className=' gap-4 flex  mx-10 m-6 '>
          <div className=' grow   flex flex-col'>
            <h1 className=' text-4xl text-blue-600'>Blue Fox</h1>
            <h2>think digital...</h2>
            <h1>Blue Fox is a leading Mobile App, Graphic, Website <br />
              & Software development Company in Itahari. Working <br />
              on the latest technology to convert your dream into reality.</h1>
          </div>
          {/* contact */}
          <div className=' mr-6  flex-1 flex-col'>
            <h1 className='  text-blue-600'>Quick Links</h1>
            <h1 className='  text-blue-600'>Our Products</h1>
            <h1 className='  text-blue-600'>Contacts</h1>
            <h1 className='  text-blue-600'>About Us</h1>
            <h1 className='  text-blue-600'>Partnerships</h1>
            <h1 className='  text-blue-600'>Blog</h1>
            <h1 className='  text-blue-600'>Careers Us</h1>
          </div>


          <div className=' text-left grow-1 flex-1'>
            <h1 className='  text-blue-600'>Contact Info</h1>
            <h1 className=' text-left'>Itahari-4, Paruhang Chowk,
              Sunsari, Nepal (Tower Building)<br />
              +977-9802755603 / 9742290123<br />

              contact@codebluefox.com

              Opening Hours: 10:00 AM to 6:00 PM<br />
              (Sunday to Friday)
            </h1>

          </div>
          <div className=' text-left flex-1 ml-10 flex-col'>
            <h1 className='  text-blue-600'>Services</h1>
            <h1>Graphic Design</h1>
            <h1>API Integration</h1>
            <h1>Web Development</h1>
            <h1>Software Development</h1>
            <h1>Mobile App Development</h1>

          </div>
        </div>


      </div>
    </>
  )
}
