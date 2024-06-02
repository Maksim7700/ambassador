import { Text } from 'react-font';

const Assessment = () => {
  return (
    <div className='assesment-title'>
      <Text family='Unbounded' weight={700}>КРИТЕРІЇ ОЦІНЮВАННЯ</Text>
      <div className='asssesment-info'>
        <div className='col'>
          <div className='mobile-col'>
          <div className='as-title l-h-30'><Text family='Unbounded' weight={700}>Інноваційність</Text></div>
          <div className='as-desc l-h-27'>
            <Text family='Mulish' weight={400}>&#8226; В чому інноваційність проєкту: інновація цінності, технологічна інновація, нова бізнес модель;</Text>
            <Text family='Mulish' weight={400}>&#8226; Можливість існування схожих/ідентичних проєктів, чітке розуміння унікальності проєкту.</Text>
          </div>
          </div>
        </div>
        <div className='col'>
        <div className='mobile-col'>
        <div className='as-title l-h-30'><Text family='Unbounded' weight={700}>Компетентність</Text></div>
          <div className='as-desc l-h-27'><Text family='Mulish' weight={400}>&#8226; Кваліфікація виконавців, загальна адміністративна та технічна спроможність.</Text></div>
        </div>
        </div>
        <div className='col'>
        <div className='mobile-col'>
          <div className='as-title l-h-30'><Text family='Unbounded' weight={700}>Стійкість</Text></div>
          <div className='as-desc l-h-27'><Text family='Mulish' weight={400}>&#8226; Наявність моделі самопідтримки;</Text>
          <Text family='Mulish' weight={400}>&#8226; Як довго проєкт працюватиме/існуватиме.</Text></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Assessment;
