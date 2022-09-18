import React from 'react'
import "./Css/createamcbill.css";

export const Createamcbill = () => {
  return (
    <div className="Createamcbill">


      <form action="" className='amcbillform'>
          <div className="amcbill_cont">
              <div className="amccont1">
                  <div className="sub_sub_cont1">
                    <p>Fund :</p>
                    <select className='amcitem1 inputamc'>
                        <option value=""> Select </option>
                        <input type="search" name="" id="" />
                        <option value="Aditya Birla Sun Life Mutual Fund"> Aditya Birla Sun Life Mutual Fund </option>
                        <option value="Axis Mutual Fund"> Axis Mutual Fund </option>
                        <option value="Bank Of India Mutual Fund"> Bank Of India Mutual Fund </option>
                        <option value="Baroda BNP Paribas Mutual Fund"> Baroda BNP Paribas Mutual Fund</option>
                        <option value="BNP Paribas Mutual Fund"> BNP Paribas Mutual Fund </option>
                        <option value="Canara Robeco Mutual Fund"> Canara Robeco Mutual Fund </option>
                        <option value="DSP Mutual Fund"> DSP Mutual Fund </option>
                        <option value="Edelweiss Mutual Fund"> Edelweiss Mutual Fund</option>
                        <option value="Franklin Templeton Mutual Fund"> Franklin Templeton Mutual Fund </option>
                        <option value="Goldman Sachs Mutual Fund"> Goldman Sachs Mutual Fund </option>
                        <option value="HDFC Mutual Fund "> HDFC Mutual Fund </option>
                        <option value="HSBC Mutual Fund"> HSBC Mutual Fund </option>
                        <option value="ICICI Prudential Mutual Fund"> ICICI Prudential Mutual Fund </option>
                        <option value="IDBI Mutual Fund"> IDBI Mutual Fund </option>
                        <option value="IDFC Mutual Fund"> IDFC Mutual Fund </option>
                        <option value="IIFL Mutual Fund"> IIFL Mutual Fund </option>
                        <option value="Indiabulls Mutual Fund"> Indiabulls Mutual Fund </option>
                        <option value="Invesco Mutual Fund"> Invesco Mutual Fund </option>
                        <option value="ITI Mutual Fund"> ITI Mutual Fund </option>
                        <option value="JM Financial Mutual Fund"> JM Financial Mutual Fund </option>
                        <option value="Kotak Mutual Fund"> Kotak Mutual Fund </option>
                        <option value="L&T Mutual Fund"> L&T Mutual Fund </option>
                        <option value="Mahindra Manulife Mutual Fund"> Mahindra Manulife Mutual Fund </option>
                        <option value="Mirae Asset Mutual Fund"> Mirae Asset Mutual Fund </option>
                        <option value="Motilal Oswal Mutual Fund"> Motilal Oswal Mutual Fund </option>
                        <option value="NAVI Mutual Fund"> NAVI Mutual Fund </option>
                        <option value="Nippon India Mutual Fund"> Nippon India Mutual Fund </option>
                        <option value="NJ Mutual Fund "> NJ Mutual Fund </option>
                        <option value="PGIM India Mutual Fund"> PGIM India Mutual Fund </option>
                        <option value="PPFAS Mutual Fund"> PPFAS Mutual Fund </option>
                        <option value="Principal Mutual Fund"> Principal Mutual Fund </option>
                        <option value="Quan Mutual Fund"> Quan Mutual Fund </option>
                        <option value="Quantum Mutual Fund"> Quantum Mutual Fund </option>
                        <option value="Sahara Mutual Fund"> Sahara Mutual Fund </option>
                        <option value="Samco Mutual Fund"> Samco Mutual Fund </option>
                        <option value="SBI Mutual Fund"> SBI Mutual Fund </option>
                        <option value="Shriram Mutual Fund"> Shriram Mutual Fund </option>
                        <option value="Sundaram Mutual Fund "> Sundaram Mutual Fund </option>
                        <option value="Tata Mutual Fund "> Tata Mutual Fund </option>
                        <option value="Taurus Mutual Fund"> Taurus Mutual Fund </option>
                        <option value="TRUST Mutual Fund"> TRUST Mutual Fund </option>
                        <option value="Union Mutual Fund"> Union Mutual Fund </option>
                        <option value="UTI mutual Fund"> UTI mutual Fund </option>
                        <option value="WhiteOak Capital Mutual Fund"> WhiteOak Capital Mutual Fund </option> 
                    </select>
                  </div>
                  <div className="sub_sub_cont1 downamc">
                      <select className='amcitem1 inputamc'>
                        <option value="ARN-1668"> ARN-1668 </option>
                        <option value="ARN-00000"> ARN-00000 </option>
                      </select>
                  </div>
                  <div className="sub_sub_cont1">
                     <p>Invoice Date :</p>
                     <input type="date" id="Red3" />
                  </div>
                </div>




              <div className="amccont1">
                  <div className="sub_sub_cont1">
                    <p>Billing Name :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>GSTIN :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>SAC :</p>
                    <input type="text" className='inputamc'/>
                  </div>                
              </div>






              <div className="amccont1">
                  <div className="sub_sub_cont1">
                    <p>Address1 :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Address2 :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Address3 :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
              </div>






              <div className="amccont1">
                  <div className="sub_sub_cont1">
                    <p>City :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Pin:</p>
                    <input type="text" className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>State :</p>
                    <select id="country-state" name="country-state" className='amcitem1 inputamc'>
                        <option value="AP">Andhra Pradesh</option>
                        <option value="AN">Andaman and Nicobar Islands</option>
                        <option value="AR">Arunachal Pradesh</option>
                        <option value="AS">Assam</option>
                        <option value="BR">Bihar</option>
                        <option value="CH">Chandigarh</option>
                        <option value="CT">Chhattisgarh</option>
                        <option value="DN">Dadra and Nagar Haveli</option>
                        <option value="DD">Daman and Diu</option>
                        <option value="DL">Delhi</option>
                        <option value="GA">Goa</option>
                        <option value="GJ">Gujarat</option>
                        <option value="HR">Haryana</option>
                        <option value="HP">Himachal Pradesh</option>
                        <option value="JK">Jammu and Kashmir</option>
                        <option value="JH">Jharkhand</option>
                        <option value="KA">Karnataka</option>
                        <option value="KL">Kerala</option>
                        <option value="LA">Ladakh</option>
                        <option value="LD">Lakshadweep</option>
                        <option value="MP">Madhya Pradesh</option>
                        <option value="MH">Maharashtra</option>
                        <option value="MN">Manipur</option>
                        <option value="ML">Meghalaya</option>
                        <option value="MZ">Mizoram</option>
                        <option value="NL">Nagaland</option>
                        <option value="OR">Odisha</option>
                        <option value="PY">Puducherry</option>
                        <option value="PB">Punjab</option>
                        <option value="RJ">Rajasthan</option>
                        <option value="SK">Sikkim</option>
                        <option value="TN">Tamil Nadu</option>
                        <option value="TG">Telangana</option>
                        <option value="TR">Tripura</option>
                        <option value="UP">Uttar Pradesh</option>
                        <option value="UT">Uttarakhand</option>
                        <option value="WB">West Bengal</option>
                    </select>
                  </div>
              </div>




              <div className="amccont1">
              <div className="sub_sub_cont1">
                    <p>PAN :</p>
                    <input type="text"  className='inputamc' />
                  </div>
                  <div className="sub_sub_cont1">
                    <p>CIN :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Phone :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
              </div>

              <div className="amccont1">
                 <div className="sub_sub_cont1">
                    <p>Invoice No :</p>
                    <input type="text"  className='inputamc'/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Billing Period :</p>
                    <input type="date" className='amcd1' id="Red1"/>
                    <span className='amcdash'>-</span>
                    <input type="date" className='amcd1' id="Red2"/>
                  </div>
                  <div className="sub_sub_cont1">
                    <p>Gross Commission Received (Rs) :</p>
                    <input type="number" id="Red"  />
                  </div>
              </div>
          </div>



          
          <div className="amcbill_cont amcbill123">
            <p>CGST(%):</p>
            <p>(Rs):0</p>
            <p>SGST(%):</p>
            <p>(Rs):0</p>
            <p>IGST(%):</p>
            <p>( {'\u20A8'} ):0</p> 
          </div>




          <div className=" amcbilln1">
             <div>
                <p>Signature Name :</p>
                <input type="text"  className='inputamc'/> 
             </div>
              <label htmlFor="viewdata2" className='inputr'>
                <input type="checkbox" name="view_data1" id="Red5" />Tax Paid
              </label>
          </div>


          <div className="amcbill_cont amcbilln">
             <p>Bill Description :</p>
             <input type="text"  className='inputamc billgk'/>
          </div>

          <div className="amcbill_cont ">
              <div className='port_btn'>
                  <button className='buttons'>Proceed</button>
              </div>
          </div>

      </form>
    </div>
  )
}
