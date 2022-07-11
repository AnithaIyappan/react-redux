import { Component } from "react";
import { connect } from "react-redux";
import { buy_cake } from "../redux/cake/cakeAction";
import { buy_ice } from "../redux/icecream/iceAction";

class ItemContainer extends Component{
    render(){
        return(
            <div>
                <h2>Item -- {this.props.item}</h2>
                <button onClick={this.props.buyitem}>Buy Item</button>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const itemState = ownProps.cake ? 
    state.cake.numOfCakes : 
    state.icecream.numOfIceCreams
    return{
        item : itemState
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    const dispatchFunction = ownProps.cake ?
    () => dispatch(buy_cake()) : 
    () => dispatch(buy_ice())
    return{
        buyitem : dispatchFunction
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);