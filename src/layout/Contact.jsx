import SocialBtn from '../components/button/SoicalBtn';
import AnimateInView from './AnimateInView';

export default function Contact() {

  return (
    <footer id='contact'>
      <AnimateInView direction='translateX(200px)'>
        <div className='container'>
          <h2>Contact</h2>
          <p>
            Feel free to contact me on any platforms, I looking forward to hearing from you.
          </p>
          <SocialBtn />
        </div>
      </AnimateInView>
    </footer >
  );
};