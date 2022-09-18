import React from 'react';
import "./Css/comprehensiveportfolio.css";
import logo from "../data/log1.png";

const ComprehensivePortfolio = () => {
    return (
        <div className='comprehensive'>
            <form action="" className='for_compre'>
                <div className="Compre_container1">
                    <p className='eval_header'>Evaluation Date</p>
                    <div>
                        <input type="date" className='dates1'/>
                        <span className='dash_compre'>-</span>
                        <input type="date" className='dates2'/>
                        <select className='top_select_compre'>
                            <option value=""> SELECT USER(S) </option>
                            <option value=""> Family Head </option>
                            <option value=""> Client </option>
                        </select>
                    </div>
                </div>
                <p className='eval_header'>Choose Sections</p>
                <div className="Compre_container">
                    <div className="subCompre_cont">
                        <p className='order_compre'>Order</p>
                        <div className="sect_items">
                            <label htmlFor="sect_items1">
                                <input type="checkbox"  id="sect_items1" /> Executive Summary
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items2">
                                <input type="checkbox"  id="sect_items2" /> Asset Analysis
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items3">
                                <input type="checkbox"  id="sect_items3" /> Holding Analysis
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items4">
                                <input type="checkbox"  id="sect_items4" /> Investment Snapshot
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items5">
                                <input type="checkbox"  id="sect_items5" /> Portfolio Summary
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items6">
                                <input type="checkbox"  id="sect_items6" /> Unrealized Capital Gain
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items7">
                                <input type="checkbox"  id="sect_items7" /> Transaction Statement
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                        <div className="sect_items">
                            <label htmlFor="sect_items8">
                                <input type="checkbox"  id="sect_items8" /> Folio Details
                            </label>
                            <select>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                            </select>
                        </div>
                    </div>
                </div>


                <p className='eval_header'>Choose Product</p>  
                <div className="Compre_container compre445">
                    <label htmlFor="product_items1" className='topchange_compre'>
                                <input type="checkbox"  id="product_items1" /> Mutual Fund
                    </label>
                    <label htmlFor="product_items2">
                                <input type="checkbox"  id="product_items2" /> Shares & Bond
                    </label>
                    <label htmlFor="product_items3">
                                <input type="checkbox"  id="product_items3" /> Fixed Deposit
                    </label>
                    <label htmlFor="product_items4">
                                <input type="checkbox"  id="product_items4" /> Other Assets
                    </label>
                </div>
                
                
                <div className="option_compre">
                <div className="sub_coms">
                    <p className='eval_header'>Display Option</p>
                    <div className="Compre_container">
                        <div className="compre445">
                            <label htmlFor="display_items1">
                                <input type="checkbox"  id="display_items1" />Hide Folio No.
                            </label>
                        </div>
                    </div>
                </div>

                <div className="sub_coms">
                    <p className='eval_header'>Data Option</p>
                        <div className="Compre_container">
                            <div className="inner_compre">
                                <div className="subCompre_4">
                                <label htmlFor="data_items1">
                                    <input type="checkbox"  id="data_items1" />Benchmark Return
                                </label>
                                </div> 
                                <div className="subCompre_41">
                                    <p>No. of holdings</p>
                                    <select>
                                        <option value="10">10</option>
                                        <option value="20">20</option>
                                        <option value="50">50</option>
                                        <option value="All">All</option>
                                    </select>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                

                    
                <div className="Compre_container12">
                    <div className='sub_cont'>
                        <button className='button'>Download Report</button>
                        <button className='button'>Send On Email</button>
                        <div className='button2'>
                            <div className='button1'>
                                <div className='logo_cont'>
                                    <img src={logo} alt="" width="35px" />
                                    <p className='log1x'>Send on Whatsapp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='lastcheck_compre'>
                        <label htmlFor="btn_items1">
                            <input type="checkbox"  id="btn_items1" />CC with RM
                        </label>
                    </div>
                </div>

            </form>
        </div>
    )
}

export default ComprehensivePortfolio
