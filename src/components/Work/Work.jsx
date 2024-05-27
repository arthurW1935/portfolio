import { useState } from "react";
import WorkCard from "./WorkCard";

const filters = ["All", "Web Development", "Machine Learning"];
const allWorks = [
    {
        title: "Project 1",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 2",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 3",
        tags: ["Machine Learning"],
        img: "work1.jpg"
    },
    {
        title: "Project 4",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 5",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 6",
        tags: ["Machine Learning"],
        img: "work1.jpg"
    },
    {
        title: "Project 7",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 8",
        tags: ["Web Development"],
        img: "work1.jpg"
    },
    {
        title: "Project 9",
        tags: ["Machine Learning"],
        img: "work1.jpg"
    },
]

function Work(){
    const [filterBy, setFilterBy] = useState("All");
    let works = allWorks;
    if(filterBy !== "All") works = works.filter(work => work.tags.includes(filterBy));
    console.log(works);
    return (
        <section className="work flex-column center" id="work">
            <div className="work-head flex-column center">
                <h1 className="work-brand primary-font large-text">
                    My Work
                </h1>
                <p className="work-desc secondary-font">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?
                </p>
            </div>
            <div className="work-container">
                <div className="work-filter secondary-font">
                    Filter by: {filters.map((filter, index) => (
                        <button key={index} onClick={() => setFilterBy(filter)} className="work-filter-button secondary-font">{filter}</button>
                    ))}
                </div>
                <div className="work-contents flex wrap">
                    {works.map((work) => (<WorkCard prop={work}/>))}
                </div>
            </div>
        </section>
    )
}

export default Work;