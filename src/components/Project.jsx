export default function Project({ title, image, description, siteLink, repoLink }) {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center'
        justifyContent: 'center',
        padding: '20px'
    };
    return (
        <div className="project-card" style={backgroundStyle}>
            <div className="row project-background">
                <div>
                    <h2 className="display-1 text-white row">{title}</h2>
                    <p className="display-5 row">{description}</p>
                </div>
                <a className="col" href={siteLink} target="_blank" rel="noopener noreferrer">View Demo</a>
                <a className="col" href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
            </div>
        </div>
    )
}