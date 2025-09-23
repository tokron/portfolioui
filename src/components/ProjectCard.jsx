export default function ProjectCard({ title, description, tech, href }){
    return (
        <article className="card">
            <h3 style={{margin:0}}>{title}</h3>
            <p style={{color:'var(--muted)'}}>{description}</p>
            <p style={{margin:'8px 0'}}><small>{tech.join(' · ')}</small></p>
            <a href={href} target="_blank" rel="noreferrer" style={{color:'var(--brand)'}}>View</a>
        </article>
    );
}
