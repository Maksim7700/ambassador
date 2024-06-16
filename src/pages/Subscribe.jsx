import Container from '../UI/Container';
import Wrapper from '../UI/Wrapper';
import grand from '../images/grand.svg';
import CardSubscribe from '../components/CardSubscribe';
import Questions from '../components/Questions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Subscribe = () => {

  useEffect(() => {
    AOS.init();
  });

  return (
    <Wrapper>
      <Wrapper className='p-64 ambassador b-112087'>
        <Wrapper className='mp-16'>
        <Container className='containter-sub-top'>
        <div data-aos='fade-up' className='word-wrap-example ambassador-finance unbounded-700'>
              ДОЛУЧИСЬ ДО РОЗВИТКУ МІСТА
            </div>
            <div data-aos='fade-up'>
              <img src={grand} alt="Грантова програма"></img>
            </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='about-grand'>
          <Wrapper className='about-grand-background mp-16'>
            <Container className='about-grand-containte'>
              <div data-aos='fade-up' className='word-wrap-example about-grand-title c-112087 unbounded-700'>
              АМБАСАДОРИ ДРОГОБИЧА -
              </div>
              <div data-aos='fade-up' className='about-grand-title unbounded-700'>
              <span data-aos='fade-up' className='c-2b2624 word-wrap-example'>ЦЕ СПІЛЬНОТА ЛЮДЕЙ,</span>
              </div>
              <div data-aos='fade-up' className='word-wrap-example subscribe-support c-2b2624 m-t-32 f-s-40 l-h-60 unbounded-700'>
                  ЯКІ ОБʼЄДНАЛИСЯ ДЛЯ ПІДТРИМКИ <span className='word-wrap-example c-112087'>МІСЬКИХ ПРОЄКТІВ </span>
              </div>
            </Container>
          </Wrapper>
      </Wrapper>
      <Wrapper className='p-150 ambassador b-112087'>
        <Wrapper className='mp-16'>
        <Container className='progress-container-block'>
        <div data-aos='fade-up' className='word-wrap-example ambassador-finance unbounded-700'>
        МИ ШУКАЄМО 100 ЛЮДЕЙ, ЯКІ ЗМІНЮВАТИМУТЬ ДРОГОБИЧ
            </div>
            <div data-aos='fade-up' className='loading'>
              <div>
              <img src={'./images/100.svg'} alt="Грантова програма"></img>
              </div>
              <div className='unbounded-700'>Наша ціль: створити прозорий цільовий фонд, призначений для фінансування соціальних проєктів та стартапів, спрямованих на розвиток міста</div>
            </div>
            <div data-aos='fade-up'>
            <progress style={{width: '100%', height: '17px'}} value="85" max="100" />
            <div data-aos='fade-up' className='progress-desc m-t-32 f-s-20 l-h-30 unbounded-700'>85 із 100 вже з нами</div>
            </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='b-faeddd target-container p-150'>
        <Wrapper className='mp-16'>
        <Container>
          <div id='follows' data-aos='fade-up' className='word-wrap-example target-subscribe-title m-b-64 f-s-64 l-h-96 c-2b2624 unbounded-700'>
            ДОЛУЧИТИСЬ ДО АМБАСАДОРІВ
          </div>
          <div data-aos='fade-up' className='target-subscribe-box d-flex gap-16 j-c-center'>
            <CardSubscribe title={'Місячна підписка'} price={'200 грн'} values={[
              'Підписка складає 200 грн на місяць;',
              'Двічі на рік менеджерська команда на сайті проєкту публікує звіт щодо грантових сезонів;',
              'Амбасадор може відписатися і підписатися, коли йому зручно;',
              'Амбасадор може брати участь у грантовому сезоні'
            ]}
            button={'Стати Амбасадором'}/>
            <CardSubscribe title={'Річна підписка'} price={'2200 грн'} values={[
              'Сезонна підписка складає 3000 грн (500 грн/6 місяців). Сума вноситься одним внеском, не може бути розбита;',
              'Амбасадор потрапляє у закритий чат “Амбасадорів міста”',
              'Амбасадор бере участь у голосуванні за журі, які оцінюватимуть проєкти;',
              'Амбасадор отримує мерч проєкту у подарунок;',
              'Амбасадорів двічі на рік запрошено на неформальну зустріч;',
              'Впродовж сезону менеджерська команда інформує амбасадорів щодо грантового сезону;',
              'Після реалізації проєкту менеджерська команда звітується перед амбасадорами щодо реалізованих проєктів. ',
              'Амбасадор після завершення грантового сезону має можливість продовжити підписку. ',
              'Амбасадор після завершення грантового сезону має можливість скасувати підписку. За таких умов його буде видалено з чату;',
              'Амбасадор може брати участь у грантовому сезоні'
            ]}
            button={'Стати Амбасадором'}/>
          </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='p-150 ambassador b-112087'>
        <Wrapper className='mp-16'>

        <Container>
        <div data-aos='fade-up' className='projects c-faeddd f-s-64 l-h-96 m-b-64'><div className='word-wrap-example unbounded-700'>ЯКІ ПРОЄКТИ БУЛИ ПІДТРИМАНІ?</div></div>
        <div data-aos='fade-up' style={{textAlign: 'center'}} className='p-64 c-faeddd project-box'><div className='unbounded-700'>Зовсім скоро тут з*являться перші проєкти</div></div>
        </Container>
        </Wrapper>
      </Wrapper>

      <Wrapper className='p-150 b-faeddd sub-accept'>
        <Wrapper className='mp-16'>

        <Container>
        <div data-aos='fade-up' className='ambassador-finance c-2b2624 t-a-center unbounded-700 word-wrap-example'>
        ЯК МИ ФУНКЦІОНУЄМО?
            </div>
            <div data-aos='fade-up' className='accept-info border-122087'>
      <div data-aos='fade-up' className='accept-desc'>
        <div className='c-112087'><div className='unbounded-700'>Більше про те, як функціонують Амбасадори тут</div></div>
      </div>
      <div data-aos='fade-up' className='accept-buttons'>
        <button style={{border: '1px solid #112087'}} className='cursor second-hover c-112087'><div className='unbounded-700'>Офіційні Правила</div></button>
        <button style={{border: 'none'}} className='cursor hover-16279D b-112087 c-faeddd'><div className='unbounded-700'>Стати Амбасадором</div></button>
      </div>
    </div>
        </Container>
        </Wrapper>
        </Wrapper>
        <Wrapper className='q b-112087'>
        <Wrapper className='mp-16'>
          <Container>
            <div data-aos='fade-up' className='q-title'><div className='unbounded-700'>ПОШИРЕНІ ЗАПИТАННЯ</div></div>
            <Questions title='Звідки беруться гроші?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи може одна людина подати свій проєкт?' desc='Ми віримо, що ти — багатофункціональна людина. Але погодься, цікавіше та набагато легше працювати у команді. Тому мінімальний склад команди — дві людини.'/>
            <Questions title='Чи можемо ми написати проєкт для того, щоб утеплити наш будинок або замінити каналізаційні труби?' desc='Ми підтримуємо проєкти, спрямовані на розвиток громади та підвищення якості її життя. Тому проєкти з комунальних питань не фінансуються.'/>
            <Questions title='Чи може одна організація подавати дві та більше заявок?' desc='Одна організація, ініціатива може подати одну заявку впродовж  ґрантового сезону. '/>
            <Questions title='Чи можна подавати проєкти із ОТГ Дрогобича?' desc='Проєкти повинні бути спрямовані на розвиток Дрогобича. Наразі фінансування проєктів для навколишніх сіл та Стебника не передбачено. '/>
            <Questions title='Чи потрібно звітуватися після отримання ґрантових коштів?' desc='Так, після реалізації проєкту, потрібно заповнити описовий та фінансовий звіти.'/>
            <Questions title='Хто буде оцінювати ґрантові заявки?' desc='Заявки буде оцінювати журі, яке складатиметься із 50% місцевих експертів Дрогобича, а 50% із запрошених експертів в Україні. Журі обиратиметься Амбасадорами і Амбасадорками Дрогобича.'/>
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='partners'>
        <Wrapper className='mp-16'>
            <Container>
              <Partners />
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='footer-a b-112087'>
        <Wrapper className='mp-16'>
          <Container>
            <Footer />
          </Container>
          </Wrapper>
      </Wrapper>
    </Wrapper>
  );
}

export default Subscribe;
