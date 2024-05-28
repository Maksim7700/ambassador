import { Text } from 'react-font';


const Footer = () => {
  return (
    <footer>
      <div className='footer-title'>
        <img src='images/sb-dr.svg' alt='Logo'/>
      </div>
      <div>
        <div className='contact'>
          <div>
            <div className='vul'><Text family='Unbounded' weight={700}>вул. Стеана Бандери, 14</Text></div>
            <div className='phone'><Text family='Unbounded' weight={700}>+380 50 762 88 15</Text></div>
          </div>
          <div className='social'>
            <div className='news'><Text family='Unbounded' weight={700}>Підпишись на остінні новини:</Text></div>
            <div className='social-logo'>
              <img src='images/_Facebook.svg' alt='Facebook'/>
              <img src='images/instagram.svg' alt='Instagram'/>
            </div>
          </div>
        </div>
        <hr/>
        <div className='ad'>
          <div className='security'><Text family='Montserrat' weight={400}>© 2024 Амбасадори Дрогобича. Всі права захищено. Політика конфіденційності.</Text></div>
          <div className='project'>
            <div><Text family='Montserrat' weight={400}>Проект надихнувся:</Text></div>
            <div><img src='images/footer-logo.svg' alt='footer-logo'/></div>
          </div>
          <div className='dev'>
            <div><Text family='Montserrat' weight={400}>Дизайн та розробка:</Text></div>
            <div>
              <img src='images/bigshare.svg' alt='Logo'/>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
