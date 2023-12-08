const Footer = () => {
  return (
    <footer
      id="contact"
      className="flex flex-col items-center justify-center gap-5 px-2 pt-14 pb-6"
    >
      <h3 className="text-3xl font-bold mb-8">Entre em Contato</h3>
      <div className="flex gap-5 xs:gap-20 px-2">
        <a
          href="https://www.linkedin.com/in/enzo-mateus-673ba31a4/"
          target="_blank"
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center p-3 border-2 border-neutral-800 dark:border-white rounded-full group dark:bg-white hover:bg-neutral-800 dark:hover:bg-zinc-800 transition-all duration-100">
            <i className="icon-linkedin text-2xl group-hover:text-white dark:text-neutral-800"></i>
          </div>
          <p>Linkedin</p>
        </a>
        <a
          href="mailto:enzo.mat.gonc@hotmail.com"
          type="mailto"
          target="_blank"
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center p-3 border-2 border-neutral-800 dark:border-white rounded-full group dark:bg-white hover:bg-neutral-800 dark:hover:bg-zinc-800 transition-all duration-100">
            <i className="icon-mail text-2xl group-hover:text-white dark:text-neutral-800"></i>
          </div>
          <p>Email</p>
        </a>
        <a
          href="https://github.com/enzogoncalves"
          target="_blank"
          className="flex flex-col items-center gap-2"
        >
          <div className="flex items-center justify-center p-3 border-2 border-neutral-800 dark:border-white rounded-full group dark:bg-white hover:bg-neutral-800 dark:hover:bg-zinc-800 transition-all duration-100">
            <i className="icon-github text-2xl group-hover:text-white dark:text-neutral-800"></i>
          </div>
          <p>Github</p>
        </a>
      </div>
      <div className="links flex justify-center flex-wrap gap-2 sm:gap-10 text-neutral-600 dark:text-neutral-400 mt-8">
        <a
          href="#about"
          className="hover:text-black dark:hover:text-white hover:underline"
        >
          Sobre
        </a>
        <a
          href="#techs"
          className="hover:text-black dark:hover:text-white hover:underline"
        >
          Linguagens e Tecnologias
        </a>
        <a
          href="#projects"
          className="hover:text-black dark:hover:text-white hover:underline"
        >
          Projetos
        </a>
        <a
          href="#contact"
          className="hover:text-black dark:hover:text-white hover:underline"
        >
          Contato
        </a>
      </div>
    </footer>
  );
};

export default Footer;
