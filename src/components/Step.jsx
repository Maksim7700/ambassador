import { Text } from 'react-font'

const Step = (props) => {
  const {isLast, date, step, title, desc} = props;
  return (
    <div className={`step-block ${isLast ? 'step-block-last' : ''}`}>
        <div className='step-date'><Text family='Mulish' weight={400}>{date}</Text></div>
        <div className='symbol'>
        <div className={`${props.className}`}>
        </div>
        <div className={!isLast ? `line` : ''}></div>
        </div>
        <div className='step-desc'>
          <div>
            <Text family='Unbounded' weight={700}>{step} <br/> {title}</Text>
          </div>
          {!isLast && <div>
            <Text family='Mulish' weight={400}>{desc}</Text>
          </div>}
        </div>
      </div>
  )
}


export default Step;
