type Tech = {
    alt: string,
    img: string,
    tech: string
    text: string
}

const Tech = ({alt, img, tech, text}: Tech) => {
  return (
    <div className="group flex flex-col max-w-[250px] h-[300px] mr-8 rounded-md shadow-small p-4 duration-200 bg-white backdrop-grayscale hover:shadow-medium hover:bg-gray-200">
        <img className=" w-[60px] h-auto" alt={alt} src={img} />
        <p className="text-lg my-2 font-bold">{tech}</p>  
        <p className="text-base text-neutral-600 group-hover:text-black">{text}</p>
    </div>
  )
}

export default Tech