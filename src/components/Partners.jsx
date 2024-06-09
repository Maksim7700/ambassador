import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Partners = () => {

    useEffect(() => {
        AOS.init();
      });

    return (
        <div data-aos='fade-up' className='partner-title'>
            <div data-aos='fade-up' className='unbounded-700'>НАШІ ПАРТНЕРИ</div>
            <div className='logos'>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo2.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo2.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo2.svg' alt='logo'></img></div>
              </div>
        </div>
    )
}

export default Partners;
