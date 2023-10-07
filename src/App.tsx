import { useState } from 'react';
import "./assets/css/tailwind.css"
import "./assets/fonts/style.css"
import Tech from './assets/components/Tech'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  
  function toggleNavigation() {
    setShowNav(previous => !previous)
  }

  return (
   <>
    <header className='h-header sticky top-0 left-0 z-[999] w-full bg-white shadow-md'>
      <div className='flex flex-col mx-auto max-w-[1000px]'>
        <div className="w-full flex items-center justify-between py-2 px-6 h-header">
          <h1 id="logo" className="font-title text-2xl md:text-3xl text-center pt-1">Enzo Mateus</h1>
          <i className={`${showNav ? 'hidden' : ''} icon-menu text-2xl w-7 cursor-pointer p-1`} onClick={() => {toggleNavigation()}}></i>
          <i className={`${showNav ? '' : 'hidden'} icon-close text-2xl w-7 cursor-pointer p-1`} onClick={() => {toggleNavigation()}}></i>
        </div>
        <nav className={`${showNav ? '' : 'hidden'}`}>
          <ul className="flex flex-col list-none">
            <li><a href="#about" className="nav-item" onClick={() => toggleNavigation()}>Sobre mim</a></li>
            <li><a href="#techs" className="nav-item" onClick={() => toggleNavigation()}>Linguagens & Tecnologias</a></li>
            <li><a href="#projects" className="nav-item" onClick={() => toggleNavigation()}>Projetos</a></li>
            <li><a href="#contact" className="nav-item" onClick={() => toggleNavigation()}>Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
    <main className='overflow-hidden'>
      <section id="about">
        <h2>Sobre mim</h2>
        <img src="https://avatars.githubusercontent.com/u/75916483?v=4" alt="profile picture" className='w-[125px] sm:w-[150px] lg:w-[200px] rounded-md float-right clear-both pl-2 pb-2'/>
        <p className="text">Meu nome é Enzo Mateus Gonçalves e minha jornada na programação se iniciou em 2019, com o desenvolvimento de aplicações web. Sou Full Stack Web Developer e com interesse em partes do processo do desenvolvimento de aplicativos mobile.</p>
      </section>

      <hr/>

      <section id="techs">
        <h2>Tecnologias e Linguagens</h2>
        <div className='relative overflow-hidden w-[884px] h-36'>
          <div className='block w-[200%] absolute py-4 animate-techs'>
            <span className='float-left w-1/2'>
              <Tech
                alt='js'
                img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              />
              <Tech
                alt='nodejs'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <Tech
                alt='react js'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <Tech
                alt='dart'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
              />
              <Tech
                alt='html'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <Tech
                alt='css'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <Tech
                alt='sass'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <Tech
                alt='tailwindcss'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
                <Tech
                  alt='git'
                  img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                />
            </span>
            <span className='float-left w-1/2'>
              <Tech
                alt='js'
                img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
              />
              <Tech
                alt='nodejs'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg"
              />
              <Tech
                alt='react js'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              />
              <Tech
                alt='dart'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg"
              />
              <Tech
                alt='html'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              />
              <Tech
                alt='css'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              />
              <Tech
                alt='sass'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
              />
              <Tech
                alt='tailwindcss'
                img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
              />
                <Tech
                  alt='git'
                  img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                />
            </span>
          </div>
        </div>
      </section>

      <hr/>

      <section id="projects">
        <h2>Projetos</h2>
        <div className="projects flex flex-wrap gap-4 justify-center">
          <div className="project">
            <div className="project-header">
              <p className='project-title'>Movies & TvShows Website</p>
              <div className="project-techs">
                <span>React</span>
                <span>Styled-Components</span>
                <span>TailwindCSS</span>
                <span>TMDB API</span>
              </div>
              <a href='https://movies-website-enzogoncalves.vercel.app/' target='_blank' className='project-link'><i className='icon-arrow-up-right2'></i></a>
            </div>
            <img src="../src/public/imgs/movies-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
          </div>

          <div className="project">
            <div className="project-header">
              <p className='project-title'>School Home Page</p>
              <div className="project-techs">
                <span>JS</span>
                <span>TailwindCSS</span>
                <span>HTML</span>
              </div>
              <a href='https://tailwindcss-school-website.vercel.app/' target='_blank' className='project-link'><i className='icon-arrow-up-right2'></i></a>
            </div>
            <img src="../src/public/imgs/tailwindcss-school-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
          </div>

          <div className="project">
            <div className="project-header">
              <p className='project-title'>Card Memory Game</p>
              <div className="project-techs">
                <span>React</span>
                <span>Typescript</span>
                <span>TailwindCSS</span>
                <span>Styled-Components</span>
                <span>Firebase</span>
              </div>
              <a href='https://card-memory-game-red.vercel.app/home' target='_blank' className='project-link'><i className='icon-arrow-up-right2'></i></a>
            </div>
            <img src="../src/public/imgs/card-memory-game-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
          </div>
        </div>
      </section> 

      <footer id="contact" className='flex flex-col items-center justify-center gap-5 px-2 bg-neutral-800 text-white py-5'>
        <h3 className='text-white text-2xl '>Entre em Contato</h3>
        <div className='flex gap-5 xs:gap-20 px-2'>
          <a href="https://www.linkedin.com/in/enzo-mateus-673ba31a4/" target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-white group hover:bg-white transition-all duration-100'>
              <i className="icon-linkedin text-2xl group-hover:text-black"></i>
            </div>
            <p>Linkedin</p>
          </a>
          <a href="mailto:enzo.mat.gonc@hotmail.com" type='mailto' target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-white group hover:bg-white transition-all duration-100'>
              <i className="icon-mail text-2xl group-hover:text-black"></i>
            </div>
            <p>Email</p>
          </a>
          <a href="https://github.com/enzogoncalves" target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-white group hover:bg-white transition-all duration-100'>
              <i className="icon-github text-2xl group-hover:text-black"></i>
            </div>
            <p>Github</p>
          </a>
        </div>
        <div className='flex justify-center flex-wrap gap-2 text-neutral-500 xs:'>
          <a href="#about" className='hover:text-neutral-200'>Sobre</a>
          <a href="#techs" className='hover:text-neutral-200'>Linguagens e Tecnologias</a>
          <a href="#projects" className='hover:text-neutral-200'>Projetos</a>
          <a href="#contact" className='hover:text-neutral-200'>Contato</a>
        </div>
      </footer>
    </main>
   </>
  )
}

export default App
