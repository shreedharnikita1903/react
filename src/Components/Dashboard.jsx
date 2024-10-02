 

import React,{useState} from 'react';

import BarChart from './dashboards/BarChar';
import AreaChart from './dashboards/AreaChart';
import MultiLineChart from './dashboards/MultiLineChart';
const Dashboard = () => {

   
    return (
       
    <div id="layout-wrapper">
      
    <div class="main-content">
        <div class="page-content">
            <div class="container-fluid">
               
                               <div className="row">
                                    <div className="col-12">
                                        <h3 className="my-3">Dashboard</h3>
                                    </div>
                                    <div className="col-12">
                                        <div className="notice-warning alert alert-warning alert-dismissible fade show" role="alert">
                                            <span><strong>Truckit</strong> You should check in on some of those fields below.</span>
                                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                        </div>
                                    </div>
                                </div>
                <div class="row">
                    <div class="col-md-6 col-xl-4">
                        <div class="card" style={{ backgroundColor: '#dc69f1' }}>
                            <div class="card-body">
                                <div>
                                <h3>200</h3>
                                    <h4 class="mb-1 mt-1"><span data-plugin="counterup"></span></h4>
                                    <p class="text-muted mb-0">Total Wotk Oreder</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card" style={{ backgroundColor: '#55e3b0' }}>
                            <div class="card-body">
                                <div>
                                <h3>200</h3>
                                    <h4 class="mb-1 mt-1"><span data-plugin="counterup"></span></h4>
                                    <p class="text-muted mb-0">Total Driver</p>

                                   
                                    

                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div class="col-md-6 col-xl-4">
                        <div class="card" style={{ backgroundColor: '#ee6565' }}>
                            <div class="card-body">
                                <div>
                                   <h3>280</h3>
                                    <h4 class="mb-1 mt-1"><span data-plugin="counterup"></span></h4>
                                    <p class="text-muted mb-0">Total Truck</p>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div class="row">
                   <div class="col-md-6 col-xl-6">
                        <div class="card" >
                        <h3>Area Chart</h3>
                            {/* <div class="card-body" style={{ height:300 }}>
                                <div>
                                   <h3>Area Chart</h3>
                                    <h4 class="mb-1 mt-1"><span data-plugin="counterup"></span></h4>
                                    <p class="text-muted mb-0">Showing the total visitor for last 6 month</p>
                                </div>
                             
                            </div> */}
                            <AreaChart/>
                        </div>
                    </div>
                    <div class="col-md-6 col-xl-6">
                        <div class="card" >
                            
                                
                                   <h3>Bar Chart</h3>
                                    {/* <h4 class="mb-1 mt-1"><span data-plugin="counterup"></span></h4>
                                    <p class="text-muted mb-0">January -June 2024</p> */}

                        <BarChart/>

   


                            
                             
                            
                        </div>
                    </div>
                 </div>
                 <div class="row">
                   <div class="col-md-6 col-xl-12">
                        <div class="card" >
                        <h3>Line Chart</h3>
                           
                               
                                   
                                   
                                   
                                
                                 
                     
                          <MultiLineChart/>
                        </div>
                    </div>
                   
                 </div>
            </div> 
        </div>
       
    </div>
</div>
    );
}

export default Dashboard;

    

 


