import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Questions = (props) => {

  useEffect(() => {
    AOS.init();
  });

  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);

  const {title, desc} = props;

  return (
    <div data-aos='fade-up' className={`question `} onClick={() => setIsOpen(!isOpen)}>
      <div className='part-1'>
        <div className='q-text'><div className='unbounded-700'>{title}</div></div>
        <div className='button-q'><button className={`${isOpen ? 'transparent-button' : ''}`}><img src={`${!isOpen ? history.location.pathname !== '/subscribe' ? '../images/plus.svg' : '../images/plus-subscribe.svg' : '../images/minus.svg'}`} alt='INFO' /></button></div>
      </div>
      <div className='part2'>
      <div className={`q-desc ${isOpen ? '' : 'none'}`}><div className='mulish-400'>{isOpen && desc}</div></div>
      </div>
    </div>
  );
}

export default Questions;
