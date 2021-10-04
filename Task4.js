import React, { Component } from 'react'
import json from './products.json'
let items=[];
export class Task4 extends Component {
    constructor(props){
        super(props);
    this.state={total:0}
    }
   
    totalBill(){
        let{total}=this.state;
        items.map((obj)=>
        total+=obj.price*obj.quantity)
        this.setState({
            total:total
        })
    }
    componentDidMount(){
        this.totalBill();
    }
    render() {
        if (sessionStorage.getItem('mycart')!=undefined){
            items=JSON.parse(sessionStorage.getItem('mycart'));
        }
        return (
            <div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th>id</th>
                           
                            <th>price</th>
                            <th>quantity</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                  <tbody>
                      {items.map((obj)=>
                      <tr key={obj}>
                          <td>{obj.id}</td>
                          
                          <td>{obj.price}</td>
                          <td>{obj.quantity}</td>
                          <td>{obj.price*obj.quantity}</td>
                          </tr>
                      )}
                  </tbody>
                </table>
                <h3 > SubTotal=${this.state.total}</h3>
            </div>
        )
    }
}

export default Task4
