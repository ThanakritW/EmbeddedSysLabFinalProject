import { useEffect, useState } from "react"

export function CurrentTime() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        setInterval(() => setTime(new Date()), 1000);
    }, [])
    return (
        <h1 className="navbar-item">
            {time.toLocaleDateString()} {time.toLocaleTimeString()}
        </h1>
    );
}