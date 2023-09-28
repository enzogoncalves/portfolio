import { useState } from 'react';
import "./assets/css/tailwind.css"
import "./assets/fonts/style.css"
import Tech from './assets/components/Tech';


const App = () => {
  const [showNav, setShowNav] = useState<boolean>(false);

  function toggleNavigation() {
    setShowNav(previous => !previous)
  }

  return (
   <>
    <header className='h-header fixed top-0 left-0 z-[999] w-full bg-white mb-header shadow-md'>
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
    <main>
      <section id="about">
        <h2>Sobre mim</h2>
        <img src="https://avatars.githubusercontent.com/u/75916483?v=4" alt="profile picture" className='w-[125px] sm:w-[150px] lg:w-[200px] rounded-md float-right clear-both pl-2 pb-2'/>
        <p className="text">Meu nome é Enzo Mateus Gonçalves e minha jornada na programação começou em 2019, quando meu irmão mais velho me apresentou para a lógicas de programação, html e css. Na época não dei muita bola mas depois de quase 2 anos foi onde realmente começei a me comprometer e a ter mais foco nos meus estudos. Atualmente estou cursando Técnico em Desenvolvimento de Sistemas em uma Etec. Atualmente estou focado em Full Stack Web Development, mas com interesse em outras partes do processo de desenvolvimento de um app.</p>
      </section>

      <hr/>

      <section id="techs">
        <h2>Tecnologias e Linguagens</h2>
        <div className="flex flex-wrap justify-center gap-4 my-0 mx-auto">
          <Tech alt='js' img='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' text='JavaScript'/>
          <Tech alt='nodejs' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" text='NodeJs'/>
          <Tech alt='html' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" text='HTML'/>
          <Tech alt='css' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" text='CSS'/>
          <Tech alt='sass' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" text='Sass'/>
          <Tech alt='git' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" text='Git'/>
          <Tech alt='tailwindcss' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" text='Tailwind Css'/>
          <Tech alt='csharp' img="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" text='C#'/>
        </div>
      </section>

      <hr/>

      <section id="projects">
        <h2>Projetos</h2>
        <div className="projects">
          <div className="project">
            
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
