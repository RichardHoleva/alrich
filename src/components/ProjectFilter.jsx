import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import { PROJECTS } from '../data/projects'

const TABS = ['All', 'Residential', 'Interior', 'Public']

export default function ProjectFilter() {
  const [active, setActive] = useState('All')

  const visible = active === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active)

  return (
    <section className="projects">

      <div className="projects__tabs">
        {TABS.map(tab => {
          const count = tab === 'All'
            ? PROJECTS.length
            : PROJECTS.filter(p => p.category === tab).length

          return (
            <button
              key={tab}
              className={`projects__tab ${active === tab ? 'projects__tab--active' : ''}`}
              onClick={() => setActive(tab)}
            >
              {tab.toUpperCase()} <span className="projects__tab-count">{count}</span>
            </button>
          )
        })}
      </div>

      <div className="projects__grid">
        {visible.map((project, i) => (
          <Reveal key={project.id} delay={i * 80}>
            <ProjectCard
              id={project.id}
              category={project.category}
              year={project.year}
              title={project.title}
              image={project.image}
            />
          </Reveal>
        ))}
      </div>

    </section>
  )
}
