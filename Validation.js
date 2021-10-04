import React, { Component } from 'react'
const regForEmail=RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
const regForName=RegExp(/^[a-zA-Z]/);
const regForAge=RegExp(/^[0-9]/);
const regForMobile=RegExp(/^[0-9]{10}/);
const regForPan=RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
const regForAdhar =RegExp(/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/);
export class Validation extends Component {
    constructor(props){
        super(props);
        this.state={
            name:null,
            email:null,
            password:null,
            cpassword:null,
                age:null,
                mobile:null,
                pan:null,
                pincode:null,
                Adhar:null,
            errors:{
                name:'',
                email:'',
                password:'',
                cpassword:'',
                age:'',
                mobile:'',
                pan:'',pincode:'',Adhar:''
            }
        }
    }
        handler=(event)=>{
            const {name,value}=event.target;
            let errors=this.state.errors;
            switch(name){
                case 'name':
                    errors.name=regForName.test(value) ?'':'Name should be character ';
                    
                    break;
                case 'email':
                    errors.email=regForEmail.test(value)?'':'Email is not valid';
                    break;
                case 'password':
                        errors.password=value.length<8?'Password must me 8 chanrater long':'';
                        break;
                        case 'cpassword':
                            errors.cpassword= value === this.state.password?'':'Password mismatch!';
                            
                            break;
                        case 'age':
                            errors.age=regForAge.test(value) && value > 18 ?'':'Not eligible';
                            
                            break;
                        case 'mobile':
                            errors.mobile=regForMobile.test(value) ?'':'shou be 10 digit';
                            
                            break;
                            case 'pan':
                            errors.pan= regForPan.test(value)?'':'Must be valid';
                            
                            break;
                            case 'pincode':
                            errors.pincode=value.length<=6?'Must be 6 charaters':'';
                            
                            break;
                            case 'Adhar':
                            errors.Adhar=regForAdhar.test(value) ?'':'Enter valid number';
                            
                            break;
                    break;
            }
            this.setState({errors,[name]:value},()=>{
                console.log(errors)
            })
        }
        formSubmit=(event)=>{
           event.preventDefault();
           if(this.validate(this.state.errors))
           {
               alert("Succesfully Submitted");
           }
           else {
               alert("Invalid Form");
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
            <div>
                <h2> Form Validation</h2>
                <form onSubmit={this.formSubmit}>
                    <table>
                        <tbody>
                    <tr>
                                <td>FirstName: </td>
                                <td> <input type="text" id="fname" name="name" onChange={this.handler}/><br/> {errors.name.length>0 && 
                                                        <span style={{color:'red'}}>{errors.name}</span>}</td>
                            </tr>
                            <tr>
                            <td>LastName: </td>
                                <td> <input type="text" id="lname" name="name" onChange={this.handler}/><br/> {errors.name.length>0 && 
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
                                <td className="pt-0">Confirm Password : </td>
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
                                <td>Adhar : </td>
                                <td> <input type="text" id="Adhar" name="Adhar" onChange={this.handler}/><br/> {errors.Adhar.length>0 && 
                                                        <span style={{color:'red'}}>{errors.Adhar}</span>}</td>
                            </tr>
                            <tr>
                                <td>PanCard : </td>
                                <td> <input type="text" id="pan" name="pan" onChange={this.handler}/><br/> {errors.pan.length>0 && 
                                                        <span style={{color:'red'}}>{errors.pan}</span>}</td>
                            </tr>
                            <tr>
                            <td>Date-of-birth : </td>
                                <td><input type="date" id="birthday" name="birthday"/></td>
                                </tr>
                            <tr>
                                <td> Gender:</td>
                                <td> Male<input type="radio" id="male" name="gender" ></input>
                                 Female<input type="radio" id="female" name="gender" ></input></td>

                          </tr>
                          <tr>
                                <td> Hobbies:</td>
                                <td> cricket<input type="checkbox" id="cricket" name="Hobbies" ></input>
                                 Football<input type="checkbox" id="football" name="Hobbie" ></input>
                               chess<input type="checkbox" id="chess" name="Hobbies" ></input>
                                 hockey<input type="checkbox" id="hockey" name="Hobbie" ></input></td>

                          </tr>
                         
                          <tr>
                              <td>Pincode:</td>
                              <td><input type="text" name="pincode"onChange={this.handler}/><br/> {errors.pincode.length>0 && 
                                                        <span style={{color:'red'}}>{errors.pincode}</span>} </td>
                          </tr>
                         
                           <tr>
                               <td>State</td>
                               <td> <select name="states" id="state">
    <option value="Telangana">Telangana</option>
    <option value="Andhrapradhesh">Andhrapradhesh</option>
    <option value="Maharastra">Maharastra</option>
    <option value="pune">Pune</option>
  </select></td>
                           </tr>
                           
                           <tr>
                               <td>Nationality</td>
                               <td> <select name="Nation" id="nation">
    <option value="India">India</option>
    
  </select></td>
                           </tr>
                           
                           
                           

                <tr><td colSpan="2" className="sub"><input className="button" type="submit" value="Submit"/></td></tr>
                </tbody>
                </table>
                </form>
            </div>
        )
    }
}

export default Validation
