import Project from "./Project"
import FunCast from '../assets/FunCast.webp'


const projectData = [
    {
      id: 1,
      title: "Fun Cast",
      image: FunCast,
      description: "Theme Park Current Wait Times and Weather.",
      siteLink: "https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/",
      repoLink: "https://github.com/mbarrie1979/Theme-Parks-Waiting-Times-and-Weather-NEW"
    },
    // {
    //   id: 2,
    //   title: "Project Two",
    //   imageUrl: "path/to/image2.jpg",
    //   description: "This is a brief description of Project Two.",
    //   siteLink: "https://demo.link/projecttwo",
    //   repoLink: "https://github.com/yourusername/projecttwo"
    // },
    // Add more projects as needed
  ];

export default function Portfolio() {
    return (
        <div className="">
        {projectData.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            description={project.description}
            siteLink={project.siteLink}
            repoLink={project.repoLink}
          />
        ))}
      </div>
    )

}