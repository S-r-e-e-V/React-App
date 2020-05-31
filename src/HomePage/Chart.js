import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import '../styles/Chart.css'

function Chart() {
    const [chartData, setchartData] = useState({})

    const chart = () => {
        setchartData({
            labels: ['Jan', 'Feb', 'March', 'April','May'],
            datasets: [
                {
                    label: 'New Chef',
                    fill: false,
                    data: [200, 45, 80, 76, 69],
                    borderColor: '#6628ad',
                    pointRadius:0,
                    borderWidth: 4
                },
                {
                    label: 'New Foodie',
                    fill: false,
                    data: [10, 40, 20, 10,80],
                    pointRadius:0,
                    borderColor: '#17a62d',
                    borderWidth: 4
                },
                {
                    label: 'New Dishes',
                    fill: false,
                    data: [50, 40, 50, 70,90],
                    pointRadius:0,
                    borderColor: '#08d1ce',
                    borderWidth: 4
                },
                {
                    label: 'New Menu',
                    fill: false,
                    data: [60, 70, 50, 70,50],
                    pointRadius:0,
                    borderColor: '#ba0d0d',
                    borderWidth: 4
                }
            ]
        })
    }


    useEffect(() => {
        chart()
    }, [])

    return (
        <div className='chart'>
            <Line data={chartData}
                options={{
                    legend: {
                        display: true,
                        position: 'bottom',
                        labels: {
                            boxWidth: 10,
                            fontSize: 10,
                            fontColor: 'black'
                            }
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                display: false
                            }
                        }],
                        yAxes: [{
                            gridLines: {
                                display: false
                            }
                        }]
                    }
                }}
            />
        </div>
    )
}

export default Chart;