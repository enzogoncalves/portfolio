type Tech = {
    alt: string,
    img: string,
}

const Tech = ({alt, img}: Tech) => {
  return (
    <div className="mr-4 inline-block float-left rounded-md shadow-small p-4 duration-200 bg-white backdrop-grayscale hover:shadow-medium hover:bg-gray-50 hover:scale-105">
        <img className="w-[50px] h-auto" alt={alt} src={img} />
    </div>
    // <div className="group flex mr-4 rounded-md shadow-sm p-4 duration-200 bg-white backdrop-grayscale hover:shadow-medium hover:bg-gray-200">
    //     <img className=" w-[50px] h-auto" alt={alt} src={img} />
    // </div>
  )
}

export default Tech