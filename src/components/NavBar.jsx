import Container from '../UI/Container';
import Wrapper from '../UI/Wrapper';
import logo from '../images/logo.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect, useState } from 'react';

const NavBar = () => {

  const history = useHistory();

  const [menu, setMenu] = useState(false);
  const openCloseMenu = () => {
    setMenu(!menu);
  }

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

  useEffect(() => {
    if(history.location.pathname === '/ambassador'){
      document.querySelector('.header').classList.remove('b-112087');
      document.querySelector('.b-subscribe').classList.remove('c-112087');
    } else {
      document.querySelector('.header').classList.add('b-112087');
      document.querySelector('.b-subscribe').classList.add('c-112087');
    }
  }, [history.location.pathname])

  return (
    <Wrapper className={`${history.location.pathname === '/ambassador' ? '': 'c-112087'} header`}>
    <Container className='header-mobile'>
      <nav>
        <ul>
          <li onClick={() => navigateTo('/ambassador')}><img src={logo} alt='Abmassador'></img></li>
          <li><div className='unbounded-700'>Грантова Програма</div></li>
          <li><div className='unbounded-700'>Амбасадори</div></li>
        </ul>
        <ul>
          <li onClick={() => navigateTo('/ambassador')}><div className='unbounded-700'>Стати Амбасадором</div></li>
          <li className='b-subscribe' onClick={() => navigateTo('/subscribe')}><div className='unbounded-700'>Отримати Підписку</div></li>
        </ul>
      <label style={{color: 'white'}} className={`navbar-toggler ${menu ? '' : 'margin-top-more'}`} onClick={openCloseMenu}>
          <span className={`bar-toggle ${!menu ? '' : 'bar-1'}`}></span>
          <span className={`bar-toggle ${!menu ? '' : 'bar-2'}`}></span>
          <span className={`bar-toggle ${!menu ? '' : 'bar-3'}`}></span>
        </label>
      </nav>


    </Container>
    </Wrapper>
  )
}


export default NavBar;
