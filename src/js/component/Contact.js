import React from 'react';
import ReactDom from 'react-dom';

export default class Contact extends React.Component{
	
	constructor(){
		super();

		this.email = this.email.bind(this);
		this.state = {
			
			data : [],
			title : 'Email-generator'
		};
	}

	email(e){
		e.preventDefault();

		let firstname = this.refs.firstname.value;
		let lastname = this.refs.lastname.value;
		
		

		let fullname = {
			firstname,lastname
		};

		let data =  this.state.data;
		data.push(fullname);

		this.setState({
			data:data
		});

		this.refs.formref.reset();
	}

	render(){
		let title = this.state.title;
		let data  = this.state.data;
		return (
			<div>
			<h5>{title}</h5><br/>
			<form ref="formref">
			<input type="textbox" ref="firstname" placeholder="Enter your firstname"/><br/><br/>
			<input type="textbox" ref="lastname" placeholder="Enter your lastname"/><br/><br/>
			<button onClick={this.email}>Email-Generate</button>
			</form>
			<pre>
			<ul>
				{data.map((fullname=> <li>email:{fullname.firstname}.{fullname.lastname}@marlabs.com</li>))}
			</ul>
			</pre>
			</div>

			);
	}
}