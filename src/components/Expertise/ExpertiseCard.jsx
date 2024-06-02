import {motion} from 'framer-motion';



function ExpertiseCard({
    key,
    index,
    icon,
    title,
    description
}){
    return (
        <motion.div 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1, transition:{type:"spring", duration:1, delay:0.1+0.2*index}}}
        viewport={{ once: true, amount: 0.8 }}
        className="expertise-card flex-column"
        >
            <div className="expertise-card-head flex">
                <i className={icon+" large-text expertise-card-icon"}></i>
                <h3 className="expertise-card-title primary-font">{title}</h3>
            </div>
            <div className="expertise-card-content secondary-font">
                &lt;p&gt;
                <p className="expertise-card-description secondary-font">{description}</p>
                &lt;/p&gt;
            </div>
        </motion.div>
    );
}

export default ExpertiseCard;