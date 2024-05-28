import { Text } from 'react-font';
import Container from '../UI/Container';
import Wrapper from '../UI/Wrapper';
import logo from '../images/logo.svg';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useEffect } from 'react';

const NavBar = () => {

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
    <Container>
      <nav>
        <ul>
          <li onClick={() => navigateTo('/ambassador')}><img src={logo} alt='Abmassador'></img></li>
          <li><Text family='Unbounded' weight={700}>Грантова Програма</Text></li>
          <li><Text family='Unbounded' weight={700}>Амбасадори</Text></li>
        </ul>
        <ul>
          <li onClick={() => navigateTo('/ambassador')}><Text family='Unbounded' weight={700}>Стати Амбасадором</Text></li>
          <li className='b-subscribe' onClick={() => navigateTo('/subscribe')}><Text family='Unbounded' weight={700}>Отримати Підписку</Text></li>
        </ul>
      </nav>
    </Container>
    </Wrapper>
  )
}


export default NavBar;
