import Container from '../UI/Container';
import Wrapper from '../UI/Wrapper';
import logo from '../images/logo.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';
import MobileHeader from './MobileHeader';

const NavBar = () => {
  const history = useHistory();

  const [menu, setMenu] = useState(false);
  const openCloseMenu = () => {
    setMenu(!menu);
  }

  const [animationClass, setAnimationClass] = useState('none');

  useEffect(() => {
    if (!menu && animationClass === 'none') {
    } else if  (menu) {
      setAnimationClass('slideUp-header');
    } else {
      setAnimationClass('slideUpOut-header');
    }
  }, [animationClass, menu]);

  const navigateTo = (path) => {
    history.push(path);
    window.scrollTo({
      top: 0
    });
    if(path === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
      document.querySelector('.first-hover').classList.remove('hover-16279D');
    } else {
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.first-hover').classList.add('hover-16279D');
      document.querySelector('.b-subscribe').classList.add('c-112087');
    }
  }

  useEffect(() => {
    if(history.location.pathname === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
      document.querySelector('.first-hover').classList.remove('hover-16279D');
    } else {
      document.querySelector('.first-hover').classList.add('hover-16279D');
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.b-subscribe').classList.add('c-112087');
    }
  }, [history.location, history.location.pathname]);

  const changeBackground = () => {
    if (window.scrollY > 50) {
      document.querySelector('.main').classList.add('box-shadow-header');
  } else {
      document.querySelector('.main').classList.remove('box-shadow-header');
  }
  }
  window.addEventListener('scroll', changeBackground);

  return (
    <Wrapper className={`main ${history.location.pathname === '/ambassador' ? '': 'c-112087'} header`}>
    <Container className='p-16 header-mobile'>
      <nav>
        <ul>
          <li onClick={() => navigateTo('/ambassador')}><img src={logo} alt='Abmassador'></img></li>
          <li><div onClick={() => navigateTo('/ambassador')} className='text-hover c-faeddd cursor unbounded-700'>Грантова Програма</div></li>
          <li><div onClick={() => navigateTo('/subscribe')}className='text-hover c-faeddd cursor unbounded-700'>Амбасадори Дрогобича</div></li>
        </ul>
        <ul>
          <li className='first-hover '><div className='cursor unbounded-700 '>Стати Амбасадором</div></li>
          <li className='second-hover cursor b-subscribe' ><div className='unbounded-700'>Отримати Підтримку</div></li>
        </ul>
        <label style={{color: 'white'}} className={`cursor navbar-toggler ${menu ? '' : 'margin-top-more'}`} onClick={openCloseMenu}>
          <span className={`bar-toggle ${!menu ? '' : 'bar-1'}`}></span>
          <span className={`bar-toggle ${!menu ? '' : 'bar-2'}`}></span>
          <span className={`bar-toggle ${!menu ? '' : 'bar-3'}`}></span>
        </label>
      </nav>
      {<MobileHeader animationClass={animationClass}/>}
    </Container>
    </Wrapper>
  )
}


export default NavBar;
