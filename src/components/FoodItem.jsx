
import { Link } from 'react-router-dom';


function FoodItem({Name ,httpsi, Image}) {

  return (
    <Link to={`/${httpsi}`} className='w-[300px] sm:w-full  m-auto  rounded-2xl shadow-[0px_0px_10px_#00000015]  animate-fadeIn relative hover:shadow-[0px_0px_10px_tomato] hover:text-[tomato]'>
        <div >
          <img className='w-full rounded-tr-2xl rounded-tl-2xl' src={Image} alt="" />
        </div>
      <div className='px-[20px] pt-[20px]'>
        <div className='h-[80px]'>
        <p  className='text-[18px] font-medium'>{Name}</p>
      </div>
      </div>
    </Link>
  )
}

export default FoodItem
