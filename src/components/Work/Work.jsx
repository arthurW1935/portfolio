import { useState } from "react";
import WorkCard from "./WorkCard";

const filters = ["All", "Web Development", "Machine Learning"];
const allWorks = [
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
        link: "#"
    },
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
        link: "#"
    },
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
    },
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development", "Web Development", "Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
    },
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
    },
    {
        img: "work1.jpg",
        title: "Project 1",
        tags: ["Web Development"],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?",
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eligendi voluptatum voluptates distinctio asperiores officia eos fuga voluptate quidem omnis iste et ab possimus aliquam dolorum tempore sequi rerum necessitatibus?
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