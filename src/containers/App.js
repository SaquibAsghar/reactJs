import React from "react";
import "./App.css";
import Person from "../components/Persons/Person/Person";
import ValidationCheck from "../Validation/ValidationCheck";
import CharCount from "../Char/CharCount";
import Persons from '../components/Persons/Persons'

const Happy = () => <p>This is Happy</p>;

class App extends React.Component {
	state = {
		persons: [
			{ id : '11', name: "Saquib", age: 19 },
			{ id : '12', name: "Rohit", age: 29 },
			{ id : '13', name: "Jacob", age: 39 }
		],
    togglePerson: false,
    userInput:''
	};

	nameChangedHandler = (event,id) => {
    const personIndex = this.state.persons.findIndex(p=> p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex]= person;
		this.setState({
			persons:persons
		});
	};

	togglePersonHandler = () => {
		// const showPerson = this.state.togglePerson
		this.setState({
			togglePerson: !this.state.togglePerson
		});
		/*
      this also work perfectly fine
      this.setState((state) => {
        return {togglePerson : !state.togglePerson}
      })
    */
	};
	deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
		// const persons = [...this.state.persons]; this also works
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};
  textChangeHandler = (event)=>{
    this.setState({
      userInput:event.target.value
    })
  }
  deleteCharHandler = (index)=>{
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({
      userInput : updatedText
    })

  }
	render() {
    const charList = this.state.userInput.split('').map((ch,index)=> <CharCount key={index} click={()=>this.deleteCharHandler(index)} character={ch}/>)
		const styles = {
      backgroundColor: 'green',
      color: "white",
			font: "inherit",
			border: "1px solid blue",
			padding: "8px",
			cursor: "pointer"
		};
		let persons = null;
		if (this.state.togglePerson) {
			persons = (
				<div>
					<Persons 
						persons = {this.state.persons}
						clicked = {this.deletePersonHandler}
						change = {this.nameChangedHandler} />
				</div>
      );
        styles .backgroundColor='red';
      
		}
		return (
			<div className="App">
				<button style={styles} onClick={this.togglePersonHandler}>
					Switch name
				</button>
				{persons}
				<Happy />
        <input 
          type = 'text' 
          value={this.state.userInput} 
          onChange={this.textChangeHandler} />
          <p>{this.state.userInput}</p>
        <ValidationCheck textLength={this.state.userInput.length} />
        { charList }
			</div>
		);
	}
}

export default App;
