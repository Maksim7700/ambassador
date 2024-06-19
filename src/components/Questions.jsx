import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Questions = (props) => {

  const [animationClass, setAnimationClass] = useState('none');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    if (!isOpen && animationClass === 'none') {
    } else
    if (isOpen) {
      setAnimationClass('slideFadeIn');
    } else {
      setAnimationClass('slideFadeOut');
    }
  }, [animationClass, isOpen]);


  const history = useHistory();


  const {title, desc} = props;



  return (
    <div data-aos='fade-up' className={`question `} >
      <div className={`part-1 cursor ${!isOpen ? 'fff-t': ''}`} onClick={() => setIsOpen(!isOpen)}>
        <div className='q-text'><div className='unbounded-700'>{title}</div></div>
        <div className={`button-q ${!isOpen ? 'button-q-hover': ''}`}><button className={`cursor ${isOpen ? 'transparent-button' : ''}`}><img src={`${!isOpen ? history.location.pathname !== '/subscribe' ? '../images/plus.svg' : '../images/plus-subscribe.svg' : '../images/minus.svg'}`} alt='INFO' /></button></div>
      </div>
      <div className={`part2 ${isOpen ? '' : 'min-h'}`}>
      <div className={`q-desc ${animationClass}`}><div className='mulish-400'>{desc}</div></div>
      </div>
    </div>
  );
}

export default Questions;
