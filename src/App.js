import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
//import Form from '../../Form';
import Form from './component/Form';
import Recipe from './component/Recipe';
//import Recipe from '../../Recipe';
const API_KEY = "e8ce2b851e8bc53cff7551070081098c";

class App extends Component {

    state = {
      recipes:[]
    }

    getRecipe = async (e) =>{
      const recipeName = e.target.elements.recipeName.value;
      e.preventDefault();
      const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipeName}&count=12`);
      const data = await api_call.json();
      this.setState({ recipes: data.recipes});
     console.log(this.state.recipes);
    }
    ComponentDidMount(){
      this.getRecipe();
    }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Recipe Search </h1>
        </header>
      <Form getRecipe={this.getRecipe}/>
      <Recipe recipes={this.state.recipes}/>
      </div>
    );
  }
}
export default App;
