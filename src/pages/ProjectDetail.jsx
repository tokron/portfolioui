import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectDetail(){
    const { slug } = useParams()
    const p = projects.find(x => x.slug === slug)

    if(!p){
        return (
            <div className="card">
                <h2>Not found</h2>
                <p className="muted">Project “{slug}” existiert nicht.</p>
                <Link to="/" style={{color:'var(--brand)'}}>← Back</Link>
            </div>
        )
    }

    return (
        <article className="card">
            <h2>{p.title}</h2>
            <p className="muted">{p.description}</p>
            <div className="badges" style={{marginTop:10}}>
                {p.tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
            <div style={{marginTop:12}}>
                <a className="btn" href={p.href} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
            <div style={{marginTop:16}}>
                <Link to="/" style={{color:'var(--brand)'}}>← Back</Link>
            </div>
        </article>
    )
}
