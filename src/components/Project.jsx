export default function Project({ title, imageUrl, description, siteLink, repoLink }) {
    return (
        <div className="">
        <img src={imageUrl} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={siteLink} target="_blank" rel="noopener noreferrer">View Demo</a>
        <a href={repoLink} target="_blank" rel="noopener noreferrer">View Code</a>
      </div>
    )
}