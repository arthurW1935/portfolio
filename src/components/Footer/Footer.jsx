import FooterCard from "./FooterCard";

const skills = [
    {
        heading: "Languages",
        contentList: ["Python", "Java", "C++", "C", "JavaScript"]
    },
    {
        heading: "Tools",
        contentList: ["MySQL", "Git", "Docker", "Postman", "VS Code", "Jupyter", "PyCharm", "IntelliJ"]
    },
    {
        heading: "Frameworks",
        contentList: ["Django", "React", "FastAPI", "Flask", "Numpy", "Pandas", "Matplotlib", "Seaborn", "OpenCV", "Tensorflow", "Scikit-learn"]
    }
]

function Footer(){
    return (
        <footer class="footer flex wrap" id="contact">
            <div className="footer-personal-content flex-column">
                <h1 className="primary-font">
                    Got any Ideas?
                </h1>
                <p className="secondary-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem autem et blanditiis reprehenderit harum atque aspernatur neque iste ut quia!
                </p>

                <div className="footer-contact flex-column">
                    <h3 className="primary-font">
                        Contact Me
                    </h3>
                    <a href="" className="secondary-font">
                        Email: abc@gmail.com
                    </a>
                    <a href="www.linkedin.com" className="contact-link secondary-font">
                        LinkedIn
                    </a>
                    <a href="www.instagram.com" className="contact-link secondary-font">
                        Instagram
                    </a>
                    <a href="www.github.com" className="contact-link secondary-font">
                        Github
                    </a>
                </div>
            </div>
            <div className="footer-card-container flex wrap">
                {skills.map((skill, index) => <FooterCard key={index} index={index} {...skill}/>)}
            </div>      
        </footer>
    )
}

export default Footer;