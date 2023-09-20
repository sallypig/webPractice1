'use client';
import {useState} from 'react';
export default function MyButton(){
    const [nums, setCount] = useState<number[]>([]);
    function handleClick(){
        let num=(Math.floor(Math.random() * 11));
        setCount(nums => [...nums, num]);
    }
    return(
        <div>
            {nums.map((x)=> x + " ")}
            <button onClick={handleClick}>
                click
            </button>
        </div>
        
            
    )
}