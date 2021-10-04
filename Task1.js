import React, { Component } from 'react'

export class Task1 extends Component {
    render() {
        return (
            <div>
                <table  style={{ "border":1}}>
                    <thead>
                        <tr >
                            <th>id</th>
                            <th>name</th>
                            <th>salary</th>
                            <th>experience</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.props.emp.map((val,i)=>
                        <tr key={i} className={val.design}>
                            <td>{val.id}</td>
                            <td>{val.name}</td>
                            <td>{val.salary}</td>
                            <td>{val.experience}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Task1
