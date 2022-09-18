import React from 'react';
import "./Css/portfolioscreener.css";

const PortfolioScreener = () => {
    return (
        <div className='portfolioscreener'>
            <p className='eval_head'>Report Configuration</p> 
            <div className="portfolio_container">
                <form action="" className='form_cont_port'>
                  
                  <p className='header_sect_port'>Assets Class :</p>
                  <div className="port_sub_cont">
                      <label htmlFor="assetdata1">
                        <input type="radio" name="asset_data1" id="assetdata1" />Mutual Funds
                      </label>
                      <label htmlFor="assetdata2">
                        <input type="radio" name="asset_data1" id="assetdata2" />Share & Bond
                      </label>   
                  </div>
                 


                  <p className='header_sect_port'>Report Type :</p>
                  <div className="port_sub_cont">
                      <label htmlFor="reportdata1">
                        <input type="radio" name="report_data1" id="reportdata1" />Client wise
                      </label>
                      <label htmlFor="reportdata2">
                        <input type="radio" name="report_data1" id="reportdata2" />Scrip wise
                      </label>
                  </div>
                 

                  <p className='header_sect_port'>Filters:</p>
                  <div className="filter_container1">
                    <span className="subcontainer1">
                        <p className='holidays'>Holding Days</p>
                        <select className="signs">
                            <option value=">"> {">"} </option>
                            <option value="<"> {"<"} </option>
                            <option value="="> {"="}</option>
                        </select>
                    </span>
                    <span className="subcontainer2">
                        <input type="number"  className='numcounts' />
                    </span>
                    <span className="subcontainer3">
                        <span>ARN</span>
                        <select className='signs1'>
                            <option value=">"> {">"} </option>
                            <option value="<"> {"<"} </option>
                        </select>
                    </span>
                  </div>


                  
                  {/* To be done */}
                  <div className="filter_container2">
                        
                        <select className='fli_sec_2'>
                            <option value=""> SELECT USER(S) </option>
                            <option value="Relationship Manager"> Relationship Manager </option>
                            <option value="Sub Broker"> Sub Broker </option>
                            <option value="Family Head"> Family Head </option>
                            <option value="Client"> Client </option>
                        </select>
                        

                        <select className='fli_sec_2'>
                            <option value=""> Select </option>
                            <option value="Relationship Manager"> Relationship Manager </option>
                            <option value="Sub Broker"> Sub Broker </option>
                            <option value="Family Head"> Family Head </option>
                            <option value="Client"> Client </option>
                        </select>
                        
                        <select className='fli_sec_2'>
                            <option value=""> All Selected </option>
                        </select>
                        <select className='fli_sec_2'>
                            <option value=""> All Selected </option>
                        </select>
                  </div>

                  <p className='header_sect_port'>View Type:</p>
                  <div className="port_sub_cont">
                    <label htmlFor="viewdata1">
                      <input type="radio" name="view_data1" id="viewdata1" className='radio_cols_port' />On Screen
                    </label>
                    <label htmlFor="viewdata2">
                      <input type="radio" name="view_data1" id="viewdata2" />XLS
                    </label>
                  </div>

                  

                  <div className='port_btn'>
                    <button className='buttons'>Submit</button>
                  </div>

                </form>
            </div>
        </div>
    )
}

export default PortfolioScreener
