import {motion} from 'framer-motion';

function WorkCard({
    key,
    index,
    img,
    title,
    tags
}){
    return (
        <motion.div 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1, transition:{type:"spring", duration:1, delay:0.1*index}}}
        className="work-card flex-column" key={key}
        >
            <div className="work-card-img">
                <img src={"./src/assets/img/"+img} alt="work" className="work-card-img"/>
            </div>
            <div className="work-card-content">
                <h3 className="work-card-title medium-text primary-font">{title}</h3>
                <p className="work-card-description secondary-font">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec purus nec.
                </p>
                <a href="" className="work-card-link secondary-font">See Project</a>
                <div className="work-card-tags flex wrap">
                    {tags.map((tag, index) => (
                        <span key={index} className="work-card-tag secondary-font">{tag}</span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default WorkCard;