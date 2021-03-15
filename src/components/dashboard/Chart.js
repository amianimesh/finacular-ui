import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';


class BarChart extends Component {
    render(){
        return(
            <div className='container'>
                <Bar
                    data={{
                        labels: ['1','2','3','4','5','6','7','8','9','10'],
                        datasets: [{
                            label: 'No of Years',
                            data: [100,165,260,370,440,580,640,770,820,960],
                            backgroundColor:['rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)',
                                            'rgba(25, 181, 254, 1)']
                        }]
                    }}
                    height={400}
                    options={{
                        maintainAspectRatio: false,
                        title: {
                            display:true,
                            text: 'Annual Projection',
                            fontSize: 15
                        },
                        legend: {
                            display: true,
                            position: 'bottom',
                            labels:{
                                fontColor:'#000'
                            }
                        },
                        scales:{
                            xAxes: [{
                                barPercentage: 0.5
                            }],
                            yAxes: [{
                                scaleLabel: {
                                    display: true,
                                    labelString: 'Asset Balance (In Lakhs)',
                                    fontColor:'#000'
                                },
                                ticks: {
                                    beginAtZero: true
                                }
                            }]
                        }
                    }}
                />
            </div>
        )
    }
}

export default BarChart;