import Wrapper from '../UI/Wrapper';
import grand from '../images/grand.svg';
import Container from '../UI/Container';
import Card from '../components/Card';
import StepProgressBar from '../components/StepProgressBar';
import Accept from '../components/Accept';
import Assessment from '../components/Assessment';
import Questions from '../components/Questions';
import Partners from '../components/Partners';
import Footer from '../components/Footer';

const Abmassador = () => {
  return (
    <Wrapper>
        <Wrapper className='ambassador'>
          <Wrapper className=' mp-16'>
          <Container>
            <div className='ambassador-finance m-b-64 unbounded-700'>
              ОТРИМАЙ ФІНАНСУВАННЯ НА ВТІЛЕННЯ ВЛАСНОГО ПРОЕКТУ
            </div>
            <div className='p-b-64'>
              <img src={grand} alt="Грантова програма"></img>
            </div>
          </Container>
          </Wrapper>
        </Wrapper>
        <Wrapper className='about-grand'>
          <Wrapper className='about-grand-background mp-16'>
            <Container className='about-grand-containte'>
              <div className='about-grand-title unbounded-700'>
                ПРО ГРАНТ
              </div>
              <div className='card-grid-container'>
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
          <div className='target unbounded-700'>ТЕМАТИЧНІ НАПРЯМКИ ПРОЕКТІВ</div>
            <div className='target-cards gap-16'>
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
            <Accept />
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='assesment'>
        <Wrapper className='mp-16'>
          <Container>
            <Assessment/>
          </Container>
        </Wrapper>
      </Wrapper>
      <Wrapper className='q'>
        <Wrapper className='mp-16'>
          <Container>
            <div className='q-title'><div className='unbounded-700'>ПОШИРЕНІ ЗАПИТАННЯ</div></div>
            <Questions title='Звідки беруться гроші?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи може одна людина подати свій проєкт?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи може одна організація подавати дві та більше заявок?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи можна подавати проєкти із ОТГ Дрогобича?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
            <Questions title='Чи можемо ми написати проєкт для того, щоб утеплити наш будинок або замінити каналізаційні труби?' desc='Фінансовий фонд формується із благодійних внесків Амбасадорів і Амбасадорок Дрогобича.'/>
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
