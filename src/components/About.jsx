import ResumeBtn from './button/ResumeBtn';
import AnimateInView from '../layout/AnimateInView';

export default function About({ summary }) {
  return (
    <section className='about' >
      <div className='container'>
        <AnimateInView direction='translateY(200px)'>
          <div className='content'>
            <div>
              <h2>{summary.title}</h2>
            </div>
            <div>
              <p>{summary.description1}</p>
              <p>{summary.description2}</p>
              <p>{summary.description3}</p>
              <ResumeBtn />
            </div>
          </div>
        </AnimateInView>
      </div>
    </section >
  );
};