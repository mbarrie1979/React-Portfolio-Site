import Project from "./Project"


const projectData = [
    {
      id: 1,
      title: "Fun Cast",
      imageUrl: "path/to/image1.jpg",
      description: "This is a brief description of Project One.",
      siteLink: "https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/",
      repoLink: "https://github.com/mbarrie1979/Theme-Parks-Waiting-Times-and-Weather-NEW"
    },
    {
      id: 2,
      title: "Project Two",
      imageUrl: "path/to/image2.jpg",
      description: "This is a brief description of Project Two.",
      siteLink: "https://demo.link/projecttwo",
      repoLink: "https://github.com/yourusername/projecttwo"
    },
    // Add more projects as needed
  ];

export default function Portfolio() {
    return (
        <div className="">
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            imageUrl={project.imageUrl}
            description={project.description}
            siteink={project.demoLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    )

}