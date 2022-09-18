import React, { useState } from 'react';
import "./Css/clientbillregister.css";

export const Clientbillregister = () => {
  const [show, setshow] = useState(true)
  
  return (
    <div className='Clientbillregister'>
        <div className='subbillregis'>
            <div className="clientbill1_cont1" onClick={()=>setshow(!show)}>
                <div className="outercont_bill">
                <div className="billcountsign">
                    {!show?"-":"+"}
                </div>
                </div>
                <p className='cli_text'>Report Configuration</p>
            </div>
            <div className={show?"clientbill1_cont2 shows":"clientbill1_cont2"}>


                <div className="headerconte1">
                    <p className='headbills'>Filters:</p>
                    <div className="subclientconte1">
                            <div className="childclintconte1">
                                <div>
                                    <select className='selectsbill'>
                                        <option value=""> SELECT USER(S) </option>
                                        <option value="Relationship Manager"> Relationship Manager </option>
                                        <option value="Sub Broker"> Sub Broker </option>
                                        <option value="Family Head"> Family Head </option>
                                        <option value="Client"> Client </option>
                                    </select>    
                                </div>
                            </div>  
                            <div className="childclintconte2">
                                <p>Entity:</p>
                                <select className='selectsbill1'>
                                    <option value="All"> All </option>
                                    <option value="ARN-1668"> ARN-1668 </option>
                                    <option value="ARN-00000"> ARN-00000 </option>
                                </select>
                            </div>  
                            <div className="childclintconte3">
                                <p>Invoice Date:</p>
                                <div className='ghostbill'>
                                    <input type="date" className='datesbill1'/>
                                    <span className='dash_bill'>-</span>
                                    <input type="date" className='datesbill1'/>  
                                </div>  
                            </div>            
                    </div>
                </div>
                
                <div className="headerconte2">
                    <p className='headbills'>Client Bill Type :</p>
                    <div className="subclientconte">
                        <label htmlFor="client_bill1" className='topchange_compre'>
                            <input type="checkbox"  id="client_bill1" /> Quotation
                        </label>
                        <label htmlFor="client_bill2">
                            <input type="checkbox"  id="client_bill2" /> Tax Invoice
                        </label>      
                    </div>
                </div>
                <div className='headerconte3'>
                    <button className='button'>Show</button>
                </div>
            </div>       
        </div>

    </div>
  )
}
