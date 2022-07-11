import React ,{ Component } from "react";
import {buy_ice} from "../redux/icecream/iceAction";
import { connect } from 'react-redux';

class IceContainer extends Component{
    render(){
        return(
            <div>
                <h1>Number of Icecreams -- {this.props.numOfIceCreams}</h1>
                <button onClick={this.props.buy_ice}>Buy IceCream</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        numOfIceCreams: state.icecream.numOfIceCreams
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        buy_ice : () => dispatch(buy_ice())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(IceContainer);
