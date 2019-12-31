import React from 'react';
import Card from './Card';




class Home extends React.Component {
    render(){
    return (
        <div className="container">

            <div className="row">
                <div className="col-md-12 d-flex justify-content-center">
                    <Card icon={"fas fa-clock"}/>
                    <Card number={this.props.num4}/>
                    <Card number={this.props.num3}/>
                    <Card number={this.props.num2}/>
                    <Card number={this.props.num1}/>
                </div>
            </div>
        </div>
    )
}
}
export default Home;