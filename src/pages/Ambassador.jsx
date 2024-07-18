import Wrapper from '../UI/Wrapper';
import an1 from '../images/an1.svg'
import an2 from '../images/an2.svg'
import an3 from '../images/an3.svg'
import an4 from '../images/an4.svg'
import Container from '../UI/Container';
import Card from '../components/Card';
import StepProgressBar from '../components/StepProgressBar';
import Accept from '../components/Accept';
import Assessment from '../components/Assessment';
import Questions from '../components/Questions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';

const Abmassador = () => {

  const images = [an4, an2, an1, an3];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % 4);
    }, 900);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init();
  });

  return (
    <Wrapper>
        <Wrapper className='ambassador'>
          <Wrapper className=' mp-16'>
          <Container>
            <div data-aos='fade-up' className='word-wrap-example ambassador-finance m-b-64 unbounded-700'>
              ОТРИМАЙ ФІНАНСУВАННЯ НА ВТІЛЕННЯ ВЛАСНОГО ПРОЕКТУ
            </div>
            <div data-aos='fade-up' className='p-b-64'>
              <img src={images[currentImageIndex]} alt="Грантова програма"></img>
            </div>
          </Container>
          </Wrapper>
        </Wrapper>
        <Wrapper className='about-grand'>
          <Wrapper className='about-grand-background mp-16'>
            <Container className='about-grand-containte'>
              <div data-aos='fade-up' className='about-grand-title unbounded-700'>
                ПРО ГРАНТ
              </div>
              <div data-aos='fade-up' className='card-grid-container'>
                <Card logo={'images/pic1.svg'} title={'Яка сума фінансової підтримки?'} descs={['Амбасадори Дрогобича підтримають проєкти на загальну суму не менше 200 тис гривень. Мінімальна сума ґранту (не може бути зменшена): 20 тис. грн. Максимальна сума ґранту (не може бути збільшена): 40 тис. грн']}/>
                <Card logo={'images/pic2.svg'} title={'Хто може податися на грант?'} descs={['Громадські організації', 'Ініціативні групи', 'Команди друзів, яка бажає змінити місто']}/>
                <Card logo={'images/pic3.svg'} title={'Які вимоги до проєктів?'} descs={['Будуть реалізовані в Дрогобичі', 'Сприятимуть розвитку міста в 4 основних тематичних фокуса', 'Некомерційні, аполітичні, нерелігійні']}/>
              </div>
            </Container>
          </Wrapper>
      </Wrapper>
      <Wrapper className='target-container'>
        <Wrapper className='mp-16'>
        <Container className='target-area'>
          <div data-aos='fade-up' className='target unbounded-700'>ТЕМАТИЧНІ НАПРЯМКИ ПРОЕКТІВ</div>
            <div data-aos='fade-up' className='target-cards gap-16'>
              <Card logo={'images/target1.svg'} title={'Освіта'} descs={['Неформальна освіта', "Ініціативи, пов'язані зі змінами традиційної системи освіти"]}/>
              <Card logo={'images/target2.svg'} title={'Культура і культ. спадщина'} descs={['Виставки', "Мурали", "Просвітницькі події", "Популяризація культурної спадщини міста", "Реставрація тощо"]}/>
              <Card logo={'images/target3.svg'} title={'Урбаністика'} descs={['Розвиток міського середовища', "Зелені зони", "Тактичний урбанізм тощо"]}/>
              <Card logo={'images/target4.svg'} title={'Підтримка ветеранів'} descs={['Забезпечення інклюзії', "Психологічна підтримка", "Дружність міста до Захисників та Захисниць"]}/>
            </div>
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='bar'>
        <Wrapper className='mp-16'>
        <Container>
          <StepProgressBar />
        </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='accept'>
        <Wrapper className='mp-16'>
          <Container>
            <Accept title={'ЯК ПОДАТИСЬ?'} id='accept-move'/>
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='assesment'>
        <Wrapper className='mp-16'>
          <Container>
            <Assessment id='move-accept'/>
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='q'>
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
      <Wrapper className='footer-a'>
        <Wrapper className='mp-16'>
          <Container>
            <Footer />
          </Container>
          </Wrapper>
      </Wrapper>
    </Wrapper>
  )
}

export default Abmassador;
