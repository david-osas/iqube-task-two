import binoculars from '../binoculars.svg';

function Header(){

  return(
    <div className='header'>
      <img src={binoculars} alt='app logo' className='logo'/>
      <div className='header-details'>
        <p className='first-title'>Welcome to <span className='app-name'>CovidWatcher</span></p>
        <p>See a list of the latest Covid-19 statistics from all states in Nigeria</p>
      </div>
    </div>
  );
}

export default Header;
