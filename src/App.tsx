import { useState } from 'react';
import "./assets/css/tailwind.css"
import "./assets/fonts/style.css"
import Tech from './components/Tech'

const App = () => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [showScrollToTopButton, setShowScrollToTopButton] = useState<boolean>(false);
  
  function toggleNavigation() {
    setShowNav(previous => !previous)
  }

  function scrollToTop() {
    window.scrollTo(0, 0)
  }

  window.addEventListener('scroll', () => {
    if(window.scrollY >= 300) {
      setShowScrollToTopButton(true)
    } else {
      setShowScrollToTopButton(false)
    }
  })

  return (
   <>
    <div className={`${showScrollToTopButton ? 'block right-8' : '-right-28'} fixed bottom-[50px] z-50 w-14 sm:w-16 h-14 sm:h-16 grid place-items-center border-2 border-neutral-700 rounded-full cursor-pointer group bg-white hover:bg-neutral-900 hover:border-neutral-900 transition-all duration-200`} title="Scroll to the top of the page" onClick={() => scrollToTop()}>
      <i className='icon-arrow-up text-xl sm:text-2xl group-hover:text-white'></i>
    </div>

    <header className='h-header sticky top-0 left-0 z-[999] w-full bg-white shadow-md'>
      <div className='flex flex-col mx-auto max-w-[1000px]'>
        <div className="w-full flex items-center justify-between py-2 px-6 h-header">
          <h1 id="logo" className="font-title text-2xl md:text-3xl text-center pt-1">Enzo Mateus</h1>
          <div className="relative h-[19px] w-7 justify-between cursor-pointer" onClick={toggleNavigation}>
            <div className={`${showNav ? 'rotate-45 top-1/2 -translate-y-1/2' : ''} absolute top-0 left-0 h-[3px] w-7 bg-black rounded-full transition-all`}></div>
            <div className={`${showNav ? 'left-5 opacity-0' : ''} absolute top-1/2 -translate-y-1/2 left-0 h-[3px] w-7 bg-black rounded-full transition-all`}></div>
            <div className={`${showNav ? '-rotate-45 top-1/2 -translate-y-1/2' : ''} absolute bottom-0 left-0 h-[3px] w-7 bg-black rounded-full transition-all`}></div>
          </div>
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
        <h2>Full Stack Web Developer</h2>
        <img src="https://avatars.githubusercontent.com/u/75916483?v=4" alt="profile picture" className='w-[125px] sm:w-[150px] lg:w-[200px] rounded-md float-right clear-both pl-2 pb-2'/>
        <p className="font-default font-normal leading-6">Meu nome é Enzo Mateus Gonçalves e minha jornada na programação se iniciou em 2019, com o desenvolvimento de aplicações web. Sou Full Stack Web Developer e com interesse em partes do processo do desenvolvimento de aplicativos mobile.</p>
        <div className="mt-4 flex gap-4">
          <a href="https://www.linkedin.com/in/enzo-mateus-673ba31a4/" target="_blank" className='border border-[#0077B5] shadow-md w-20 h-14 grid place-items-center group hover:bg-[#0077B5] transition' title='Linkedin redirect link'>
            <i className='icon-linkedin text-2xl text-[#0077B5] group-hover:text-white'></i>
          </a>
          <a href="https://github.com/enzogoncalves" target="_blank" className='border border-neutral-800 shadow-md w-20 h-14 grid place-items-center group hover:bg-neutral-800 transition' title='Github redirect link'>
            <i className='icon-github text-2xl text-neutral-800 group-hover:text-white'></i>
          </a>
        </div>
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
              <a href='https://movies-website-enzogoncalves.vercel.app/' target='_blank' className='project-link'><i className='icon-arrow-up-right'></i></a>
            </div>
            <img src="imgs/movies-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
          </div>

          <div className="project">
            <div className="project-header">
              <p className='project-title'>School Home Page</p>
              <div className="project-techs">
                <span>JS</span>
                <span>TailwindCSS</span>
                <span>HTML</span>
              </div>
              <a href='https://tailwindcss-school-website.vercel.app/' target='_blank' className='project-link'><i className='icon-arrow-up-right'></i></a>
            </div>
            <img src="imgs/tailwindcss-school-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
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
              <a href='https://card-memory-game-red.vercel.app/home' target='_blank' className='project-link'><i className='icon-arrow-up-right'></i></a>
            </div>
            <img src="imgs/card-memory-game-website.png" alt="Movies and Tv Shows Website" className="project-illustration" />
          </div>
        </div>
      </section> 
    </main>

    <footer id="contact" className='flex flex-col items-center justify-center gap-5 px-2 pt-14 pb-6'>
        <h3 className='text-3xl font-bold mb-8'>Entre em Contato</h3>
        <div className='flex gap-5 xs:gap-20 px-2'>
          <a href="https://www.linkedin.com/in/enzo-mateus-673ba31a4/" target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-neutral-800 group hover:bg-neutral-800 transition-all duration-100'>
              <i className="icon-linkedin text-2xl group-hover:text-white"></i>
            </div>
            <p>Linkedin</p>
          </a>
          <a href="mailto:enzo.mat.gonc@hotmail.com" type='mailto' target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-neutral-800 group hover:bg-neutral-800 transition-all duration-100'>
              <i className="icon-mail text-2xl group-hover:text-white"></i>
            </div>
            <p>Email</p>
          </a>
          <a href="https://github.com/enzogoncalves" target='_blank' className='flex flex-col items-center gap-2'>
            <div className='flex items-center justify-center p-3 border-2 rounded-full border-neutral-800 group hover:bg-neutral-800 transition-all duration-100'>
              <i className="icon-github text-2xl group-hover:text-white"></i>
            </div>
            <p>Github</p>
          </a>
        </div>
        <div className='flex justify-center flex-wrap gap-2 sm:gap-10 text-neutral-600 mt-8'>
          <a href="#about" className='hover:text-black hover:underline'>Sobre</a>
          <a href="#techs" className='hover:text-black hover:underline'>Linguagens e Tecnologias</a>
          <a href="#projects" className='hover:text-black hover:underline'>Projetos</a>
          <a href="#contact" className='hover:text-black hover:underline'>Contato</a>
        </div>
      </footer>
   </>
  )
}

export default App
