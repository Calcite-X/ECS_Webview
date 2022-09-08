import React from 'react'

const PortfolioScreener = () => {
    return (
        <div>
            Report Configuration 
            <div className="portfolio_container">
                <form action="">
                  <p>Assets Class :</p>
                  <label htmlFor="assetdata1">
                    <input type="radio" name="asset_data1" id="assetdata1" />Mutual Funds
                  </label>
                  <label htmlFor="assetdata2">
                    <input type="radio" name="asset_data1" id="assetdata2" />Share & Bond
                  </label>
                  <p>Report Type :</p>
                  <label htmlFor="reportdata1">
                    <input type="radio" name="report_data1" id="reportdata1" />Client wise
                  </label>
                  <label htmlFor="reportdata2">
                    <input type="radio" name="report_data1" id="reportdata2" />Scrip wise
                  </label>
                  <p>Filters:</p>
                  <div className="filter_container1">
                    <span className="subcontainer1">
                        Holding Days
                        <select>
                            <option value=">"> {">"} </option>
                            <option value="<"> {"<"} </option>
                            <option value="="> {"="}</option>
                        </select>
                    </span>
                    <input type="number"  className='numcounts' />
                    <span className="subcontainer2">
                        <span>ARN</span>
                        <select>
                            <option value=">"> {">"} </option>
                            <option value="<"> {"<"} </option>
                        </select>
                    </span>
                  </div>


                  
                  {/* To be done */}
                  <div className="filter_container2">
                        <select>
                            <option value=""> SELECT USER(S) </option>
                            <option value="Relationship Manager"> Relationship Manager </option>
                            <option value="Sub Broker"> Sub Broker </option>
                            <option value="Family Head"> Family Head </option>
                            <option value="Client"> Client </option>
                        </select>
                        <select>
                            <option value=""> Select </option>
                            <option value="Relationship Manager"> Relationship Manager </option>
                            <option value="Sub Broker"> Sub Broker </option>
                            <option value="Family Head"> Family Head </option>
                            <option value="Client"> Client </option>
                        </select>
                        <select>
                            <option value=""> All Selected </option>
                        </select>
                        <select>
                            <option value=""> All Selected </option>
                        </select>
                  </div>
                  <p>View Type:</p>
                  <label htmlFor="viewdata1">
                    <input type="radio" name="view_data1" id="viewdata1" />On Screen
                  </label>
                  <label htmlFor="viewdata2">
                    <input type="radio" name="view_data1" id="viewdata2" />XLS
                  </label>
                  <div>
                     <input type="submit" id="Applyportbtn" name="Apply"/>
                  </div>

                </form>
            </div>
        </div>
    )
}

export default PortfolioScreener
