import Project from "./Project"
import FunCast from '../assets/FunCast.webp'
import CodingQuiz from '../assets/CodingQuiz.webp'
import PasswordGen from '../assets/PasswordGen.webp'


const projectData = [
    {
      id: 1,
      title: "Fun Cast",
      image: FunCast,
      description: "Theme Park Current Wait Times and Weather.",
      siteLink: "https://mbarrie1979.github.io/Theme-Parks-Waiting-Times-and-Weather-NEW/",
      repoLink: "https://github.com/mbarrie1979/Theme-Parks-Waiting-Times-and-Weather-NEW"
    },
    {
      id: 2,
      title: "Coding Quiz",
      image: CodingQuiz,
      description: "A coding quiz for JavaScript Students",
      siteLink: "https://mbarrie1979.github.io/Timed_Coding_Quiz/",
      repoLink: "https://github.com/mbarrie1979/Timed_Coding_Quiz"
    },
    {
      id: 3,
      title: "Password Generator",
      image: PasswordGen,
      description: "Generate a password",
      siteLink: "https://mbarrie1979.github.io/Password-Generator/",
      repoLink: "https://github.com/mbarrie1979/Password-Generator"
    },
    
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