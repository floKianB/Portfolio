import AboutMe from './aboutme';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
export default function Home() {
  return (
    <div className="flex-column space-y-20">
      <AboutMe />
      <Experiences />
      <Projects />
    </div>

  )
}
