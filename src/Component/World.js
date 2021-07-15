import React, {Component} from 'react';
import Axios from 'axios';

class World extends Component{
    constructor(){
        super();
        this.state = {
            Data : []
        }
    }
    componentDidMount(){
        Axios.get(("https://corona.lmao.ninja/v2/countries")).then(response=>{
    
            //console.log( response.data);
            this.setState({Data:response.data});
        });
    }

    render(){
        return(
            <div className = "row">
            <div className ="col-md-12">
            <table className="table table-bordered table-striped bg-info">
                                        <thead className="text-center">
                                            <tr>
                                                <td>District</td>
                                                <td>Confirmed</td>
                                                <td>Active</td>
                                                <td>Recovered</td>
                                                <td>Deaths</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.Data.map((itm,k)=>{
                                                    return(
                                                    <tr>
                                                        <td>{itm.country} 
                                                        <img style={{width : '32px',marginLeft :'10px'}} src ={itm.countryInfo.flag}/>
                                                        </td>
                                                        <td>{itm.cases} </td>
                                                        <td>{itm.recovered} </td>
                                                        <td>{itm.deaths} </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                        </tbody>
                                        </table>
            </div>
            </div>
        );
    }
}
export default World;