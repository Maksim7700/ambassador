import { Text } from 'react-font';


const Accept = () => {
  return (
    <><div className='accept-title'><Text family='Unbounded' weight={700}>ЯК ПОДАТИСЬ?</Text></div>
    <div className='accept-info'>
      <div className='accept-desc'>
        <div><Text family='Mulish' weight={400}>1. Завантажте форму заявки та бюджету.</Text></div>
        <div><Text family='Mulish' weight={400}>2. Надішліть заповнені документи на grants@dyma.foundation з темою листа «АмбасадориДрогобича_Заявка на ґрант”</Text></div>
      </div>
      <div className='accept-buttons'>
        <button><Text family='Unbounded' weight={700}>Офіційні Правила</Text></button>
        <button><Text family='Unbounded' weight={700}>Отримати Підписку</Text></button>
      </div>
    </div></>
  )
}


export default Accept;
