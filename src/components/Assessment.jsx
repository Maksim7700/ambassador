import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Assessment = () => {
  useEffect(() => {
    AOS.init();
  });

  return (
    <div data-aos='fade-up' className='assesment-title'>
      <div data-aos='fade-up' className='unbounded-700'>КРИТЕРІЇ ОЦІНЮВАННЯ</div>
      <div data-aos='fade-up' className='asssesment-info'>
        <div data-aos='fade-up' className='col'>
          <div cdata-aos='fade-up' lassName='cmobile-col'>
          <div data-aos='fade-up' className='as-title l-h-30'><div className='unbounded-700'>Інноваційність</div></div>
          <div data-aos='fade-up' className='as-desc l-h-27'>
            <div data-aos='fade-up' className='mulish-400'>&#8226; В чому інноваційність проєкту: інновація цінності, технологічна інновація, нова бізнес модель;</div>
            <div data-aos='fade-up' className='mulish-400'>&#8226; Можливість існування схожих/ідентичних проєктів, чітке розуміння унікальності проєкту.</div>
          </div>
          </div>
        </div>
        <div data-aos='fade-up' className='col'>
        <div data-aos='fade-up' className='mobile-col'>
        <div data-aos='fade-up' className='as-title l-h-30'><div className='unbounded-700'>Компетентність</div></div>
          <div data-aos='fade-up' className='as-desc l-h-27'><div className='mulish-400'>&#8226; Кваліфікація виконавців, загальна адміністративна та технічна спроможність.</div></div>
        </div>
        </div>
        <div data-aos='fade-up' className='col'>
        <div data-aos='fade-up' className='mobile-col'>
          <div data-aos='fade-up' className='as-title l-h-30'><div className='unbounded-700'>Стійкість</div></div>
          <div data-aos='fade-up' className='as-desc l-h-27'><div className='mulish-400'>&#8226; Наявність моделі самопідтримки;</div>
          <div data-aos='fade-up' className='mulish-400'>&#8226; Як довго проєкт працюватиме/існуватиме.</div></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
