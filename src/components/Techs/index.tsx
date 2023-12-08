type Techs = {
  alt: string;
  img: string;
};

const Techs = ({ alt, img }: Techs) => {
  return (
    <div className="mr-4 inline-block float-left rounded-md shadow-small shadow-zinc-500 p-4 duration-200 bg-white dark:bg-zinc-900 backdrop-grayscale hover:shadow-medium dark:shadow-zinc-500 hover:bg-gray-50 hover:scale-105">
      <img className="w-[50px] h-auto" alt={alt} src={img} />
    </div>
  );
};

export default Techs;
