import {useState, useEffect} from "react";

export default function usePracToggle () {
    const [winsize, setWinsize] = useState ({
        width: undefined,
        height: undefined,
    });
    useEffect (()=> {
        function windowSize(){
        setWinsize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    }
    windowSize();

    window.addEventListener("resize",
    windowSize);
        return() => window.removeEventListener("resize",
        windowSize)
    }, []);
    return winsize 
}
