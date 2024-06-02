import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const MobileHeader = () => {

  const history = useHistory();


  const navigateTo = (path) => {
    history.push(path);
    if(path === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
    } else {
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.b-subscribe').classList.add('c-112087');
    }
  }

  return (
    <div className='mobile-menu'>
          <div className={`mobile-menu-list`}>
            <div onClick={() => navigateTo('/ambassador')}><div className='f-s-16 l-h-24  unbounded-700'>Грантова Програма</div></div>
            <div onClick={() => navigateTo('/ambassador')}><div className='f-s-16 l-h-24 unbounded-700'>Амбасадори</div></div>
            <div onClick={() => navigateTo('/ambassador')}><div className='f-s-16 l-h-24 unbounded-700'>Стати Амбасадором</div></div>
            <div onClick={() => navigateTo('/subscribe')}><div className='f-s-16 l-h-24 unbounded-700'>Отримати Підтримку</div></div>
          </div>
        </div>
  );
}

export default MobileHeader;
