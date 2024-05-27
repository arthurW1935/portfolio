const color = ["pink", "blue", "violet"]
function FooterReview(prop){
    const {id, content, name, designation} = prop.prop;
    return (
        <div className= {"review flex-column back-"+color[id%3]} key={id}>
            <p className="review-content secondary-font">
                {content}
            </p>
            <div className="review-person flex">
                <div className="review-person-content">
                    <p className="review-person-name primary-font">-{name}</p>
                    <p className="review-person-designation secondary-font">{designation}</p>
                </div>
            </div>
        </div>
    );
}

export default FooterReview;