import { Text } from 'react-font';

const CardSubscribe = (props) => {

  const {title, price, values, button} = props;

  return (
    <div className="card-subscribe p-l-32">
      <div className='m-t-40 m-b-24 c-112087'><Text family='Unbounded' weight={700}>{title}</Text></div>
      <div className='l-h-50 f-s-40 m-b-24 c-112087'><Text family='Unbounded' weight={700}>{price}</Text></div>
        {values.map((value, index) => <div className='m-b-24 c-2b2624' key={index}><Text family='Mulish' weight={400}>&#8226; {value}</Text></div>)}
      <button className='m-b-24 h-48 w-260 b-112087 c-faeddd l-h-24 f-s-16'><Text family='Unbounded' weight={700}>{button}</Text></button>
    </div>
  );
}

export default CardSubscribe;
