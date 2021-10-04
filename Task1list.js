import React, { Component } from 'react'
import Task1 from './Task1'

const emp=[{id:1,name:'deepthi',salary:'123',experience:'1'},
{id:12,name:'deepthi',salary:'123',experience:'1'},
{id:13,name:'deepthi',salary:'123',experience:'1'},
{id:14,name:'deepthi',salary:'123',experience:'1'},
{id:15,name:'deepthi',salary:'123',experience:'1'},
{id:16,name:'deepthi',salary:'123',experience:'1'},
{id:17,name:'deepthi',salary:'123',experience:'1'},
{id:18,name:'deepthi',salary:'123',experience:'1'},
{id:1,name:'deepthi',salary:'123',experience:'1'},
{id:1,name:'deepthi',salary:'123',experience:'1'},
{id:1,name:'deepthi',salary:'123',experience:'1'}]

export class Task1list extends Component {
    render() {
        return (
            <div>
                <Task1 emp={emp}/>
            </div>
        )
    }
}

export default Task1list
