import {motion} from 'framer-motion';
import {useEffect, useState} from 'react';
import './Cursor.css';

function Cursor(){
    const [position, setPosition] = useState({x:0, y:0});

    useEffect(() => {
        const mouseMoveHandler = (e) => {
            setPosition({x:e.clientX, y:e.clientY});
        };

        window.addEventListener("mousemove", mouseMoveHandler);
        return () => window.removeEventListener("mousemove", mouseMoveHandler);
    }, []);

    const variants = {
        default: {
            x: position.x,
            y: position.y,
        },
    };

    return (
        <motion.div 
        drag
        className="cursor"
        variants={variants}
        animate="default"
        style={{ pointerEvents: 'none' }}
        >
            <div className="cursor-inner"></div>
        </motion.div>
    );
}

export default Cursor;