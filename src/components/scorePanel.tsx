import { useEffect } from "react";

export default function ScorePanel({score}: any) {
    

    return (
        <div className="score">
            <h1>Your Basket Score</h1>
            <span><h2 className="score__main">{score}</h2><h2>/</h2><h2>100</h2></span>          
        </div>
    )
  }
  