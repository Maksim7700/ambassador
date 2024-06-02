
const Assessment = () => {
  return (
    <div className='assesment-title'>
      <div className='unbounded-700'>КРИТЕРІЇ ОЦІНЮВАННЯ</div>
      <div className='asssesment-info'>
        <div className='col'>
          <div className='mobile-col'>
          <div className='as-title l-h-30'><div className='unbounded-700'>Інноваційність</div></div>
          <div className='as-desc l-h-27'>
            <div className='mulish-400'>&#8226; В чому інноваційність проєкту: інновація цінності, технологічна інновація, нова бізнес модель;</div>
            <div className='mulish-400'>&#8226; Можливість існування схожих/ідентичних проєктів, чітке розуміння унікальності проєкту.</div>
          </div>
          </div>
        </div>
        <div className='col'>
        <div className='mobile-col'>
        <div className='as-title l-h-30'><div className='unbounded-700'>Компетентність</div></div>
          <div className='as-desc l-h-27'><div className='mulish-400'>&#8226; Кваліфікація виконавців, загальна адміністративна та технічна спроможність.</div></div>
        </div>
        </div>
        <div className='col'>
        <div className='mobile-col'>
          <div className='as-title l-h-30'><div className='unbounded-700'>Стійкість</div></div>
          <div className='as-desc l-h-27'><div className='mulish-400'>&#8226; Наявність моделі самопідтримки;</div>
          <div className='mulish-400'>&#8226; Як довго проєкт працюватиме/існуватиме.</div></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
