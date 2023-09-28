type Tech = {
    alt: string,
    img: string,
    text: string
}

const Tech = ({alt, img, text}: Tech) => {
  return (
    <div className="tech">
        <img className="tech-image" alt={alt} src={img} />
        <span>{text}</span>  
    </div>
  )
}

export default Tech