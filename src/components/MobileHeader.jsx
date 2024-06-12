import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import Wrapper from '../UI/Wrapper';
import { useEffect } from 'react';

const MobileHeader = (props) => {

  const history = useHistory();

  const {animationClass} = props;

  const navigateTo = (path) => {
    history.push(path);
    if(path === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
      document.querySelector('.b-g').classList.remove('b-112087');
      document.querySelector('.mobile-menu-list').classList.remove('b-112087');
      document.querySelector('.s-c').classList.remove('c-112087');
    } else {
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.b-subscribe').classList.add('c-112087');
      document.querySelector('.b-g').classList.add('b-112087');
      document.querySelector('.mobile-menu-list').classList.add('b-112087');
      document.querySelector('.s-c').classList.add('c-112087');
    }
  }

  useEffect(() => {
    if(history.location.pathname === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
      document.querySelector('.b-g').classList.remove('b-112087');
      document.querySelector('.mobile-menu-list').classList.remove('b-112087');
      document.querySelector('.s-c').classList.remove('c-112087');

    } else {
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.b-subscribe').classList.add('c-112087');
      document.querySelector('.b-g').classList.add('b-112087');
      document.querySelector('.mobile-menu-list').classList.add('b-112087');
      document.querySelector('.s-c').classList.add('c-112087');
    }
  }, [history.location.pathname, animationClass])

  return (
    <Wrapper className='b-g'>
      <Wrapper className='mp-16'>
    <div className={`mobile-menu `}>
          <div className={`mobile-menu-list ${animationClass}`}>
            <div onClick={() => navigateTo('/ambassador')}><div className='f-s-16 l-h-24  unbounded-700'>Грантова Програма</div></div>
            <div onClick={() => navigateTo('/subscribe')}><div className='f-s-16 l-h-24 unbounded-700'>Амбасадори</div></div>
            <div><button className='f-s-16 l-h-24 unbounded-700'>Стати Амбасадором</button></div>
            <div><button className='s-c b-faeddd c-ad4a27 f-s-16 l-h-24 unbounded-700'>Отримати Підтримку</button></div>
          </div>
        </div>
        </Wrapper>
        </Wrapper>
  );
}

export default MobileHeader;
