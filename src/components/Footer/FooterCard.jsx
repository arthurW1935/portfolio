const color = ["pink", "blue", "green"]
function FooterCard({
    key,
    index,
    heading,
    contentList
}){
    return (
        <div key={key} className= {"footer-card flex-column back-"+color[index%3]}>
            <h3 className="primary-font">
                {heading}
            </h3>
            <ul className="footer-card-list">
                {contentList.map((content, index) => (
                    <li key={index} className="secondary-font">{content}</li>
                ))}
            </ul>
        </div>
    );
}

export default FooterCard;