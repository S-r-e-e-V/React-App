import React,{useState,useEffect} from 'react';
import { Doughnut } from 'react-chartjs-2';

export default function DoughnutChart() {

    const [doughnut, setdoughnut] = useState('')

    const chart = () => {
        setdoughnut({
            labels: ['Order delivered', 'Order booked', 'Order cancelled'],
            datasets: [
                {
                    data: [10, 20, 30],
                    backgroundColor:['green','orange','red']
                }]
        })
    }

    useEffect(() => {
        chart()
    }, [])


    return (
        <div>
            <Doughnut data={doughnut}
                options={{
                    legend: {
                        display: true,
                        position:"bottom",
                        labels: {
                            boxWidth: 10,
                            fontSize: 10,
                            fontColor: 'black'
                        }
                    }
                }}

            />
        </div>
    )
}
