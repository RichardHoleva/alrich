import { useState } from 'react'
import ProjectCard from './ProjectCard'
import Reveal from './Reveal'
import FamilyCottage from '/ALRICH/images/side_photo.png'
import FamilyHouse from '/ALRICH/images/back.png'
import interior from '/ALRICH/images/interier.png'
import Vila from '/ALRICH/images/ModernVila.png'
import OpenKitchen from '/ALRICH/images/OpenKitchen.png'
import Minimalistic from '/ALRICH/images/Minimalistic.png'
import publicImg from '/ALRICH/images/public.png'

const PROJECTS = [
  { id: 1, category: 'Residential', year: '2023', title: 'Family Cottage',         image: FamilyCottage },
  { id: 2, category: 'Residential', year: '2024', title: 'Family House',           image: FamilyHouse },     
  { id: 3, category: 'Interior', year: '2020', title: 'Skylight Bedroom',           image: interior },
  { id: 4, category: 'Residential',    year: '2024', title: 'Modern Villa',       image: Vila },
  { id: 5, category: 'Interior',    year: '2019', title: 'Open Kitchen Interior',  image: OpenKitchen},
  { id: 6, category: 'Interior',    year: '2025', title: 'Minimalistic Interior',  image: Minimalistic},
  { id: 7, category: 'Public',      year: '2023', title: 'Commercial Warehouse',   image: publicImg},
]

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
