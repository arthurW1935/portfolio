import { useState } from "react";
import WorkCard from "./WorkCard";
import "./Work.css";

const filters = ["All", "Web Development", "Machine Learning", "Data Science", "Desktop Application"];
const allWorks = [
    {
        img: "roadsign.png",
        title: "Road Sign Detection",
        tags: ["Machine Learning","Web Development"],
        description: "Trained the Convolutional Neural Network model on a Russian Dataset of Road Sign Images and deployed it on a website.",
        link: "https://github.com/AnayGarodia/The-Logical-Order"
    },
    {
        img: "fakeimage.jpg",
        title: "Fake Photo Detection",
        tags: ["Data Science","Machine Learning"],
        description: "Trained a Convolutional Neural Network Model to detect fake photos. Achieved 95% accuracy on test data.",
        link: "https://colab.research.google.com/drive/18vlMyr83lGwcQVSWhHEaCtrvesm10zmR?usp=sharing"
    },
    {
        img: "aerofit.jpg",
        title: "Aerofit Case Study",
        tags: ["Data Science"],
        description: "Performed EDA on the dataset and gave insights, and  proposed some business recommendations to the company.",
        link: "https://docs.google.com/document/d/1fPZ1-DD4uxeGz6fc7PyFvaDd7sATanO9-gkBs__GCRs/edit?usp=sharing"
    },
    {
        img: "diamond.png",
        title: "Diamond Price Prediction",
        tags: ["Data Science", "Machine Learning"],
        description: "Deployed a multiple linear regression model. Checked for multicollinearity, error analysis & homoscedasity.",
        link: "https://colab.research.google.com/drive/1niy_w82QMfD7Yd2MDZQ6LYileW4jB-bX?usp=sharing"
    },
    {
        img: "skill.png",
        title: "Skill Overflow",
        tags: ["Web Development"],
        description: "A website where people would get the necessary resources to start coding or to learn something new.",
        link: "https://github.com/arthurW1935/skill-overflow"
    },
    {
        img: "image-editor.jpg",
        title: "Image Editor",
        tags: ["Desktop Application"],
        description: "An Image Editor with Basic Editing Features like Rotate, Flip, GrayScale, Blurr, etc",
        link: "https://github.com/arthurW1935/Image-Editor"
    },

]

function Work(){
    const [filterBy, setFilterBy] = useState("All");
    let works = allWorks;
    if(filterBy !== "All") works = works.filter(work => work.tags.includes(filterBy));

    return (
        <section className="work flex-column center" id="work">
            <div className="work-head flex-column center">
                <h1 className="work-brand primary-font large-text">
                    My Work
                </h1>
                <p className="work-desc secondary-font">
                    I have worked on a variety of projects ranging from Web Development to Machine Learning. Here are some of my works. 
                </p>
            </div>
            <div className="work-container">
                <div className="work-filter secondary-font">
                    Filter by: {filters.map((filter, index) => (
                        <button key={index} onClick={() => setFilterBy(filter)} className={`work-filter-button secondary-font ${filterBy === filter ? 'active' : ''}`}>{filter}</button>
                    ))}
                </div>
                <div className="work-contents flex wrap">
                    {works.map((work, index) => (<WorkCard key={index} index={index} {...work}/>))}
                </div>
            </div>
        </section>
    )
}

export default Work;