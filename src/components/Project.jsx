export default function Project({ title, image, description, siteLink, repoLink }) {
    const backgroundStyle = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover', 
        backgroundPosition: 'center',  
        height: '300px',  
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',  
        padding: '20px' 
    };
    return (
        <div className="project-card" style={backgroundStyle}>
            {/* <img src={image} alt={title} /> */}
            <h2 className="display-1 text-white">{title}</h2>
            <p className="display-5">{description}</p>
            <a href={siteLink} target="_blank" rel="noopener noreferrer">View Demo</a>
            <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
        </div>
    )
}