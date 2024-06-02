const Card = (props) => {

  const { title, descs, logo } = props;

  return (
    <div className='card'>
      <div className='card-top'>
        <div className={`card-logo`}>
          <img src={logo} alt='Abmassador'/>
        </div>
        <div className={`card-title`}><div className='unbounded-700'>{title}</div></div>
      </div>
      <div className={`card-desc  `}>
      {descs.map((desc, index) => <div key={index}><div className='mulish-400'>&#8226; {desc}</div></div>)}
      </div>
    </div>
  )
}

export default Card;
