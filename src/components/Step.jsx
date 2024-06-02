const Step = (props) => {
  const {isLast, date, step, title, desc} = props;
  return (
    <div className={`step-block ${isLast ? 'step-block-last' : ''}`}>
        <div className='step-date'><div className='mulish-400'>{date}</div></div>
        <div className='symbol'>
        <div className={`${props.className}`}>
        </div>
        <div className={!isLast ? `line` : ''}></div>
        </div>
        <div className='step-desc'>
          <div className='date'><div family='Mulish' weight={500}>{date}</div></div>
          <div>
            <div className='unbounded-700'>{step} <br/> {title}</div>
          </div>
          {!isLast && <div>
            <div className='mulish-400'>{desc}</div>
          </div>}
        </div>
      </div>
  )
}


export default Step;
