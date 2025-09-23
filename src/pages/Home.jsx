import ProjectCard from '../components/ProjectCard'
import { projects } from '../data/projects'

export default function Home(){
    return (
        <>
            <section className="card" style={{marginBottom:24}}>
                <h2>Java / React Full-Stack Engineer</h2>
                <p className="muted">Microservices & moderne UIs (React, Vite).</p>
            </section>

            <section id="projects">
                <h2 style={{margin:'0 0 12px'}}>Highlighted Projects</h2>
                <div className="grid">
                    {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
                </div>
            </section>
        </>
    )
}
