import React , {Component} from 'react';

class Welcome extends Component{

    
    render(){
        return(
            <div>
                <p>{this.props.title}</p>
            </div>
        )
    }

}
export default Welcome;