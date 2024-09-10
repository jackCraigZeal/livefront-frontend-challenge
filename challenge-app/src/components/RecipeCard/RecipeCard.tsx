import React, { useEffect, useState } from 'react';
import './RecipeCard.css';

interface RecipeCardProps {
    title: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({title}) => {
    const [expanded, setExpanded] = useState(false);
    
    
    return (
        <div className="RecipeCard">
            <span>{title}</span>
            <button></button>
        </div>
    )
}

export default RecipeCard;