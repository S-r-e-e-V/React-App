import React from 'react';
import Navbar from '../HomePage/Navbar'
import Chart from '../HomePage/Chart'
import Map from '../HomePage/Map'
import '../styles/HomePage.css'

function HomePage() {
    return (
        <div className="HomePage">
            <div>
                <Navbar />
                <hr />
            </div>
            <div>
                <Map/>
            </div>
            <div>
                <Chart />
            </div>
        </div>
    );
}

export default HomePage;