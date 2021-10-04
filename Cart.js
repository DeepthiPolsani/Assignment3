import React, { Component } from 'react'
import json from './products.json'
import Task4 from './Task4';

let arr=[];
export class Shoping extends Component {
    constructor(props){
        super(props)
        this.state={
            l:0,
            update:true
        };
    }
    componentDidMount(){
        if(sessionStorage.getItem('mycart')!=undefined){
            
            arr=JSON.parse(sessionStorage.getItem('mycart'));
            this.setState({l:arr.length});
        }
        
    }

    addToCart(i){
        var check=0;
        if(sessionStorage.getItem('mycart')!=undefined){
            arr=JSON.parse(sessionStorage.getItem('mycart'));
            arr.map((obj)=>
            {if(obj.id==i.id){
                obj.quantity++
                sessionStorage.setItem('mycart',JSON.stringify(arr));
                check=1;
            
            }})
            if(check==0){
                arr.push(i);
                sessionStorage.setItem('mycart',JSON.stringify(arr));
            }
            
        }
        else{
            arr.push(i);
            sessionStorage.setItem('mycart',JSON.stringify(arr));
        }
        console.log(arr);
        this.counter();
    }
    counter(){
        let arr=JSON.parse(sessionStorage.getItem('mycart'));
        this.setState({l:arr.length});

    }
    change(x){
        this.setState({
            update:!x
        })
        console.log(this.state.update);
    }
    render() {
        return (
            
                <>
                    <nav class="nav flex-column">
  <a class="nav-link active" href="#">Home</a>
  <a class="nav-link" href="#">About</a>
  <a href="#" onClick={()=>this.change(this.state.update)} >Cart
                            {this.state.l?<span >{this.state.l}</span>:null} </a>
  <a class="nav-link disabled" href="#">Disabled</a>

                        
                        
                        
                        
                    </nav>
                    {this.state.update?
                    <div className=" container-fluid row g-4">
                            {json.products.map((item,i)=>
                                <div className="col-sm-3" key={i}>
                                    <div className="card text-center p-3 border border-info" >
                                        <img src={`${item.image}`} height="150px" className="card-img-top" alt="car"/>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.pname}</h5>
                                            <p className="card-text">Price : $ {item.price}</p>
                                          
                                            <button onClick={()=>this.addToCart(item)} > Add to cart</button>
                                        </div>
                                    </div>
                                </div>)
                            }

                    </div>:
                    <Task4 /> }
                </>
            )
        }
    }

export default Shoping
