import { Text } from 'react-font';


const Partners = () => {
    return (
        <div className='partner-title'>
            <Text family='Unbounded' weight={700}>НАШІ ПАРТНЕРИ</Text>
            <div className='logos'>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo2.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo2.svg' alt='logo'></img></div>
              <div className='logo'><img src='images/logo1.svg' alt='logo'></img></div>
              </div>
        </div>
    )
}

export default Partners;
