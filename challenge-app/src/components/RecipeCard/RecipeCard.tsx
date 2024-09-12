import React, { useEffect, useState } from 'react';
import { htmlToText } from 'html-to-text';
import './RecipeCard.css';


interface RecipeCardProps {
    title: string;
    imageUrl: string;
    summary: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({title, imageUrl, summary}) => {
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
                    <p>{htmlToText(summary, {wordwrap:100,  selectors: [ { selector: 'a', options: { ignoreHref: true } } ], preserveNewlines: true })}</p>
                </>   
            }
        </div>
    )
}

export default RecipeCard;