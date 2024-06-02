import FooterCard from "./FooterCard";
import "./Footer.css";

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
                    Want to work with me?
                </h1>
                <p className="secondary-font">
                    Want to hire me for your organisation? Or got some ideas in mind? I am always open to new opportunities and collaborations. Feel free to reach out to me. 
                </p>
                <a href="https://drive.google.com/file/d/1kcKJ84FDQPpYtYbnDUBw4c0cgwydvz18/view?usp=sharing" target="_blank" className="footer-resume secondary-font"> Check out my Resume</a>

                <div className="footer-contact flex-column">
                    <h3 className="primary-font">
                        Contact Me
                    </h3>
                    <a href="mailto:sourashissukhen@gmail.com" className="secondary-font">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/sourashis-sarkar-b957a7215/" className="contact-link secondary-font">
                        LinkedIn
                    </a>
                    <a href="https://www.instagram.com/sarkar.arthur/" className="contact-link secondary-font">
                        Instagram
                    </a>
                    <a href="https://github.com/arthurW1935" className="contact-link secondary-font">
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