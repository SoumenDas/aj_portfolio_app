export default function ProjectGallery({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="glass-panel" style={{ padding: '3rem', textAlign: 'center', marginTop: '2rem' }}>
        <h3 style={{ color: 'var(--text-secondary)' }}>The AI could not find any projects matching your query.</h3>
        <p>Try searching for "dashboard", "finance", or "UI design".</p>
      </div>
    );
  }

  return (
    <div className="gallery-grid">
      {projects.map((project, index) => (
        <div 
          className="glass-panel project-card animate-fade-in" 
          key={project.id}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="project-img-wrapper">
            <img src={project.image} alt={project.title} className="project-img" />
          </div>
          <div className="project-info">
            <span className="project-category">{project.category}</span>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-tags">
              {project.tags.map(tag => (
                <span key={tag} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
