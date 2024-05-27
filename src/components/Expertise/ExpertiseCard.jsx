function ExpertiseCard(prop){
    const {icon, title, description} = prop.prop;
    console.log(prop.prop);
    return (
        <div className="expertise-card flex-column">
            <div className="expertise-card-head flex">
                <i className={icon+" large-text expertise-card-icon"}></i>
                <h3 className="expertise-card-title medium-text primary-font">{title}</h3>
            </div>
            <div className="expertise-card-content">
                <p className="expertise-card-description secondary-font">{description}</p>
            </div>
        </div>
    );
}

export default ExpertiseCard;