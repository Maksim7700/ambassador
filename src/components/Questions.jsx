import { useState } from 'react';

const Questions = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const {title, desc} = props;

  return (
    <div className={`question `} onClick={() => setIsOpen(!isOpen)}>
      <div className='part-1'>
        <div className='q-text'><div className='unbounded-700'>{title}</div></div>
        <div className='button-q'><button className={`${isOpen ? 'transparent-button' : ''}`}><img src={`${!isOpen ? '../images/plus.svg' : '../images/minus.svg'}`} alt='INFO' /></button></div>
      </div>
      <div className='part2'>
      <div className={`q-desc ${isOpen ? '' : 'none'}`}><div className='mulish-400'>{isOpen && desc}</div></div>
      </div>
    </div>
  );
}

export default Questions;
