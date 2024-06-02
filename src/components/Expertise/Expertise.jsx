import {motion} from 'framer-motion';
import ExpertiseCard from "./ExpertiseCard";

const expertiseData = [
    {
        icon: "fa-solid fa-computer",
        title: "Software Development",
        description: "I can build scalable and maintainable web applications using modern technologies and best practices."
    },
    {
        icon: "fa-solid fa-laptop-code",
        title: "FullStack Web Development",
        description: "I can create responsive and user-friendly websites using HTML, CSS, and JavaScript."
    },
    {
        icon: "fa-solid fa-robot",
        title: "AI & Machine Learning",
        description: "I can develop machine learning models and AI applications using Python and TensorFlow."
    }
];

function Expertise() {
  return (
    <section className="expertise flex-column center" id="expertise">
        <motion.h1 
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:1, transition:{type:"spring", duration:0.5, delay:0.1}}}
        viewport={{ once: true, amount: 0.8 }}
        className="expertise-brand primary-font large-text"
        >
            My Expertise
        </motion.h1>
        <div className="expertise-content flex center wrap">
            {expertiseData.map((expertise, index) => (
                <ExpertiseCard key={index} index={index} {...expertise} />
            ))}
        </div>
    </section>
  );
}

export default Expertise;