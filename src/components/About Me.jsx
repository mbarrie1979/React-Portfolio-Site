import Avatar from '../assets/Avatar.webp';

export default function AboutMe() {
    return (
        <div className="container">
            <div className="row m-0 about-me vh-100" >
                <img className="col-3" src={Avatar} alt="image of Mark" />
                <div className='col about-me-title'>
                    <h1 className='text-shadow display-1'>About Me</h1>
                </div>
                <p className='row m-0'>Hello! Welcome to my Portolio Page. I have worked in the education field for 16 years and the professional audio industry for 20 years. As a web developer, I have experience working with the MERN stack and Javascript in web development. Most of my experience is with React and Javascript. Currently, I am attending a coding bootcamp in UCF to refine my skills in Full Stack development.</p>
            </div>
        </div >
    )

}