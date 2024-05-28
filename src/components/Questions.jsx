import { Text } from 'react-font';
import { useState } from 'react';

const Questions = (props) => {

  const [isOpen, setIsOpen] = useState(false);

  const {title, desc} = props;

  return (
    <div className={`question `}>
      <div>
        <div className='q-text'><Text family='Unbounded' weight={700}>{title}</Text></div>
        <div className={`q-desc ${isOpen ? '' : 'none'}`}><Text family='Mulish' weight={400}>{isOpen && desc}</Text></div>
      </div>
      <div className='q-button'>
      <button className={`${isOpen ? 'transparent-button' : ''}`} onClick={() => setIsOpen(!isOpen)}>{!isOpen ? '+' : '-'}</button>
      </div>
    </div>
  );
}

export default Questions;
