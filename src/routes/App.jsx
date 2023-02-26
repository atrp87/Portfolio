import '../scss/main.scss'
import Banner from '../components/Banner';
import Profile from '../components/Profile';
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import profileData from '../data/profileData';
import LinkButton from '../components/buttons/LinkButton';
import SocialIcons from '../components/buttons/SocialIcons';
import ResumePDF from '../assets/Andrew_Peattie__Resume.pdf';

export default function App() {

  const [profileSummary, profileObjectives] = profileData;

  return (
    <>
      <div className='App'>
        <main>
          <article>
            <Profile
              image={profileSummary.image}
              title={profileSummary.title}
              p1={profileSummary.p1}
              p2={profileSummary.p2}
            >
              <SocialIcons />
            </Profile>

            <Banner />

            <Projects />

            <Profile
              image={profileObjectives.image}
              title={profileObjectives.title}
              p1={profileObjectives.p1}
              p2={profileObjectives.p2}
            >
              <LinkButton to={ResumePDF} type='external'>
                Resume
              </LinkButton>
            </Profile>

            <Blog />
          </article>
        </main>
      </div>
    </>
  );
}
