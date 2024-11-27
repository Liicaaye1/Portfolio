import Header from "./Header"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import exp from "../assets/exp.png"
import note from "../assets/note.png"
import customer from "../assets/customer.png"
import { RiTailwindCssFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { RiJavascriptLine } from "react-icons/ri";
import video from "../assets/video.mp4"
import world from "../assets/world.mp4"
import pharmacy from "../assets/pharmacy.mp4"
import INTELBREW from "../assets/INTELBREW.mp4"
import Ecommerce  from "../assets/Ecommerce.mp4"
import Note   from "../assets/Note.mp4"
import Footer from "./Footer"
import CV from "../assets/CV.pdf"



function LandingPage(){
    return <div className="">
        <Header />

        {/* home section */}

        <div id="home" className=" border-t-2 sm:flex justify-between  items-center sm:px-[60px] py-[80px]">
        <div className="">
                <img className="w-[310px] h-[310px] sm:hidden object-cover ml-10 sm:ml-0 rounded-[20px] transition-transform duration-300 ease-out hover:scale-110" src={image2} alt="mohamed_abdillahi_profile" />
            </div>
            <div className=" px-[20px] sm:px-0 " >

                <h1 className="text-[#383535] font-bold mb-4 mt-10 sm:mt-0 text-4xl sm:text-5xl">Hi, its me</h1>
                <h1 className="font-semibold text-[#383535] text-2xl sm:text-5xl mt-4">my name is <span className="text-[#F86F03]">Mohamed Abdillahi</span></h1>
                <h1 className="font-semibold text-[#383535] text-2xl sm:text-5xl"> I am a <span className="text-[#F86F03]">fullstack developer</span></h1>
                <p className="mt-4 text-[#383535] text-xl">I love building web applications using modern technologies like React, Node.js, and mongodb.</p>
                <div className=" text-3xl flex gap-2 ml-5 sm:ml-0 mt-4">
                   
                        <a href="https://www.instagram.com/wll___liicaye21/" target="_blank" className="mx-2"><i class="fab fa-instagram hover:text-pink-500 text-3xl"></i></a>
                        <a href="https://www.facebook.com/cabdulaahicagafey" target="_blank" className="mx-2"><i class="fab fa-facebook text-3xl hover:text-blue-500"></i></a>
                        <a href="https://x.com/mabdillahi275" target="_blank" className="mx-2"><i class="fab fa-twitter hover:text-black text-3xl"></i></a>
                        <a href="https://wa.me/+252615991582" target="_blank"><i class="fa-brands fa-whatsapp hover:text-green-500 text-3xl"></i></a>
               </div>
                
                <div className="flex gap-2">
                <button className="bg-[#F86F03] rounded-[20px] sm:px-[30px] px-[20px] py-[10px] hover:bg-[#383535] text-xl sm:text-3xl sm:mt-5 mt-6  hover:text-white transition duration-300">  <i class="fa-brands fa-github text-3xl"></i> <a href="https://github.com/Liicaaye1">View my Github</a></button>
                <button className="bg-[#F86F03] rounded-[20px] sm:px-[30px] px-[40px] py-[15px] hover:bg-[#383535] text-2xl sm:text-3xl sm:mt-5 mt-6 block sm:hidden  hover:text-white transition duration-300">
                <a href={CV} download="CV.pdf">  Download CV </a>
            </button>

                
                </div>

            </div>
            <div>
                <img className="w-[310px] hidden sm:block h-[310px] object-cover rounded-full transition-transform duration-300 ease-out hover:scale-110" src={image2} alt="mohamed_abdillahi_profile" />
            </div>
          
  
        </div>
        {/* About section */}
        <div id="about" class="sm:flex items-center justify-center  p-8 bg-gray-100 animate-fade-in">
                        {/* <!-- Sawirka --> */}
                        <img className="w-[300px]  h-[300px] rounded-[20%] shadow-lg mr-8 transition-transform duration-500 ease-in-out hover:scale-110 hover:rotate-6" src={image3} alt="" />

                            {/* <!-- Qoraalka "About Me" --> */}
                         <div class="max-w-lg text-left transition-opacity duration-700 ease-in-out hover:opacity-100">
                                <h2 className="text-2xl mt-7 font-bold text-gray-800 transition-colors duration-500 ease-in-out hover:text-[#F86F03]">
                                    About Me
                                </h2>  

                                <p class="text-lg text-gray-600 leading-relaxed  ">
                                    I am a <span className="font-bold text-gray-800">Full-Stack Developer</span> with a strong foundation in <span className="font-bold text-gray-800">Computer Science</span>. I specialize in building dynamic web applications using <span className="font-bold text-gray-800">React.js</span> for the frontend and <span className="font-bold text-gray-800">Node.js</span> with <span className="font-bold text-gray-800">Express</span> for the backend. My experience extends to working with <span className="font-bold text-gray-800">MongoDB</span>, allowing me to create efficient and scalable solutions. I am passionate about continuously learning and overcoming challenges, always striving to deliver intuitive and user-friendly applications.

                                </p>
                                {/* Experience */}
                                <h3 className="text-2xl font-bold text-gray-800 mt-8 transition-colors duration-500 ease-in-out hover:text-[#F86F03]">
                                    Experience
                                </h3>
                                <div className="mt-3 sm:flex gap-5">
                                    
                                    <div className="flex  gap-2">
                                        <img className="w-[42px] h-[42px] rounded-[50%]" src={exp} alt="" />
                                        <div className="">
                                            <h2 className="text-[#F86F03]">3 years +</h2>
                                            <h3 className="font-semibold">Experience</h3>
                                        </div>
                                    
                                    </div>
                                     <div className="flex mt-2 mb-2 gap-3">
                                        <img className="w-[42px] h-[42px]" src={note} alt="" />
                                        <div className="">
                                            <h2 className="text-[#F86F03]">100+</h2>
                                            <h3 className="font-semibold">project</h3>
                                            </div>

    
                                    </div>
                                    <div className="flex gap-3">
                                        <img className="w-[42px] h-[42px] " src={customer} alt="" />
                                        <div className="">
                                            <h2 className="text-[#F86F03]">500+</h2>
                                            <h3 className="font-semibold">customers</h3>
                                            </div>
    
                                    </div>
     
                                </div>
                                 
                              

                         </div>
                </div>
             
             {/* Skills section */}
             <div className="mt-10">
                        <div>
                        <h1 className="text-4xl font-bold text-center mb-4">My Skills</h1>
                        <p className="text-xl text-center ">The Skills, tools, and technologies That I'm Good At:</p>
                    </div>

                    <div className="flex gap-5 justify-center mt-5">
                    <FaHtml5 className="text-5xl text-red-400" />
                    <RiTailwindCssFill className="text-5xl text-sky-400" />
                    <FaReact className="text-5xl text-blue-400" />
                    <RiJavascriptLine className="text-5xl text-yellow-400" />
                    <FaNode className="text-5xl text-green-400" />
                    <SiExpress className="text-5xl text-yellow-400" />
                    <SiMongodb className="text-5xl text-green-400" />

                    </div>
             </div>
             {/* portfollio section */}
             <div id="portfolio" className="mx-[60px]">
                    <h1 className="text-4xl font-bold text-center mb-4 mt-10 ">Portfolio</h1>
                <div className=" grid sm:grid-cols-[350px_350px_350px]    mt-10 sm:ml-3 sm:gap-10">
                    <div className="  w-[370px] ml-[-50px] sm:ml-0  h-[330px]">
                        <video controls loop muted>
                            <source src={video} type="video/mp4" />
                        </video>
                        <h2 className="text-2xl font-semibold">Hospital Appiontmnet project</h2>
                        <p  className="text-gray-500">This project is about creating a hospital appointment system using React and node js</p>

                    
                    </div>
                    <div className=" w-[370px] ml-[-50px] sm:ml-0  h-[330px]">
                        <video controls loop muted>
                            <source src={world} type="video/mp4" />
                        </video>
                        <h2 className="text-2xl font-semibold">World Online Courses project</h2>
                        <p  className="text-gray-500">This project is about creating a world online courses platform using React and node js</p>
                    
                    </div>
                    <div className=" w-[370px] ml-[-50px] sm:ml-0  h-[330px]">
                        <video controls loop muted>
                            <source src={INTELBREW} type="video/mp4" />
                        </video>
                        <h2 className="text-2xl font-semibold">Coffee Shop</h2>
                        <p  className="text-gray-500">This project is about creating a coffee shop using HTML and tailwind CSS</p>
                    

                    </div>
                    <div className=" w-[370px] ml-[-50px] sm:ml-0 h-[330px]">
                        <video controls loop muted>
                            <source src={pharmacy} type="video/mp4" />
                        </video>
                        
                        <h2 className="text-2xl font-semibold">Medicine center</h2>
                        <p  className="text-gray-500">This project is about creating a medicine center using React and node js</p>
                    </div>
                    <div className=" w-[370px] ml-[-50px] sm:ml-0  h-[330px]">
                        <video controls loop muted>
                            <source src={Ecommerce } type="video/mp4" />
                        </video>
                        
                        <h2 className="text-2xl font-semibold">E-commerce</h2>
                        <p className="text-gray-500">An app for taking notes built with React, Redux, and Node.js.</p>

                    </div>
                    <div className=" w-[370px] ml-[-50px] sm:ml-0  h-[330px]">
                        <video controls loop muted>
                            <source src={Note} type="video/mp4" />
                        </video>
                        
                        <h2 className="text-2xl font-semibold">Note app</h2>
                        <p  className="text-gray-500">An app for taking notes built with React, Redux, and Node.js.</p>

                    </div>

                    

                </div>
             </div>

             {/* contact section */}
             <div id="contact">
                <h1 className="text-5xl text-center mt-3 font-bold" >Contact Me</h1>
                <p className="text-center mt-3 px-5 sm:px-0 ">For more information or if you have a project for me to contribute, please fill this form</p>
                <div className=" mt-5">
                        <div className="sm:w-[400px] w-[350px] px-[20px] sm:ml-[35%] ml-6  pt-[30px] h-[400px] bg-[skyblue] rounded-[20px] ">
                            <input  className="w-[310px] outline-none px-[10px] h-[40px] rounded-[10px] bg-transparent border-2 border-white placeholder:text-white text-white" type="text" placeholder=" Enter Fullname " />
                            <input className="w-[150px] outline-none px-[10px] mt-[15px] h-[40px] rounded-[10px] bg-transparent border-2 border-white placeholder:text-white text-white" type="email" placeholder=" Enter email " />
                            <input  className="w-[150px] outline-none px-[10px] ml-[10px] mt-[15px] h-[40px] rounded-[10px] bg-transparent border-2 border-white placeholder:text-white text-white" type="tell" placeholder=" Enter number " />
                            <textarea  className="w-[310px]  mt-[15px] outline-none px-[10px] h-[180px] rounded-[10px] bg-transparent border-2 border-white placeholder:text-white text-white" placeholder=" Description "></textarea>
                            <button  className="bg-white w-[310px] hover:bg-transparent hover:border-2 hover:border-white  h-[40px] sm:h-[35px] mt-[15px] rounded-[10px] text-xl font-semibold"> Send </button>
                        </div>
                    </div>
             </div>

          
             {/* Back to top button */}
             <Footer/>
             

    

    </div>
}

export default LandingPage;