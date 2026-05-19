import { useState } from 'react'
import ProjectCard from './ProjectCard'

const PROJECTS = [
  { id: 1, category: 'Residential', year: '2023', title: 'Family Cottage',         image: '/ALRICH/images/Main_hero_image.png' },
  { id: 2, category: 'Residential', year: '2024', title: 'Family House',           image: '/ALRICH/images/back.png'            },
  { id: 3, category: 'Residential', year: '2020', title: 'Modern Villa',           image: '/ALRICH/images/Side.png'            },
  { id: 4, category: 'Interior',    year: '2024', title: 'Skylight Bedroom',       image: '/ALRICH/images/Side_photo.png'      },
  { id: 5, category: 'Interior',    year: '2019', title: 'Open Kitchen Interior',  image: '/ALRICH/images/interier.png'        },
  { id: 6, category: 'Interior',    year: '2025', title: 'Minimalistic Interior',  image: '/ALRICH/images/Side_photo.png'      },
  { id: 7, category: 'Public',      year: '2023', title: 'Commercial Warehouse',   image: '/ALRICH/images/back.png'            },
  { id: 8, category: 'Public',      year: '2021', title: 'Community Centre',       image: '/ALRICH/images/Side.png'            },
  { id: 9, category: 'Public',      year: '2022', title: 'Public Library',         image: '/ALRICH/images/Main_hero_image.png' },
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
        {visible.map(project => (
          <ProjectCard
            key={project.id}
            category={project.category}
            year={project.year}
            title={project.title}
            image={project.image}
          />
        ))}
      </div>

    </section>
  )
}
