function WorkCard(prop){
    const {img, title, tags} = prop.prop;
    return (
        <div className="work-card flex-column" key={title}>
            <div className="work-card-img">
                <img src={"./src/assets/img/"+img} alt="work" className="work-card-img"/>
            </div>
            <div className="work-card-content">
                <h3 className="work-card-title medium-text primary-font">{title}</h3>
                <div className="work-card-tags flex wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="work-card-tag secondary-font">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default WorkCard;