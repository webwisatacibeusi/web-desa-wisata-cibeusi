import img1 from '../../public/landing/1.png';
import img2 from '../../public/landing/2.png';
import img3 from '../../public/landing/3.png';
import img4 from '../../public/landing/4.png';
import img5 from '../../public/landing/5.png';
import img6 from '../../public/landing/6.png';
import Image from 'next/image';

export default function AsimetriImage() {
  return (
    <div className='flex flex-row md:justify-between justify-evenly max-w-6xl m-auto space-x-2 md:gap-2'>
      <div className='flex flex-col justify-center items-center order-1'>
        <Image
          src={img1}
          alt=''
          className='rounded-tl-xl rounded-br-xl  transition-all duration-300 hover:scale-90'
        />
      </div>
      <div className='hidden md:flex md:flex-col space-y-2 order-3 md:order-2 flex-wrap md:flex-nowrap'>
        <div className='flex flex-row space-x-2 justify-end items-end'>
          <Image
            src={img2}
            alt=''
            className='rounded-tl-xl rounded-br-xl order-1 transition-all duration-300 hover:scale-90'
          />
          <Image
            src={img3}
            alt=''
            className='rounded-tl-xl rounded-br-xl order-2 transition-all duration-300 hover:scale-90'
          />
        </div>
        <div className='flex md:flex-row space-x-2 justify-start items-start'>
          <Image
            src={img5}
            alt=''
            className='rounded-tl-xl rounded-br-xl order-2 md:order-1 transition-all duration-300 hover:scale-90'
          />
          <Image
            src={img6}
            alt=''
            className='rounded-tl-xl rounded-br-xl order-1 md:order-2 transition-all duration-300 hover:scale-90'
          />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center order-2 md:order-3'>
        <Image
          src={img4}
          alt=''
          className='rounded-tl-xl rounded-br-xl  transition-all duration-300 hover:scale-90'
        />
      </div>
    </div>
  );
}
