import React,{useState} from 'react';
import {
    ComposableMap,
    Geographies,
    Geography,
    ZoomableGroup
} from "react-simple-maps";

import '../styles/map.css';
import DoughnutChart from '../HomePage/DoughnutChart'

const geoUrl ="https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

export default function Map() {

    const [chef, setchef] = useState(2000);
    const [foodie, setfoodie] = useState(2500);
    const [menu, setmenu] = useState(600);
    const [dish, setdish] = useState(10000);

    return (
        <div className='map'>
            GLOBAL DISTRIBUTION
            <div className='chef'>
                Total no of Chef <span className='numbers'>{chef}</span>
            </div>
            <div className='foodie'>
                Total no of foodie <span className='numbers'>{foodie}</span>
            </div>
            <div className='menu'>
                Total no of menu <span className='numbers'>{menu}</span>
            </div>
            <div className='dish'>
                Total no of dish <span className='numbers'>{dish}</span>
            </div>
            <div className='doughnutchart'>
                <DoughnutChart />
            </div>
            <ComposableMap>
                <ZoomableGroup zoom={1}>
                    <Geographies geography={geoUrl}>
                        {({ geographies }) =>
                            geographies.map(geo => (
                                <Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    style={{
                                        default: {
                                            fill: "#D6D6DA",
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />
                            ))
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </div>
    )
}
