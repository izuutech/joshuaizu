import { useState, useRef, useEffect } from "react";

const FadeIn = (props) => {

    const [isVisible, setIsVisible]=useState(false);
    const domRef=useRef();
    useEffect(()=>{
        const observer=new IntersectionObserver(entries=>{
            entries.forEach(entry=>setIsVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
    }, [])
    return ( 
        <div
        className={`fadeIn ${isVisible ? "isVisible": ""}`}
        style={{transitionDelay: `${props.delay}`}}
        ref={domRef}
        >
            {props.children}
        </div>
     );
}
 
export default FadeIn;