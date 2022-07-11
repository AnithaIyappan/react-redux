import React ,{ Component } from "react";
import {buy_cake} from "../redux/cake/cakeAction";
import { connect } from 'react-redux';

class CakeContainer extends Component{
    render(){
        return(
            <div>
                <h1>Number of Cakes -- {this.props.numOfCakes}</h1>
                <button onClick={this.props.buy_cake}>Buy Cake</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buy_cake : () => dispatch(buy_cake())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
