import React from 'react';
import { IoStarOutline, IoStar } from "react-icons/io5";

interface StarProps {
    filled: boolean;
}

const Star: React.FC<StarProps> = ({ filled }) => {
    return filled ? <IoStar style={{ "color": "yellow", "fontSize": "24px" }} /> : <IoStar style={{ "color": "gray", "fontSize": "24px" }} />;
};

export default Star;
