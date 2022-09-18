import React from 'react'
import './Dashboard.css';
import {IoIosPeople} from "react-icons/io";
import {FiChevronRight} from "react-icons/fi";
import logo from '../data/onlylogo.png';
import {moneylogo} from '../data/dummy'
import money from '../data/money.png';
import {BsFillTelephoneXFill} from "react-icons/bs";
import {VscPieChart} from "react-icons/vsc";
import {Pie,Table,Button,Stacked,Table_2} from '../components/';
import {ComplainceData,DuetaskData} from '../data/dummy';
import { SparklineAreaData,ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';
const Dashboard = () => {
    return (
        <div className='Dashboard'>
            <div className='carddash'>
             <div className='piebox'>
                <Pie/>
             </div>
            <div className="piebox1 cont">
                    <Button ico={<IoIosPeople/>} icon_head="No of Investers" icon_money="29,873" id="king" className="dashboxe1"/>
                    <Button ico={<BsFillTelephoneXFill/>} icon_head="SIP Clients" icon_money="4.035"className="dashboxe1"/>
             </div>

             <div className="piebox1 cont">
             <Button ico={<img src={money} alt='money' style={{height:'50px'}}/>} icon_head="No of Investers" icon_money="234556" className="dashboxe1" />
             <Button ico={<VscPieChart/>} icon_head="SIP Count in JUN22" icon_money="4035" className="dashboxe1"/>
             </div>
            </div>
            <div className='card'>
            <div className="busscard">
                <div className="heading flex gap-4 m-4 justify-between">
                    <div className='flex'>
                            <span className='text-xl font-bold'>Business update</span>
                        
                            <select name="drop" id="drop" className='ml-4 shadow-md p-2 text-white cursor-pointer dropblu'>
                                <option value="volvo">This month</option>
                                <option value="saab">year</option>
                                <option value="opel">weak</option>
                            </select>
                    </div>
                    <div className='flex cursor-pointer' style={{}}>
                        <span className="blutxt">View More</span><FiChevronRight className='blutxt1'/>
                    </div>
                </div>
                <div className="table_data">
                    <Table/>
                </div>
            </div>
            </div>
            <div className="trans_data">
                <div className="trans1">
                    <Stacked/>
                </div>
                <div className="trans2">
                    <div className="complaince trans3">
                        <Table_2 tab_header="Complaince" tableData={ComplainceData}/>
                    </div>
                    <div className="duetask trans3">
                        <Table_2 tab_header="Due Task" tableData={DuetaskData}/>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Dashboard


