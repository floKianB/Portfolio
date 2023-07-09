import AboutMe from './aboutme';
import Experiences from './experiences/experiences';
import Projects from './projects/projects';
export default function Home() {
  return (
    <div className="flex-column space-y-0">
      <div id="aboutme" className="h-24"></div>
      <AboutMe />
      <div id="experiences" className="h-20"></div>
      <Experiences />
      <div id="projects" className="h-20"></div>
      <Projects />
    </div>

  )
}
