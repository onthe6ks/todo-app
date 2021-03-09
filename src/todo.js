import React, { Component } from 'react'

export default class Todo extends Component {
    
    constructor(props){
        super(props);
        this.state = {
                todos: [],
                name: ''
            };
        }
        
    onInput = (e) => {
        this.setState ({
           name : e.target.value
        });
    }
    
    addTodo = () => {
        const {todos, name} = this.state;
        this.setState({
            todos : [...todos, name]
        });
    }
    
    removeTodo = (index) =>{
        const {todos, name} = this.state;
         this.setState({
             todos : [...todos.slice(0,index), ...todos.slice(index + 1)]
         });
    }
    
    render() {
        const { todos } = this.state;
        
        return( <div>
                <div id="listTitle">
                旅行の持ち物リスト
                </div> 
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">品物</th>
                            <th scope="col">個数</th>
                            <th scope="col"></th>

                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{todo}</th>
                        <th>1</th>
                        <th><button type="button" className="btn btn-danger"  onClick={() => { this.removeTodo(index) }}>削除</button></th>
                        </tr>)}
                        <tr>
                            <th></th>
                            <th><input type="text" onInput = {this.onInput} /></th>
                            <th>1</th>
                            <th><button type="button" className="btn btn-info" onClick={this.addTodo}>追加</button></th>
                        </tr>


                    </tbody>
                </table>
               
            </div>);
    }
    
}