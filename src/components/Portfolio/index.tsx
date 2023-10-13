type Portfolio = {
    title: string,
    techs: Array<string>,
    linkTo: string,
    illustration: string,
    alt: string
}

const Portfolio = ({title, techs, linkTo, illustration, alt}: Portfolio) => {
  return (
    <div className="grid grid-cols-1 grid-rows-2 shadow-medium dark:shadow-zinc-500 rounded-md max-w-md overflow-hidden">
        <div className="relative flex flex-col gap-4 p-4">
            <p className='text-base sm:text-lg font-bold uppercase'>{title}</p>
            <div className="flex flex-wrap gap-2">
            {
                techs.map((tech) => (
                    <span className='py-2 px-2 sm:py-4 sm:px-3 text-sm border rounded-full shadow-sm'>{tech}</span>
                ))
            }
            </div>
            <a href={linkTo} target='_blank' className='w-10 h-10 sm:w-14 sm:h-14 grid place-items-center rounded-full bg-zinc-900 dark:bg-white leading-none absolute bottom-5 right-5'>
                <i className='icon-arrow-up-right sm:text-xl text-white dark:text-zinc-900'></i>
            </a>
        </div>
        <img src={illustration} alt={alt} className="h-full object-cover object-center" />
    </div>
  )
}

export default Portfolio