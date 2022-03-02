import { useState, useRef, useEffect, Component } from "react";

const FadeHello = (props) => {


    // state for hello Component
    const [isHello, setIsHello]=useState(true);
    const domRef=useRef();
    let options={
        threshold: 0.0
    }
    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
            entries.forEach(entry=>setIsHello(entry.isIntersecting));
        }, options);
        observer.observe(domRef.current);
    }, [])
    return ( 
        <div
        className={`fadeHello ${isHello ? "": "isHello"}`}
        style={{transitionDelay: `${props.delay}`}}
        ref={domRef}
        >
            {props.children}
        </div>
     );
}
 
export default FadeHello;