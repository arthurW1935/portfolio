const color = ["pink", "blue", "violet"]
function FooterReview(prop){
    return (
        <div className= {"review flex-column back-"+color[id%3]} key={id}>
            {/* <p className="review-content secondary-font">
                {content}
            </p>
            <div className="review-person flex">
                <div className="review-person-content">
                    <p className="review-person-name primary-font">-{name}</p>
                    <p className="review-person-designation secondary-font">{designation}</p>
                </div>
            </div> */}
            <h3 className="primary-font">
                Languages
            </h3>
            <ul>
                <li className="secondary-font">Python</li>
                <li className="secondary-font">Java</li>
                <li className="secondary-font">C++</li>
                <li className="secondary-font">C</li>
                <li className="secondary-font">JavaScript</li>

            </ul>
        </div>
    );
}

export default FooterReview;