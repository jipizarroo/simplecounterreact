import React from 'react';




class Card extends React.Component{

    render(){

        const salida = this.props.number >= 0 ? this.props.number : <i className={this.props.icon} /> 
        return (
            <div className="card">
            <div className="card-body">
                {salida}
            </div>
        </div>
        )
    };
};

export default Card;