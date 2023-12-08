type Portfolio = {
    title: string,
    techs: Array<string>,
    linkTo: string,
		githubLink: string,
    illustration: string,
    alt: string
}

const Portfolio = ({title, techs, linkTo, githubLink, illustration, alt}: Portfolio) => {
  return (
    <div className="project grid grid-cols-1 grid-rows-2 shadow-medium dark:shadow-zinc-500 rounded-md max-w-md overflow-hidden">
        <div className="relative flex flex-col gap-4 p-4">
            <p className='text-base sm:text-lg font-bold uppercase'>{title}</p>
            <div className="flex flex-wrap gap-2">
            {
                techs.map((tech, key) => (
                    <span key={key} className='py-2 px-2 sm:py-4 sm:px-3 text-sm border rounded-full shadow-sm'>{tech}</span>
                ))
            }
            </div>
            <div className="flex gap-4 justify-end">
						<a href={`https://github.com/enzogoncalves/${githubLink}`} target="_blank" className="w-10 h-10 sm:w-14 sm:h-14 grid place-items-center border-2 border-neutral-800 group dark:border-white rounded-full dark:bg-white hover:bg-neutral-800 dark:hover:bg-zinc-800 transition-all duration-100">
							<i className="icon-github text-2xl group-hover:text-white dark:text-neutral-800"></i>
						</a>
						<a href={linkTo} target='_blank' className='w-10 h-10 sm:w-14 sm:h-14 grid place-items-center rounded-full bg-zinc-900 dark:bg-white leading-none border border-neutral-800 group dark:border-white dark:hover:bg-zinc-900 transition-all duration-100'>
								<i className='icon-arrow-up-right sm:text-xl text-white dark:text-zinc-900 dark:group-hover:text-white'></i>
						</a>
						</div>
        </div>
        <img src={illustration} alt={alt} className="h-full object-cover object-center" />
    </div>
  )
}

export default Portfolio