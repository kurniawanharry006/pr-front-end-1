import React from'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './component/header'
import Footer from './component/footer'
import Todo from './component/todo'
import Add from './component/add'


class App extends React.Component {
  state = {
    items : [
      {name : 'Kacang'},
      {name : 'Kwaci'},
      {name : 'Permen'},
        ]
  }


deleteItem = (id)=>{
  let items = this.state.items;
  let i = items.findIndex(item=> item.id === id)
  items. splice(i,1)
  this.setState({items})
}


addItem = (x) =>{
  x.id = Math.random();
  let items = this.state.items;
  items.push(x);
  this.setState({items})
}



  render(){
    return (
      <div className="text-center">
        <Header/>
        <div>
          <center>
        <Todo items={this.state.items} deleteItem={this.deleteItem}/>
        <Add addItem={this.addItem}/>
       
        </center>
        </div>
        <Footer/>
       
          </div>      
    )
    
  }
  
}
export default App