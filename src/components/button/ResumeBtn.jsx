import ResumePDF from '../../assets/Andrew_Peattie__Resume.pdf';

export default function ResumeBtn() {
  return (
    <a
      href={ResumePDF}
      className='resume__btn'
      target='_blank'
      rel='noopener noreferrer'
      aria-label='open Resume PDF'
    >
      Resume
    </a>
  );
}