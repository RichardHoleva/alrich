import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ProjectFilter from '../components/ProjectFilter'
import Reveal from '../components/Reveal'

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
        <div className='project'>
            <Reveal>
              <div className="projects-header">
                <p className="projects-header__label">Portfolio</p>
                <h1 className="projects-header__heading">
                  Selected <em>projects</em>
                </h1>
                <p className="projects-header__body">
                  A decade of houses, interiors and small public buildings drawn slowly,
                  built carefully, and intended to age well. Filter by typology or scroll
                  through the full archive.
                </p>
              </div>
            </Reveal>
      </div>

      <ProjectFilter />
      

      <Footer />
    </>
  )
}
