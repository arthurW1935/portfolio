import {motion} from 'framer-motion';

function WorkCard({
    key,
    index,
    img,
    title,
    description,
    link,
    tags
}){
    if(description.length >200) description = description.slice(0,197) + "...";
    return (
        <motion.div 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1, transition:{type:"spring", duration:1, delay:0.1*index}}}
        className="work-card flex-column" key={key}
        >
            <div className="work-card-img">
                <img src={img} alt="work" className="work-card-img"/>
            </div>
            <div className="work-card-content">
                <h3 className="work-card-title primary-font">{title}</h3>
                <div className="work-card-tags flex wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="work-card-tag secondary-font">{tag}</span>
                    ))}
                </div>
                <p className="work-card-desc secondary-font">
                    {description}
                </p>
                <a href={link} target="_blank" className="work-card-link secondary-font">See Project</a>
            </div>
        </motion.div>
    );
}

export default WorkCard;