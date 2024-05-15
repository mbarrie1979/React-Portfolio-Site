import Avatar from '../assets/Avatar.webp';

export default function AboutMe() {
    return (
        <div className="about-me">
            <img className="col-3" src={Avatar} alt="image of Mark" />
            <div className='col-3 about-me-title'>
                <h1 >About Me</h1>
            </div>
            <p>Hello! Welcome to my Portolio Page. As web developer, I have experience working with the MERN stack in web development. Most of my experience lies with React and Javascript. Currently, I am attending a coding bootcamp to refine my skills in Full Stack development.</p>
        </div >
    )

}