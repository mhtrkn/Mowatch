import React from "react";
import "../styles/home.css";
import Header from "./Header";
import ListMovie from "./listMovie";

export default function MyList() {
    return (
        <section className="homesection">
            <Header />
                <div className='cardswrapper'>
                    <ListMovie/>
                </div>
        </section>
    );
}
