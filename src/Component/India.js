import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import Statedata from './Statedata';
import Axios from 'axios';
class India extends Component{
    constructor(){
        super();
        this.state = {
            Data : {}
        }
    }
    componentDidMount(){
        Axios.get(("https://corona.lmao.ninja/v2/countries/india")).then(response=>{
    
           //console.log( response.data);
            this.setState({Data:response.data});
        });
    }
    render(){
        return(
            <div className="row">
                <div className = "col-md-12">
                    <img src="https://www.countryflags.io/in/shiny/64.png"/>
                    <h3>INDIA</h3>
                </div>

                <div className = "col-md-12" style={{display: 'flex'}}>

                    <div className = "col-md-3">
                    <Card className="bg-primary text-white" style={{ width: '18rem' }}>

                    <Card.Body className="text-center">
                    <Card.Title>TOTAL CASES</Card.Title>
                    <h3>{this.state.Data.cases}</h3>
                    <Card.Text>
                    [ Today : {this.state.Data.todayCases} ]
                    </Card.Text>
    
                    </Card.Body>
                    </Card>

                    </div>
                    <div className = "col-md-3">
                    <Card className="bg-warning text-white" style={{ width: '18rem' }}>

                    <Card.Body className="text-center">
                    <Card.Title>ACTIVE CASES</Card.Title>
                    <h3>{this.state.Data.active}</h3>
                    <Card.Text>
                    
                    </Card.Text>
    
                    </Card.Body>
                    </Card>

                    </div>
                    <div className = "col-md-3">
                    <Card className="bg-success text-white" style={{ width: '18rem' }}>

                    <Card.Body className="text-center">
                    <Card.Title>RECOVERED</Card.Title>
                    <h3> {this.state.Data.recovered} </h3>
                    <Card.Text>
                    
                    </Card.Text>
    
                    </Card.Body>
                    </Card>

                    </div>
                    <div className = "col-md-3">
                    <Card className="bg-danger text-white" style={{ width: '18rem' }}>

                    <Card.Body className="text-center">
                    <Card.Title>DEATHS</Card.Title>
                    <h3> {this.state.Data.deaths} </h3>
                    <Card.Text>
                    
                    </Card.Text>
    
                    </Card.Body>
                    </Card>

                    </div>
                    
                </div>
                <div className = "col-md-12">
                    <Statedata />
                </div>
            
            </div>
        )
    }
}
export default India;