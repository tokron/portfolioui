import { useMemo, useState } from 'react'
import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import FilterBar from './components/FilterBar'
import { projects } from './data/projects'

export default function App(){
    const [selected, setSelected] = useState('All')
    const tags = useMemo(() => [...new Set(projects.flatMap(p => p.tech))].sort(), [])
    const filtered = useMemo(
        () => selected==='All' ? projects : projects.filter(p => p.tech.includes(selected)),
        [selected]
    )

    return (
        <div className="container">
            <Header />
            <section className="card" style={{marginBottom:24}}>
                <h2>Java / React Full-Stack Engineer</h2>
                <p style={{color:'var(--muted)'}}>Microservices & moderne UIs.</p>
            </section>
            <section id="projects">
                <h2 style={{margin:'0 0 12px'}}>Highlighted Projects</h2>
                <FilterBar tags={tags} selected={selected} onChange={setSelected}/>
                <div className="grid">
                    {filtered.map(p => <ProjectCard key={p.slug} {...p} />)}
                </div>
            </section>
        </div>
    )
}
