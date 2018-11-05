import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
import CountDown from './CountDown';
import NewItem from './NewItem';
import Items from './Items';
//import ButtonWrapper from "./ButtonWrapper";
import './Application.css';
//const button = ()=><div><button>click me </button></div>;
//const WrappedComponent = ButtonWrapper(button);



const defaultState = [
  { value: 'Pants', id: uniqueId(), packed: false },
  { value: 'Jacket', id: uniqueId(), packed: false },
  { value: 'iPhone Charger', id: uniqueId(), packed: false },
  { value: 'MacBook', id: uniqueId(), packed: false },
  { value: 'Sleeping Pills', id: uniqueId(), packed: true },
  { value: 'Underwear', id: uniqueId(), packed: false },
  { value: 'Hat', id: uniqueId(), packed: false },
  { value: 'T-Shirts', id: uniqueId(), packed: false },
  { value: 'Belt', id: uniqueId(), packed: false },
  { value: 'Passport', id: uniqueId(), packed: true },
  { value: 'Sandwich', id: uniqueId(), packed: true },
];

class Application extends Component {
  state = {
    // Set the initial state,
      items: defaultState,
  };

    addItem =(value)=>{
   this.setState((prevState)=>{
       console.log([...prevState.items,value]);
       return {
           items: [...prevState.items,value]
       }
   })
 };
    removepackaedItems= (value)=>{
      const {items} =this.state;
    const filterValue = items.filter((row)=>row.id !== value.id);
    this.setState({
        items:filterValue
    });
  };
toogle = (value)=>{
  return  !value.packed;
};

 allUnmarked=()=>{
     const {items}= this.state;
     this.setState({
         items: items.map((row)=>{
           row.packed=false;
           return row;
         })
     })
 };
 onCheck= (value)=>{
    const {items}=this.state;
    const newitems = items.map((row)=>{
       if(row.id=== value.id){
           row.packed=this.toogle(value);
           console.log(row,row.packed);
       }
       return row;
    });
    this.setState({
        items: newitems
    })
 };
  // How are we going to manipulate the state?
  // Ideally, users are going to want to add, remove,
  // and check off items, right?

  render() {
    // Get the items from state
    const {items}=this.state;
      const packedItems = items.filter(row=>row.packed===true);
      const unpackeditems= items.filter(row=>row.packed===false);
    return (
      <div className="Application">
        <NewItem  onSubmit={this.addItem}/>
        <CountDown />
        <Items title="Unpacked Items" items={unpackeditems} onCheck={this.onCheck} removepackaedItems={this.removepackaedItems}/>
        <Items title="Packed Items" items={packedItems} onCheck={this.onCheck}  removepackaedItems={this.removepackaedItems}/>
        <button className="button full-width" onClick={this.allUnmarked}>Mark All As Unpacked</button>
          {/*<WrappedComponent />*/}
      </div>
    );
  }
}

export default Application;
