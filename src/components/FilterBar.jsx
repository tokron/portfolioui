export default function FilterBar({ tags, selected, onChange }){
    return (
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:12}}>
            {['All', ...tags].map(tag => {
                const active = selected === tag || (selected === 'All' && tag === 'All');
                return (
                    <button key={tag}
                            onClick={() => onChange(tag)}
                            aria-pressed={active}
                            className="card"
                            style={{padding:'6px 10px',borderRadius:999, border: active ? '1px solid var(--brand)' : undefined}}>
                        {tag}
                    </button>
                );
            })}
        </div>
    );
}
