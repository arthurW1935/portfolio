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
        <h1 className="expertise-brand primary-font large-text">
            My Expertise
        </h1>
        <div className="expertise-content flex center wrap">
            {expertiseData.map((expertise, index) => (
                <ExpertiseCard key={index} prop={expertise} />
            ))}
        </div>
    </section>
  );
}

export default Expertise;