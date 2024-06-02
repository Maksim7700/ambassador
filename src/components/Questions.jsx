import { useState } from 'react';

const Questions = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const {title, desc} = props;

  return (
    <div className={`question `}>
      <div>
        <div className='q-text'><div className='unbounded-700'>{title}</div></div>
        <div className={`q-desc ${isOpen ? '' : 'none'}`}><div className='mulish-400'>{isOpen && desc}</div></div>
      </div>
      <div className='q-button'>
      <button className={`${isOpen ? 'transparent-button' : ''}`} onClick={() => setIsOpen(!isOpen)}>{!isOpen ? '+' : '-'}</button>
      </div>
    </div>
  );
}

export default Questions;
