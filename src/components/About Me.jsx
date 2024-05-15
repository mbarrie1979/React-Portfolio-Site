import Avatar from '../assets/Avatar.webp';

export default function AboutMe() {
    return (
        <div className="row m-0 about-me">
            <img className="col-3" src={Avatar} alt="image of Mark" />
            <div className='col-3 about-me-title'>
                <h1 >About Me</h1>
            </div>
            <p className=''>Hello! Welcome to my Portolio Page. I have worked in the education field for 16 years and the professional audio industry for 20 years. As web developer, I have experience working with the MERN stack in web development. Most of my experience lies with React and Javascript. Currently, I am attending a coding bootcamp to refine my skills in Full Stack development.</p>
        </div >
    )

}