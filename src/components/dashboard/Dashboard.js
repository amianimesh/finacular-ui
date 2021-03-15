import React, { Component } from 'react';
import BarChart from './Chart'

class Dashboard extends Component{
    render(){
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col s12 l12'>
                            <div className='card'>
                            <BarChart/>
                            </div>
                        </div>
                    </div>
                    
                    <div className='row'>
                        <div class='col s12 l4'>
                            <div className='card'>
                                <div className='card-content black-text'>
                                    <span className='card-title indigo-text'>Asset Balance</span>
                                    <form >
                                        <p>Enter amount</p>
                                        <input id='title' type='text' className='light-blue lighten-5' style={{width: "150px"}}></input>
                                    </form>
                                    <p>Last Updated: 3 Dec</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-content black-text'>
                                    <span className='card-title red-text switch'>Financial Independence</span>
                                    <form>
                                        <p>Age</p>
                                        <input id='title' type='text'></input>
                                    </form>
                                    <p>Optimized</p>
                                </div>
                            </div>    
                        </div>
                        <div class='col s12 l4'>
                            <div className='card'>
                                <div className='card-content black-text'>
                                    <span className='card-title green-text'>Growth Rate</span>
                                    <form>
                                        <p>Enter growth rate</p>
                                        <input id='title' type='text' style={{border:'solid', width:'70px',height:'41px'}}></input>
                                    </form>
                                    <p>Inflation 6%</p>
                                </div>
                            </div>
                            <div className='card'>
                                <div className='card-content black-text'>
                                    <span className='card-title blue-text'>Average Expenses</span>
                                    <form>
                                        <p>Amount</p>
                                        <input id='title' type='text'></input>
                                    </form>
                                    <p>3 months average</p>
                                </div>
                            </div> 
                        </div>
                        <div class='col s12 l4'>
                        <div className='card' style={{height: "390px"}}>
                                <div className='card-content black-text'>
                                    <span className='card-title indigo-text'>Major Investment</span>
                                    <p>Returns generated per month</p>
                                    <p>1,25,000</p>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
        </div>

        )
    }
}

export default Dashboard;