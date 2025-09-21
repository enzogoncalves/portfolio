import React, { useEffect, useState } from "react";
import "../../assets/css/tailwind.css";
import "../../assets/fonts/style.css";
import Tech from "../../components/Tech";
import Switch from "react-switch";
import Portfolio from "../../components/Portfolio";
import Footer from "../../components/Footer";
// import { SpeedInsights } from "@vercel/speed-insights/vue";
import { Analytics } from '@vercel/analytics/react';

const Home = () => {
	const [showNav, setShowNav] = useState<boolean>(false);
  const [showScrollToTopButton, setShowScrollToTopButton] =
    useState<boolean>(false);
  const [theme, setTheme] = useState<string>(
    localStorage.getItem("theme") === "dark" ? "dark" : "light"
  );
  const refToComponent = React.useRef(null);

  useEffect(() => {
    const root = window.document.documentElement;

    const removeOldTheme = theme === "dark" ? "light" : "dark";

    root.classList.remove(removeOldTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    async function animate() {
      if (refToComponent.current) {
        const sr = (await import("scrollreveal")).default;
        sr({
          duration: 300,
          reset: true,
        });

        sr().reveal(
          `#about h2, #about img, #about p, #about div a,
          #techs,
          #projects h2, .projects .project div, .project a, .project span, .project img
        `,
          { origin: "top", distance: "30px", interval: 100 }
        );

        sr().reveal("#contact h3, #contact a div, #contact a p", {
          interval: 50,
        });
      }
    }
    animate();
  }, []);

  function toggleNavigation() {
    setShowNav((previous) => !previous);
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  window.addEventListener("scroll", () => {
    if (window.scrollY >= 300) {
      setShowScrollToTopButton(true);
    } else {
      setShowScrollToTopButton(false);
    }
  });

  return (
    <>
      <div
        className={`${
          showScrollToTopButton ? "block right-8" : "-right-28"
        } fixed bottom-[50px] z-50 w-14 sm:w-16 h-14 sm:h-16 grid place-items-center border-2 border-neutral-700 dark:border-white rounded-full cursor-pointer group bg-white dark:bg-neutral-900 hover:bg-neutral-900 hover:border-neutral-900 hover:scale-105 transition-all duration-200`}
        title="Scroll to the top of the page"
        onClick={() => scrollToTop()}
      >
        <i className="icon-arrow-up text-xl sm:text-2xl group-hover:text-white"></i>
      </div>

      <header
        ref={refToComponent}
        className="h-header sticky z-[999] top-0 left-0 w-full bg-white dark:bg-zinc-900 shadow-md dark:shadow-zinc-800"
      >
        <div className="flex justify-center gap-2 mx-auto max-w-[1100px] relative h-header">
          <div className="w-full md:w-auto md:min-w-max flex items-center justify-between py-2 px-6 relative z-50 bg-white dark:bg-zinc-900">
            <div className="flex items-center gap-4 sm:gap-6">
              <h1
                id="logo"
                className="font-title dark:text-white text-2xl md:text-3xl text-center pt-1"
              >
                Enzo Mateus
              </h1>
              <Switch
                onChange={() =>
                  setTheme((prevTheme) =>
                    prevTheme == "dark" ? "light" : "dark"
                  )
                }
                checked={theme == "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={20}
                width={60}
                handleDiameter={25}
                onHandleColor={"#c0c2cc"}
                onColor={"#525252"}
                offHandleColor={"#525252"}
                offColor={"#c0c2cc"}
                className="md:pl-4"
              />
            </div>
            <div
              className="md:hidden relative h-[19px] w-7 justify-between cursor-pointer"
              onClick={toggleNavigation}
            >
              <div
                className={`${
                  showNav ? "rotate-45 top-1/2 -translate-y-1/2" : ""
                } absolute top-0 left-0 h-[3px] w-7 bg-black dark:bg-white rounded-full transition-all`}
              ></div>
              <div
                className={`${
                  showNav ? "left-5 opacity-0" : ""
                } absolute top-1/2 -translate-y-1/2 left-0 h-[3px] w-7 bg-black dark:bg-white rounded-full transition-all`}
              ></div>
              <div
                className={`${
                  showNav ? "-rotate-45 top-1/2 -translate-y-1/2" : ""
                } absolute bottom-0 left-0 h-[3px] w-7 bg-black dark:bg-white rounded-full transition-all`}
              ></div>
            </div>
          </div>
          <nav
            className={`${
              showNav
                ? "top-0 h-screen md:h-auto px-4"
                : "pointer-events-none -top-full md:pointer-events-auto"
            } fixed md:static w-screen md:w-full bg-white dark:bg-zinc-900 md:bg-transparent transition-all duration-200 z-10 grid place-items-center md:flex md:justify-center`}
          >
            <ul className="md:w-full flex flex-col md:flex-row md:justify-end gap-14 md:gap-6 items-center list-none">
              <li className="text-center">
                <a
                  href="#about"
                  className="nav-item"
                  onClick={() => toggleNavigation()}
                >
                  Sobre mim
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#techs"
                  className="nav-item"
                  onClick={() => toggleNavigation()}
                >
                  Linguagens & Tecnologias
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#projects"
                  className="nav-item"
                  onClick={() => toggleNavigation()}
                >
                  Projetos
                </a>
              </li>
              <li className="text-center">
                <a
                  href="#contact"
                  className="nav-item"
                  onClick={() => toggleNavigation()}
                >
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="about">
          <h2 className="h2 text-center">Fullstack Developer</h2>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
						<img
							src="https://github.com/enzogoncalves.png"
							alt="profile picture"
							className="w-[125px] sm:w-[150px] lg:w-[200px] rounded-md pl-2 pb-2"
						/>
						<p className="font-default font-normal leading-6 text-justify">
							Meu nome é Enzo Mateus Gonçalves e minha jornada na programação se
							iniciou em 2019, com o desenvolvimento de aplicações web. Sou Full
							Stack Developer, com experiência em aplicativos construídos com Flutter.
							<br />

						</p>
					</div>
          <div className="mt-4 flex justify-center md:justify-start gap-4">
            <a
              href="https://www.linkedin.com/in/enzo-mateus-673ba31a4/"
              target="_blank"
              className="border border-[#0077B5] dark:hover:border-white shadow-md w-20 h-14 grid place-items-center group dark:bg-[#0077B5] hover:bg-[#0077B5] dark:hover:bg-white transition"
              title="Linkedin redirect link"
            >
              <i className="icon-linkedin text-2xl text-[#0077B5] dark:text-white group-hover:text-white dark:group-hover:text-[#0077B5]"></i>
            </a>
            <a
              href="https://github.com/enzogoncalves"
              target="_blank"
              className="border border-neutral-800 shadow-md w-20 h-14 grid place-items-center group dark:bg-neutral-800 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition"
              title="Github redirect link"
            >
              <i className="icon-github text-2xl text-neutral-800 dark:text-white group-hover:text-white dark:group-hover:text-neutral-800"></i>
            </a>
          </div>
        </section>

        <hr/>

        <Tech />

        <hr/>

        <section id="projects">
          <h2>Projetos</h2>
          <div className="projects flex flex-wrap gap-4 justify-center">
            <Portfolio
              title="Movies & TvShows Website"
              techs={["React", "Styled Components", "TailwindCSS", "TMDBAPI"]}
              linkTo="https://movies-website-enzo-mateus-gonalves-projects.vercel.app/"
              illustration="imgs/movies-website.png"
              alt="movies and tv shows website illustration"
							githubLink="movies-website"
            />
            <Portfolio
              title="School Homepage"
              techs={["JS", "TailwindCSS", "HTML"]}
              linkTo="https://tailwindcss-school-website.vercel.app/"
              illustration="imgs/tailwindcss-school-website.png"
              alt="homepage school website illustration"
							githubLink="tailwindcss-school-website"
            />
            <Portfolio
              title="Memory Card Game"
              techs={[
                "React",
                "Typescript",
                "TailwindCSS",
                "Styled Components",
                "Firebase",
              ]}
              linkTo="https://card-memory-game-red.vercel.app/"
              illustration="imgs/card-memory-game-website.png"
              alt="game website illustration"
							githubLink="card-memory-game"
            />
          </div>
        </section>
      </main>

      <Footer />

			{/* <SpeedInsights /> */}
			<Analytics />
    </>
	);
}

export default Home;
