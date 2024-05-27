import FooterReview from "./FooterReview";

const reviews = [
    {
        id: 1,
        name: "John Doe",
        designation: "CEO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget magna."
    },
    {
        id: 2,
        name: "Jane Doe",
        designation: "CTO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget magna."
    },
    {
        id: 3,
        name: "John Doe",
        designation: "COO",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget magna."
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
            <div className="review-container flex wrap">
                {reviews.map((review) => <FooterReview prop={review}/>)}
            </div>      
        </footer>
    )
}

export default Footer;