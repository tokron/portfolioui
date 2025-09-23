import Header from './components/Header'
import ProjectCard from './components/ProjectCard'
import { projects } from './data/projects'

export default function App(){
    return (
        <div className="container">
            <Header />

            <section className="card" style={{marginBottom:24}}>
                <h2>Java / React Full-Stack Engineer</h2>
                <p className="muted">Microservices (Spring Boot, PostgreSQL, RabbitMQ) & moderne UIs (React, Vite).</p>
                <div className="badges" style={{marginTop:10}}>
                    <span className="badge">Java 21</span>
                    <span className="badge">Spring Boot 3</span>
                    <span className="badge">React</span>
                    <span className="badge">PostgreSQL</span>
                </div>
                <div style={{marginTop:14, display:'flex', gap:10}}>
                    <a className="btn primary" href="mailto:<public-email>">Contact</a>
                    <a className="btn" href="/cv.pdf">Download CV</a>
                </div>
            </section>

            <section id="projects">
                <h2 style={{margin:'0 0 12px'}}>Highlighted Projects</h2>
                <div className="grid">
                    {projects.map(p => <ProjectCard key={p.slug} {...p} />)}
                </div>
            </section>
        </div>
    );
}
