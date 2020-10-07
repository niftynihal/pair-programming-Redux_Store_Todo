import React from "react";
import { connect } from "react-redux";

class Total extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            clicked : false
        }
    }
    render(){
        const { total, completed, incomplete} = this.props
        return (
            <div>
                <div style={{display: "flex", flexDirection:"row", width: 300, margin:"auto"}}>
                    <p style ={{textAlign:"center",margin:20, fontWeight:"bold"}}>Total{' '}{total}</p>
                    <p style ={{textAlign:"center",margin: 20,fontWeight:"bold"}}>Completed{' '}{completed}</p>
                    <p style ={{textAlign:"center", margin: 20, fontWeight:"bold"}}>Pending{' '}{incomplete}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => { 
    return {
        total:state.total,
        completed:state.completed,
        incomplete: state.incomplete
    };
};

const mapDispatchToProps = (dispatch) =>({
})

export default connect (mapStateToProps, mapDispatchToProps)(Total);