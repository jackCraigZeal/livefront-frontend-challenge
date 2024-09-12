import React, { useEffect, useState } from 'react';
import './RecipeCard.css';

interface RecipeCardProps {
    title: string;
    imageUrl: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({title, imageUrl}) => {
    const [expanded, setExpanded] = useState(false);

    const handleClick = (): void => {
        setExpanded(!expanded);
    }

    return (
        <div className="RecipeCard">
            <div className="RecipeCardHeader">
                <span>{title}</span>
                <button onClick={handleClick}></button>
            </div>
            
            {expanded && 
                <>
                    <hr></hr>
                    <img className="RecipeImage" src={imageUrl}></img>
                </>   
            }
        </div>
    )
}

export default RecipeCard;