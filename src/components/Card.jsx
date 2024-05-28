import { Text } from 'react-font';

const Card = (props) => {

  const { title, descs, logo } = props;

  return (
    <div className='card'>
      <div className='card-top'>
        <div className={`card-logo`}>
          <img src={logo} alt='Abmassador'/>
        </div>
        <div className={`card-title`}><Text family='Unbounded' weight={700}>{title}</Text></div>
      </div>
      <div className={`card-desc  `}>
      {descs.map((desc, index) => <div key={index}><Text family='Mulish' weight={400}>&#8226; {desc}</Text></div>)}
      </div>
    </div>
  )
}

export default Card;
