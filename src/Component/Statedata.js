import React, {Component} from 'react';
import {Accordion,Card} from 'react-bootstrap';
const Axios = require('axios');

class Statedata extends Component{
    constructor(){
        super();
        this.state = {
            stateData : {}
        }
    }
componentDidMount(){
    Axios.get(("https://api.covid19india.org/state_district_wise.json")).then(response=>{

       console.log( response.data);
        this.setState({stateData:response.data});
    });
}

    render(){
        let keys = Object.keys(this.state.stateData);
        return(
            <div className = "row">
                <div className ="col-md-12">
                <Accordion>
                    {
                        keys.map((itm,k)=>{

                            let districts = this.state.stateData[itm].districtData;
                            let districtKeys = Object.keys(districts);

                            let total_active = 0;
                            let total_recover = 0;
                            let total_confirmed = 0;
                            let total_deaths = 0;

                            let district_list = [];

                            for(let x in districts){
                                total_active += districts[x].active; 
                                total_recover += districts[x].recovered;
                                total_confirmed += districts[x].confirmed; 
                                total_deaths += districts[x].deceased; 
                                
                                let ob = districts[x];
                                ob["district_name"]=x;
                                district_list.push(ob);
                            }
                            console.log(district_list);

                            return(
                                <Card>
                            <Accordion.Toggle as={Card.Header} eventKey={k} className="m-2 p-3 mb-2 bg-info" >
                                {itm} - <span className = "btn-dark p-1 mr-3"> Total Cases - {total_confirmed} Active - {total_active} Recovered - {total_recover} Total Deaths - {total_deaths}</span>
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey={k}>
                                <Card.Body>
                                    <table className="table table-bordered table-striped">
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
                                                district_list.map((itm,k)=>{
                                                    return(
                                                        <tr>
                                                            <td>{itm.district_name}</td>
                                                            <td>{itm.confirmed}</td>
                                                            <td>{itm.active}</td>
                                                            <td>{itm.recovered}</td>
                                                            <td>{itm.deceased}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                            )
                        })
                    }
                        
                    </Accordion>
</div>
</div>
        );
    }
}
export default Statedata;