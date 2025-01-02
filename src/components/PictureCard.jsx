// PictureCard.jsx
const PictureCard = ({ picture }) => (
  // <div className="flex-shrink-0 w-64">
  //   <img src={picture.url} alt="" className="w-full h-48 object-cover" />
  //   <p className="mt-2 text-center">{picture.description}</p>
  // </div>
  
  <div className=" w-[270px] h-[430px] sm:w-[310px] sm:h-[480px] shadow-md bg-white relative ml-3 sm:ml-4 sm:hover:-translate-y-6 duration-300 flex-none snap-center rounded-md overflow-hidden">
    <div className="">
      <img
        src={picture.url}
        alt="all need one"
        className="sm:w-[310px] sm:h-[310px] w-[270px] h-[270px]"
      />
      <div className="absolute sm:top-72 top-60 left-[38%] p-4 sm:w-16 sm:h-16 w-14 h-14 rounded-full backdrop-blur-lg shadow-md flex items-center justify-center bg-gradient-to-r from-black via-black to-rose-600">
        <p className="font-sans font-bold text-lg text-gray-100">{picture.id}</p>
      </div>
    </div>
    <div className="px-6 sm:py-4 py-2 flex flex-col justify-center items-center">
      <p className="mt-8 text-sm sm:text-md text-center font-semibold text-gray-700 uppercase"><span className="bg-gradient-to-r from-black via-rose-600 to-rose-600 text-transparent bg-clip-text">{picture.type} |</span> {picture.title}</p>
      <p className="text-center text-gray-700 text-sm">
        {picture.description}
      </p>
      <p className="text-center font-semibold text-rose-600 uppercase text-sm mt-3 animate-pulse">
        {picture.status}
      </p>
    </div>
  </div>

);

export default PictureCard;
