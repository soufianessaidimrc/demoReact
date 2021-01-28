
import React, {Component}from 'react';
import BackgroundI from './backG.jpg';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }

 

 

 

 

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  addItem() {
    // create a new item with unique id
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()
 
    };

    // copy current list of items
    const list = [...this.state.list];

    // add the new item to the list
    list.push(newItem);

    // update state with new list, reset the new item input
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) {
    // copy current list of items
    const list = [...this.state.list];
    // filter out the item being deleted
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  }
  
  render() {
    return (
      <div 
      style={{
        backgroundImage:"url("+BackgroundI+")",
        textAlign:"center",
        margin: "auto",
        color:"white",
        borderRadius:"15px"
      }}
      >
        

      <h1 className="app-title">TO DO</h1>
        
        <div className="container" >
        <div
          style={{
           textAlign:"center",
            margin: "auto",
            fontSize:"20px"
          }}
        >
          Add an Item...
          <br />
          <input style={{
            fontSize:"20px",
            margin: "auto"
          }}
            type="text"
            placeholder="Type item here"
            value={this.state.newItem}
            onChange={e => this.updateInput("newItem", e.target.value)}
          />
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}
          >
            <i style={{
            fontSize:"20px",
            margin: "auto"
          }}
          class="material-icons"> + </i>
          </button>
          <br /> <br />
          <ul style={{
            listStyleType:"none",
          }}>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">x</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}





export default App;
