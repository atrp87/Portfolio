import brandLogo from '../assets/brand/brand.svg';
import SocialBtn from './button/SoicalBtn';
import AnimateInView from '../layout/AnimateInView';

export default function Header() {
  return (
    <header className='header'>
      <div className='header__bg'></div>
      <div className='header__content'>
        <AnimateInView direction='translateX(-400px)'>
          <div className='header__pic'>
            <div className='header__pic-bg'></div>
            <SocialBtn />
          </div>
        </AnimateInView>
        <AnimateInView direction='translateX(400px)'>
          <div className='header__brand'>
            <div className='header__brand-name'>
              <img src={brandLogo} alt='Andrew Peattie' />
              <div className='header__brand-subname'>Web Dev</div>
            </div>
          </div>
        </AnimateInView>
      </div>
    </header>
  );
};