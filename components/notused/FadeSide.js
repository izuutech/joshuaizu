import { useState, useRef, useEffect, Component } from "react";

const FadeSide = (props) => {


    // state for hello Component
    const [isOn, setIsOn]=useState(true);
    const domRef=useRef();
    let options={
        threshold: 0.75
    }
    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
            entries.forEach(entry=>setIsOn(entry.isIntersecting));
        }, options);
        observer.observe(domRef.current);
    }, [])
    return ( 
        <div
        className={`fadeSide ${isOn ? "": "isOn"}`}
        style={{transitionDelay: `${props.delay}`}}
        ref={domRef}
        >
            {props.children}
        </div>
     );
}
 
export default FadeSide;