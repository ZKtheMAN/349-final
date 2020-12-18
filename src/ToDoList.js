import React from "react";
import "./ToDoList.css";

export class ToDoList extends React.Component {
    state = {
        items: ["Get milk",
                "Fry eggs",
                "Grade those stinkin finals"],
        textboxValue: ''
    }

    removeItem(num) {
        var items = this.state.items.slice();
        delete items[num];
        this.setState({items: items});
    }

    textboxChange(event) {
        this.setState({textboxValue: event.target.value});
    }

    addToItems() {
        var items = this.state.items.slice();
        items.push(this.state.textboxValue);
        this.setState({
            items: items,
            textboxValue: ''
        });
    }

    render() {
        let itemsList = this.state.items.map((value, index) => 
            <li onClick={() => this.removeItem(index)}>{value}</li>);

        return (
            <div className="ToDoList">
                <input type={"text"} value={this.state.textboxValue} onChange={this.textboxChange.bind(this)}></input>
                <button onClick={() => this.addToItems()}>Add</button>
                <button onClick={() => this.setState({items: []})}>Clear</button>
                <ol>
                    {itemsList}
                </ol>
            </div>
        );
    }
}