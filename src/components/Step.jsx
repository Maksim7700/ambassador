import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Step = (props) => {

  useEffect(() => {
    AOS.init();
  });


  const {isLast, date, step, title, desc} = props;
  return (
    <div data-aos='fade-up' className={`step-block ${isLast ? 'step-block-last' : ''}`}>
        <div className='step-date'><div className='mulish-400'>{date}</div></div>
        <div className='symbol'>
        <div  className={`${props.className}`}>
        </div>
        <div className={!isLast ? `line` : ''}></div>
        </div>
        <div data-aos='fade-up' className='step-desc'>
          <div  className='date'><div family='Mulish' weight={500}>{date}</div></div>
          <div  className='date-2'>
            <div  className='unbounded-700'>{step} <br/> {title}</div>
          </div>
          {!isLast && <div  className='last'>
            <div  className='c-464442 mulish-400'>{desc}</div>
          </div>}
        </div>
      </div>
  )
}


export default Step;
