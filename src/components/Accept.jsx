import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Accept = (props) => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <><div id={props.id} data-aos='fade-up' className='accept-title'><div className='unbounded-700'>{props.title}</div></div>
    <div data-aos='fade-up' className='accept-info'>
      <div data-aos='fade-up' className='accept-info-inside-box'>
      <div data-aos='fade-up' className='accept-desc l-h-27'>
        <div data-aos='fade-up' className='accept-desc-inside-box'>
        <div data-aos='fade-up'><div className='mulish-400'>1. Завантажте форму заявки та бюджету.</div></div>
        <div data-aos='fade-up'><div className='mulish-400'>2. Надішліть заповнені документи на <u><b><a style={{color: '#FFFFFF'}} href='https://mail.google.com/mail/u/0/#inbox?compose=jrjtXLCPZZsnQzHwlLBrDGcNsNpwRnkCsWGRDjwwKCWgvvxtrrDTVsQsXlzSqSvSgdPqkSWQ' target='_blank' rel="noreferrer">grants@dyma.foundation</a></b></u> з темою листа «Амбасадори Дрогобича_Заявка на ґрант”</div></div>
        </div>
      </div>
      <div data-aos='fade-up' className='accept-buttons'>
        <button className='cursor first-hover'><div className='unbounded-700'>Офіційні Правила</div></button>
        <button className='cursor second-hover'><div className='unbounded-700'>Отримати Підтримку</div></button>
      </div>
      </div>
    </div></>
  )
}


export default Accept;
