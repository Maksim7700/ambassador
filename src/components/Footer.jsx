const Footer = () => {
  return (
    <footer>
      <div className='footer-title'>
        <img src='images/sb-dr.svg' alt='Logo'/>
      </div>
      <div>
        <div className='contact'>
          <div>
            <div className='vul'><div className='unbounded-700'>вул. Стеана Бандери, 14</div></div>
            <div className='phone'><div className='unbounded-700'>+380 50 762 88 15</div></div>
          </div>
          <div className='social'>
            <div className='news'><div className='unbounded-700'>Підпишись на остінні новини:</div></div>
            <div className='social-logo'>
              <img src='images/_Facebook.svg' alt='Facebook'/>
              <img src='images/instagram.svg' alt='Instagram'/>
            </div>
          </div>
        </div>
        <hr/>
        <div className='ad'>
          <div className='security'><div family='Montserrat' weight={400}>© 2024 Амбасадори Дрогобича. Всі права захищено. Політика конфіденційності.</div></div>
          <div className='project'>
            <div><div family='Montserrat' weight={400}>Проект надихнувся:</div></div>
            <div><img src='images/footer-logo.svg' alt='footer-logo'/></div>
          </div>
          <div className='dev'>
            <div><div family='Montserrat' weight={400}>Дизайн та розробка:</div></div>
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
