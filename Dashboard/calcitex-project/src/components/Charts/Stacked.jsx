import React from 'react'
import {TransactionData } from '../../data/dummy';
import "./stacks.css";
   
  function Stacked() {
    return (
      <div className="stacks">
        <table >
          <tr >
            <th></th>
            <th>Last Trasacation Details</th>
            <th>crediantials_status</th>
          </tr>
          {TransactionData.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.items}</td>
                <td>{val.LTD}</td>
                <td>{val.crediantials_status}</td>
              </tr>
            )
          })}
        </table>
      </div>
    );
  }

export default Stacked
