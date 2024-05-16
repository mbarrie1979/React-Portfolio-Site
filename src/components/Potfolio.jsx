import Project from "./Project"
import FunCast3 from '../assets/FunCast3.png'
import CodingQuiz from '../assets/CodingQuiz3.png'
import PasswordGen from '../assets/PasswordGen2.png'
import NoteTaker from '../assets/NoteTaker2.png'
import WorkdayScheduler from '../assets/WorkdayScheduler2.png'
import WeatherPlanner from '../assets/WeatherPlanner2.png'


const projectData = [
    {
      id: 1,
      title: "Fun Cast",
      image: FunCast3,
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
    {
      id: 4,
      title: "Notetaker App",
      image: NoteTaker,
      description: "Add and delete your notes",
      siteLink: "https://note-taker-app-mark-barrie-ce98b5447988.herokuapp.com/",
      repoLink: "https://github.com/mbarrie1979/Note-Taker?tab=readme-ov-file"
    },
    {
      id: 5,
      title: "Workday Scheduler",
      image: WorkdayScheduler,
      description: "Add and delete your daily schedule items",
      siteLink: "https://mbarrie1979.github.io/Work-Day-Scheduler/",
      repoLink: "https://github.com/mbarrie1979/Work-Day-Scheduler"
    },
    {
      id: 6,
      title: "Weather Report",
      image: WeatherPlanner,
      description: "Search for weather",
      siteLink: "https://mbarrie1979.github.io/Weather_Planner/",
      repoLink: "https://github.com/mbarrie1979/Weather_Planner"
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