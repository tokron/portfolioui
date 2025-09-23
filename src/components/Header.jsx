export default function Header(){
    return (
        <header style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:24}}>
            <h1 style={{fontSize:18}}>Tobias Kronsteiner</h1>
            <nav className="nav">
                <a href="#projects">Projects</a>
                <a href="https://github.com/<your-username>" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://www.linkedin.com/in/<your-handle>" target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>
        </header>
    );
}
