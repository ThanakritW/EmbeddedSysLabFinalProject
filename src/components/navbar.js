import { CurrentTime } from "./currentTime";


export function Navbar() {
    return (
        <div className="navbar">
            <h1 className="navbar-title">Embedded System Laboratory</h1>
            <div className="navbar-items">
                <CurrentTime />
            </div>
        </div>
    );
}