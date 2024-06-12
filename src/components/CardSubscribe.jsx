import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const CardSubscribe = (props) => {

  useEffect(() => {
    AOS.init();
  });

  const {title, price, values, button} = props;

  return (
    <div data-aos='fade-up' className="card-subscribe p-l-32">
      <div  className='card-subscribe-inside-box'>
      <div  className='card-title-subscribe m-t-40 m-b-24 c-112087'><div className='unbounded-700'>{title}</div></div>
      <div  className='card-price-subscribe l-h-50 f-s-40 m-b-24 c-112087'><div className='unbounded-700'>{price}</div></div>
        {values.map((value, index) => <div  className='f-s-18 l-h-27 c-2b2624' key={index}><div className='mulish-400'>&#8226; {value}</div></div>)}
      <button className='cursor hover-16279D b-n m-t-24 m-b-24 h-48 w-260 b-112087 c-faeddd l-h-24 f-s-16'><div className='unbounded-700'>{button}</div></button>
      </div>
    </div>
  );
}

export default CardSubscribe;
