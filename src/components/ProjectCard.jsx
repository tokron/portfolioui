export default function ProjectCard({ title, description, tech = [], href }){
    return (
        <article className="card">
            <h3>{title}</h3>
            <p className="muted">{description}</p>
            <div className="badges">
                {tech.map(t => <span key={t} className="badge">{t}</span>)}
            </div>
            <div style={{marginTop:12}}>
                <a className="btn" href={href} target="_blank" rel="noreferrer">View on GitHub</a>
            </div>
        </article>
    );
}
