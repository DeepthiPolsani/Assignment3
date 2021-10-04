import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName=RegExp(/^[a-zA-Z]/);
const regForAge=RegExp(/^[0-9]/);
const regForMobile=RegExp(/^[0-9]{10}/);
export class Validation extends Component {
    constructor(props){
        super(props);
        this.state={
            password:null,
            dataTo:{

                name:null,
                email:null,
                password:null,
                cpassword:null,
                age:null,
                mobile:null
            },
            forTable:[],
            errors:{

                name:'',
                email:'',
                password:'',
                cpassword:'',
                age:'',
                mobile:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            let data = this.state.dataTo;
            switch(name){
                case 'name':
                    errors.name=regForName.test(value)?'':'Name should be character';
                    data.name = value;
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    data.email = value;
                    break;
                case 'password':
                        errors.password=value.length<8?'pass shou be 8 chanrater long':'';
                        data.password = value;
                        this.state.password=value;
                        break;
                case 'cpassword':
                    errors.cpassword= value === this.state.password?'':'Password mismatch!';
                    data.cpassword = value;
                    break;
                case 'age':
                    errors.age=regForAge.test(value) && value > 18 ?'':'Not eligible';
                    data.age = value;
                    break;
                case 'mobile':
                    errors.mobile=regForMobile.test(value) ?'':'shou be 10 digit';
                    data.mobile = value;
                    break;

            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           let temp = this.state.dataTo;
           if(this.validate(this.state.errors))
           {
               alert("Valid Form");
               this.setState({
                forTable: [...this.state.forTable,
                    {"name":temp.name,
                    "email":temp.email,
                    "password":temp.password,
                    "age":temp.age,
                    "mobile":temp.mobile}]
                });   
                document.getElementById('name').value='';       
                document.getElementById('email').value='';
                document.getElementById('password').value='';
                document.getElementById('cpassword').value='';
                document.getElementById('age').value='';
                document.getElementById('mobile').value='';
            }            
            else {
               alert("Invalid Form");
               document.getElementById('name').value='';       
               document.getElementById('email').value='';
               document.getElementById('password').value='';
               document.getElementById('cpassword').value='';
               document.getElementById('age').value='';
               document.getElementById('mobile').value='';
            }
        }
           
         validate=(errors)=>{
            let valid=true;
            Object.values(errors).forEach((val)=> val.length >0 && (valid=false));
            return valid;
        }
    render() {
        const {errors}=this.state;
        return (
            <div className="main">
                <p>.</p>
                <div className="d-flex justify-content-around">    
                    <div className="d-inline">
                        <div className="form">
                    <h2 className="text-success text-center"> Fill in the Details !</h2>
                    <form onSubmit={this.formSubmit}>
                        <table>
                            <tbody>
                            <tr>
                                <td>Name : </td>
                                <td> <input type="text" id="name" name="name" onChange={this.handler}/><br/> {errors.name.length>0 && 
                                                        <span style={{color:'red'}}>{errors.name}</span>}</td>
                            </tr>
                            <tr>
                                <td className="pb-0">Email : </td>
                                <td> <input type="text" id="email" name="email" onChange={this.handler}/><br/> {errors.email.length>0 && 
                                                        <span style={{color:'red'}}>{errors.email}</span>}</td>
                            </tr>
                            <tr>
                                <td className="pt-0">Password : </td>
                                <td> <input type="password" id="password" name="password" onChange={this.handler}/><br/>
                                                        {errors.password.length>0 && 
                                                            <span style={{color:'red'}}>{errors.password}</span>}</td>
                            </tr>
                            <tr>
                                <td className="pt-0">Cnf Password : </td>
                                <td> <input type="password" id="cpassword" name="cpassword" onChange={this.handler}/><br/>
                                                        {errors.cpassword.length>0 && 
                                                            <span style={{color:'red'}}>{errors.cpassword}</span>}</td>
                            </tr>
                            <tr>
                                <td>Age : </td>
                                <td> <input type="text" id="age" name="age" onChange={this.handler}/><br/> {errors.age.length>0 && 
                                                        <span style={{color:'red'}}>{errors.age}</span>}</td>
                            </tr>
                            <tr>
                                <td>Mobile : </td>
                                <td> <input type="text" id="mobile" name="mobile" onChange={this.handler}/><br/> {errors.mobile.length>0 && 
                                                        <span style={{color:'red'}}>{errors.mobile}</span>}</td>
                            </tr>
                            <tr>
                                <td colSpan="2" className="sub"><input className="button" type="submit" value="Submit"/></td>
                            </tr>
                            </tbody>
                        </table>

                    </form>
                </div>
                    </div>
                    <div className="table1">
                        <div className="text-center">
                        <h3 className="text-info py-3">Details</h3>
                        <table border='1'>
                            <thead>
                                <tr>
                                    <td>Sr. No</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Age</td>
                                    <td>Mobile</td>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.forTable.map((element, index) =>
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{element.name}</td>
                                            <td>{element.email}</td>
                                            <td>{element.age}</td>
                                            <td>{element.mobile}</td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                    </div> 
                </div>
            </div>)
    }
}

export default Validation