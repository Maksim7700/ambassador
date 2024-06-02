import { Text } from 'react-font';
import Container from '../UI/Container';
import Wrapper from '../UI/Wrapper';
import grand from '../images/grand.svg';
import CardSubscribe from '../components/CardSubscribe';
import Questions from '../components/Questions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Subscribe = () => {
  return (
    <Wrapper>
      <Wrapper className='p-64 ambassador b-112087'>
        <Wrapper className='mp-16'>
        <Container className='containter-sub-top'>
        <Text className='ambassador-finance' family='Unbounded' weight={700}>
              ДОЛУЧИСЬ ДО РОЗВИТКУ МІСТА
            </Text>
            <div>
              <img src={grand} alt="Грантова програма"></img>
            </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='about-grand'>
          <Wrapper className='about-grand-background mp-16'>
            <Container className='about-grand-containte'>
              <Text className='about-grand-title c-112087' family='Unbounded' weight={700}>
              АМБАСАДОРИ ДРОГОБИЧА —
              </Text>
              <Text className='about-grand-title' family='Unbounded' weight={700}>
              <span className='c-2b2624'>ЦЕ СПІЛЬНОТА ЛЮДЕЙ,</span>
              </Text>
              <Text className='subscribe-support c-2b2624 m-t-32 f-s-40 l-h-60' family='Unbounded' weight={700}>
                  ЯКІ ОБʼЄДНАЛИСЯ ДЛЯ ПІДТРИМКИ ПРОЄКТІВ РОЗВИТКУ <span className='c-112087'>ДРОГОБИЧА</span>
              </Text>
            </Container>
          </Wrapper>
      </Wrapper>
      <Wrapper className='p-150 ambassador b-112087'>
        <Wrapper className='mp-16'>
        <Container className='progress-container-block'>
        <Text className='ambassador-finance' family='Unbounded' weight={700}>
        МИ ШУКАЄМО 100 ЛЮДЕЙ, ЯКІ ЗМІНЮВАТИМУТЬ ДРОГОБИЧ
            </Text>
            <div>
              <img src={'./images/100.svg'} alt="Грантова програма"></img>
            </div>
            <div>
            <progress style={{width: '100%', height: '17px'}} value="85" max="100" />
            <Text className='progress-desc m-t-32 f-s-20 l-h-30' family='Unbounded' weight={700}>85 із 100 вже з нами</Text>
            </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='b-faeddd target-container p-150'>
        <Wrapper className='mp-16'>
        <Container>
          <Text className=' target-subscribe-title m-b-64 f-s-64 l-h-96 c-2b2624' family='Unbounded' weight={700}>
            ДОЛУЧИТИСЬ ДО АМБАСАДОРІВ
          </Text>
          <div className='target-subscribe-box d-flex gap-16 j-c-center'>
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
        <div className='projects c-faeddd f-s-64 l-h-96 m-b-64'><Text family='Unbounded' weight={700}>ЯКІ ПРОЄКТИ БУЛИ ПІДТРИМАНІ?</Text></div>
        <div style={{textAlign: 'center'}} className='p-64 c-faeddd project-box'><Text family='Unbounded' weight={700}>Зовсім скоро тут з*являться перші проєкти</Text></div>
        </Container>
        </Wrapper>
      </Wrapper>

      <Wrapper className='p-150 b-faeddd sub-accept'>
        <Wrapper className='mp-16'>

        <Container>
        <Text className='ambassador-finance c-2b2624 t-a-center' family='Unbounded' weight={700}>
        ЯК ПОДАТИСЬ?
            </Text>
            <div className='accept-info border-122087'>
      <div className='accept-desc'>
        <div className='c-112087'><Text family='Unbounded' weight={700}>Більше про те, як функціонують Амбасадори тут</Text></div>
      </div>
      <div className='accept-buttons'>
        <button style={{border: '1px solid #112087'}} className='c-112087'><Text family='Unbounded' weight={700}>Офіційні Правила</Text></button>
        <button style={{border: 'none'}} className='b-112087 c-faeddd'><Text family='Unbounded' weight={700}>Отримати Підписку</Text></button>
      </div>
    </div>
        </Container>
        </Wrapper>
        </Wrapper>

        <Wrapper className='q b-112087'>
        <Wrapper className='mp-16'>
          <Container>
            <div className='q-title'><Text family='Unbounded' weight={700}>ПОШИРЕНІ ЗАПИТАННЯ</Text></div>
            <Questions title='Звідки беруться кошти на ґранти?' desc='Ця хвиля відбувається за фінасової підтримки National endowment for democracy в рамках проєкту «Посилення громадянської активності та місцевої демократії»'/>
            <Questions title='Чи може одна людина подавати свій проєкт?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Якщо у мене немає громадської організації, чи можу я отримати ґрант?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Якщо я не живу в Дрогобичі, чи можу брати участь в конкурсі?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи може одна організація подавати дві та більше заявок?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи потрібно звітуватися після отримання ґрантових коштів?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Хто буде оцінювати ґрантові заявки?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
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
