import React from 'react'
import {connect} from 'react-redux'
import {addTodo,deleteTodo, toggleTodo,userLogin,userLogout} from '../Redux/action'

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value : ""
        }
    }
    render(){
        const {todo, addTodo,deleteTodo, toggleTodo, isauth,userLogin,userLogout} = this.props;
        console.log(todo)
        console.log(isauth)
        if(isauth){
            return(
                <>
                    <h1>TODO</h1>
                    
                    <input type="text" placeholder="Add a Task" value={this.state.value} onChange = {e => this.setState({
                        value: e.target.value
                    })}>
                    </input>
    
                    <button onClick = {() => {addTodo(this.state.value)}}>ADD</button>
    
                    {todo && todo.map(item => <div key={item.id}>{item.title}
                       <button style ={{marginLeft:15}} onClick = {() => {deleteTodo(item.id)}}>X</button>
                        <button style ={{marginLeft:15}} onClick = {() => {toggleTodo(item.id)}}>{item.status?"Pending":"Done"}</button>
                    </div>)}

                    <button onClick = {() => userLogout()}>Logout</button>
                    
                </>
            )
        }
        else{
            return(
                <div>
                    <button onClick = {() => userLogin()}>Login</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    todo : state.app.todo,
    isauth : state.auth.isauth
})

const mapDispatchToProps = dispatch => ({
    addTodo : payload => dispatch(addTodo(payload)),
    deleteTodo : payload => dispatch(deleteTodo(payload)),
    toggleTodo : payload => dispatch(toggleTodo(payload)),
    userLogin : () => dispatch(userLogin()),
    userLogout : () => dispatch(userLogout())
})

export default connect(mapStateToProps,mapDispatchToProps)(Todo)