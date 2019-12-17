import React from "react"
import Logo from "./../images/logo.svg"
import Chair1 from "./../images/chair-1.svg"
import Chair2 from "./../images/chair-2.svg"
import Chair3 from "./../images/chair-3.svg"
import Gray from "./../images/gray.svg"
import GrayBox from "./../images/gray-box.svg"
import ProfilePicture from "./../images/profile-picture.jpeg"
import SEO from "../components/seo"
import { motion } from "framer-motion"
import "./index.css"

const IndexPage = () => {
  return (
    <>
      <SEO title="Home"/>
      <div className="px-40 mx-auto my-0">
        <motion.div
          initial={{
            opacity: 0,
            y: -200,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{ duration: 1 }}
        >
          <header className="flex justify-between items-center h-32">
            <a href="#">
              <img src={Logo} alt="Logo Furniture" className="h-5 w-auto"/>
            </a>
            <nav>
              <ul className="flex flex-row">
                <li className="text-gray-700 hover:text-red-400 pr-16">
                  <a href="#">New In</a>
                </li>
                <li className="text-red-400 hover:text-red-400 pr-16">
                  <a href="#">Furniture</a>
                </li>
                <li className="text-gray-700 hover:text-red-400 pr-16">
                  <a href="#">Rest</a>
                </li>
                <li className="text-gray-700 hover:text-red-400 pr-16">
                  <a href="#">Decoration</a>
                </li>
                <li className="text-gray-700 hover:text-red-400 pr-16">
                  <a href="#">Outdoor</a>
                </li>
                <li className="text-gray-700 hover:text-red-400 pr-16">
                  <a href="#">Magazine</a>
                </li>
                <li className="text-gray-700 hover:text-red-400">
                  <a href="#">Outlet</a>
                </li>
              </ul>
            </nav>
            <div className="flex">
              <a href="#" className="text-gray-700 hover:text-red-400 mr-20">
                <svg width="18" height="20" xmlns="http://www.w3.org/2000/svg"
                     className="stroke-current">
                  <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd"
                     strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 18v-2a4 4 0 00-4-4H4a4 4 0 00-4 4v2"/>
                    <circle cx="8" cy="4" r="4"/>
                  </g>
                </svg>
              </a>

              <a href="#" className="text-gray-700 hover:text-red-400 mr-20">
                <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg"
                     className="stroke-current">
                  <g transform="translate(1 1)" strokeWidth="2" fill="none" fillRule="evenodd"
                     strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="8" cy="8" r="8"/>
                    <path d="M18 18l-4.35-4.35"/>
                  </g>
                </svg>
              </a>

              <a href="#" className="text-gray-700 hover:text-red-400">
                <svg width="20" height="22" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                  <g strokeWidth="2" fill="none" fillRule="evenodd" strokeLinecap="round"
                     strokeLinejoin="round">
                    <path d="M4 1L1 5v14a2 2 0 002 2h14a2 2 0 002-2V5l-3-4H4zM1 5h18M14 9a4 4 0 11-8 0"/>
                  </g>
                </svg>
              </a>
            </div>
          </header>
        </motion.div>
      </div>

      <main>
        <div className="flex">
          <div className="flex-1">
            <img src={Chair1} alt="Chair 1" className="w-auto h-auto"/>
          </div>

          <div className="flex flex-1 items-center">
            <div>
              <small className="text-red-400 font-bold text-2xl">153€</small>
              <h1 className="text-gray-800 font-semibold text-5xl pt-2">Bjorg chair.</h1>
              <h2 className="text-gray-800 font-semibold text-5xl">white plastic</h2>
              <p className="text-gray-600 pt-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
                delectus et iste reprehenderit voluptas voluptatibus.</p>

              <div className="flex pt-16">
                <span className="w-4 h-4 bg-indigo-200 rounded-full mr-3"></span>
                <span className="w-4 h-4 bg-white rounded-full mr-3 border-4 border-black"></span>
                <span className="w-4 h-4 bg-green-200 rounded-full mr-3"></span>
                <span className="w-4 h-4 bg-red-300 rounded-full"></span>
              </div>

              <button className="bg-red-400 hover:bg-red-500 p-8 text-white flex justify-between items-center mt-16">
                <span className="mr-24">ADD TO CART</span>
                <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" className="stroke-current">
                  <g fill="none" fillRule="evenodd">
                    <path fillRule="nonzero" d="M-321-40H55v96h-376z"/>
                    <g stroke="#FFF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                      <path d="M1 8h14M8 1l7 7-7 7"/>
                    </g>
                  </g>
                </svg>
              </button>
            </div>
            <div className="flex flex-col">
              <img src={Chair2} alt="Chair 2"/>
              <img src={Chair3} alt="Chair 3" className="pt-16"/>
            </div>
          </div>
        </div>

        <div className="px-40 mx-auto my-0 pt-20">
          <nav>
            <ul className="flex">
              <li><a href="#" className="text-sm font-semibold text-red-300 hover:text-red-400 pr-12">DESCRIPTION</a>
              </li>
              <li><a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-400 pr-12">INFO</a></li>
              <li><a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-400 pr-12">COLLECTION</a>
              </li>
              <li><a href="#" className="text-sm font-semibold text-gray-700 hover:text-red-400">REVIEW</a></li>
            </ul>
          </nav>

          <div className="flex items-center">
            <div className="flex-1 pt-24">
              <header>
                <h3 className="text-gray-800 font-semibold text-2xl">Description</h3>
                <h4 className="text-gray-800 font-semibold text-5xl pt-1">Bjorg chair.</h4>
              </header>
              <hr className="border-red-300 w-64 border-2 mt-16"/>
              <p className="text-gray-600 leading-loose pt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam architecto atque consequatur cumque
                eius qui quibusdam quis reprehenderit rerum vel.</p>
              <p className="text-gray-600 leading-loose pt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ipsum praesentium, rem. Asperiores doloremque
                excepturi suscipit.</p>
              <p className="text-gray-600 leading-loose pt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda dolorum eius illo ipsa laborum
                maiores molestiae numquam optio possimus quam qui quia, ratione reiciendis reprehenderit sed veritatis
                vitae voluptate, voluptatibus!</p>
            </div>
            <div className="flex-1 ml-24">
              <img src={Gray} alt="Gray photo" className="w-full h-auto"/>
            </div>
            <div className="flex-1 ml-24">
              <h5 className="leading-loose text-gray-800 text-4xl">5 ideas for choosing the perfect</h5>
              <hr className="border-red-300 w-32 border-2 mt-16"/>
              <p className="text-gray-600 leading-loose pt-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Alias aperiam aut beatae, culpa deleniti
                distinctio ea enim eos et exercitationem id incidunt itaque iusto labore laudantium nobis pariatur
                quaerat similique velit voluptatibus! Accusantium adipisci, aliquam animi aspernatur, beatae blanditiis
                distinctio eius exercitationem magnam mollitia nulla odit qui sapiente sit tenetur?</p>

              <div className="flex items-center pt-12">
                <img src={ProfilePicture} alt="Profile Picture" className="w-10 h-10 rounded-full mr-2"/>
                <p className="text-gray-600 text-xs">Bernadette Stuff Manager</p>
              </div>
            </div>
          </div>
        </div>


        <div className="px-40 mx-auto my-0 pt-20">
          <header className="flex-1 pt-24">
            <h3 className="text-gray-800 font-semibold text-2xl">Our Suggestions</h3>
            <h4 className="text-gray-800 font-semibold text-5xl pt-1">You may also like</h4>
            <hr className="border-red-300 w-64 border-2 mt-16"/>
          </header>

          <div className="flex pt-12">
            <div className="w-1/5">
              <div className="flex justify-between items-center border-b border-gray-300 pb-4">
                <p className="text-gray-600">Filter</p>
                <button className="text-gray-100">
                  <svg className="stroke-current" width="12" height="2" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h12v2H0z"/>
                  </svg>
                </button>
              </div>

              <ul className="pt-8">
                <li className="text-gray-600">New In</li>
                <li className="pt-6">
                  <span className="text-gray-800 font-semibold">Materials</span>
                  <ul className="pl-8">
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Synthetic skin (6)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Metal (88)</span><input type="checkbox"/></label>
                    </li>
                    <li className="text-gray-600 pt-6"><label className="flex justify-between"><span>Wooden (158)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label className="flex justify-between"><span>Fabric (294)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Polyurethane (25)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Viscoelastic (36)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Natural fiber (17)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label className="flex justify-between"><span>Synthetic fiber (20)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Natural skin (7)</span><input
                      type="checkbox"/></label></li>
                    <li className="text-gray-600 pt-6"><label
                      className="flex justify-between"><span>Foam (77)</span><input type="checkbox"/></label>
                    </li>
                  </ul>
                </li>
                <li className="text-gray-600 pt-6">Sale Off</li>
              </ul>
            </div>

            <div className="w-4/5 grid grid-columns-2 grid-gap-32 pl-16">
              <div className="flex items-start">
                <img src={GrayBox} alt="Gray Box" className="w-64 h-auto"/>

                <div className="pl-12">
                  <header className="flex justify-between">
                    <h6 className="text-gray-800 font-semibold text-xl">Patio<br/>armchair, blue</h6>
                    <small className="text-gray-900 font-semibold text-xl">386€</small>
                  </header>
                  <p className="text-gray-500 font-hairline pt-2">Within 10 days</p>
                  <p className="text-gray-600 leading-loose pt-6">Armchair in scandinavian design upholstered with
                    fabric
                    Miss pattern. Backrest with decorative
                    buttons.
                    Legs in natural wood.</p>
                  <a href="#" className="inline-block mt-6 font-bold text-gray-800 hover:text-red-300 text-sm">BUY
                    NOW</a>
                </div>
              </div>

              <div className="flex items-start">
                <img src={GrayBox} alt="Gray Box" className="w-64 h-auto"/>

                <div className="pl-12">
                  <header className="flex justify-between">
                    <h6 className="text-gray-800 font-semibold text-xl">Patio<br/>armchair, blue</h6>
                    <small className="text-gray-900 font-semibold text-xl">386€</small>
                  </header>
                  <p className="text-gray-500 font-hairline pt-2">Within 10 days</p>
                  <p className="text-gray-600 leading-loose pt-6">Armchair in scandinavian design upholstered with
                    fabric
                    Miss pattern. Backrest with decorative
                    buttons.
                    Legs in natural wood.</p>
                  <a href="#" className="inline-block mt-6 font-bold text-gray-800 hover:text-red-300 text-sm">BUY
                    NOW</a>
                </div>
              </div>

              <div className="flex items-start">
                <img src={GrayBox} alt="Gray Box" className="w-64 h-auto"/>

                <div className="pl-12">
                  <header className="flex justify-between">
                    <h6 className="text-gray-800 font-semibold text-xl">Patio<br/>armchair, blue</h6>
                    <small className="text-gray-900 font-semibold text-xl">386€</small>
                  </header>
                  <p className="text-gray-500 font-hairline pt-2">Within 10 days</p>
                  <p className="text-gray-600 leading-loose pt-6">Armchair in scandinavian design upholstered with
                    fabric
                    Miss pattern. Backrest with decorative
                    buttons.
                    Legs in natural wood.</p>
                  <a href="#" className="inline-block mt-6 font-bold text-gray-800 hover:text-red-300 text-sm">BUY
                    NOW</a>
                </div>
              </div>

              <div className="flex items-start">
                <img src={GrayBox} alt="Gray Box" className="w-64 h-auto"/>

                <div className="pl-12">
                  <header className="flex justify-between">
                    <h6 className="text-gray-800 font-semibold text-xl">Patio<br/>armchair, blue</h6>
                    <small className="text-gray-900 font-semibold text-xl">386€</small>
                  </header>
                  <p className="text-gray-500 font-hairline pt-2">Within 10 days</p>
                  <p className="text-gray-600 leading-loose pt-6">Armchair in scandinavian design upholstered with
                    fabric
                    Miss pattern. Backrest with decorative
                    buttons.
                    Legs in natural wood.</p>
                  <a href="#" className="inline-block mt-6 font-bold text-gray-800 hover:text-red-300 text-sm">BUY
                    NOW</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-40">
          <div className="carousel">
            <div id="#carousel-1" className="carousel-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current bg-gray-300 w-full h-full">
                <defs>
                  <path id="a" d="M0 0h784v616H0z"/>
                </defs>
              </svg>
            </div>

            <div id="#carousel-2" className="carousel-item inline-block relative">
              <div className="bg-white absolute top-0 right-0 px-24 py-12">
                <p className="text-4xl text-gray-900">Autumn Collection</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current bg-gray-300 w-full h-full">
                <defs>
                  <path id="a" d="M0 0h784v616H0z"/>
                </defs>
              </svg>
              <div className="absolute bg-red-400 w-24 h-24 bottom-0 left-0 flex items-center justify-center">
                <p className="text-white text-4xl">01</p>
              </div>
            </div>

            <div id="#carousel-3" className="carousel-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current bg-gray-300 w-full h-full">
                <defs>
                  <path id="a" d="M0 0h784v616H0z"/>
                </defs>
              </svg>
            </div>

            <div id="#carousel-4" className="carousel-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current bg-gray-300 w-full h-full">
                <defs>
                  <path id="a" d="M0 0h784v616H0z"/>
                </defs>
              </svg>
            </div>

            <div id="#carousel-5" className="carousel-item">
              <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current bg-gray-300 w-full h-full">
                <defs>
                  <path id="a" d="M0 0h784v616H0z"/>
                </defs>
              </svg>
            </div>
          </div>

          <div className="text-center">
            <nav className="inline-block">
              <ul className="flex items-center">
                <li className="w-2 h-2 bg-gray-400 rounded-full">
                  <a href="#carousel-1" className="block w-full h-full"/>
                </li>
                <li className="w-3 h-3 bg-red-400 rounded-full ml-6">
                  <a href="#carousel-2" className="block w-full h-full"/>
                </li>
                <li className="w-2 h-2 bg-gray-400 rounded-full ml-6">
                  <a href="#carousel-3" className="block w-full h-full"/>
                </li>
                <li className="w-2 h-2 bg-gray-400 rounded-full ml-6">
                  <a href="#carousel-4" className="block w-full h-full"/>
                </li>
                <li className="w-2 h-2 bg-gray-400 rounded-full ml-6">
                  <a href="#carousel-5" className="block w-full h-full"/>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </main>

      <footer className="p-10 text-center">
          <span className="text-gray-600">
          Made with 🎔 from
        </span>
        <a href="https://twitter.com/kcubero27" className="text-red-300 hover:text-red-400"> @kcubero27</a>
      </footer>
    </>
  )
}

export default IndexPage
