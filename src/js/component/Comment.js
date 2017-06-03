import React from 'react';
import ReactDom from 'react-dom';


export default class Comment extends React.Component{
	constructor(){
		super();

		this.add = this.add.bind(this);
		this.state ={
			data: [],
			title:"Enter Your Comment",
			id: 1
		};
	}

	add(event){
		event.preventDefault();
		let name = this.refs.name.value;
		let comment = this.refs.comment.value;
		let id = this.state.id;
		id += 1;
		let info = {
			name,
			comment,
			id
		};

		let data = this.state.data;
		data.push(info);

		this.setState({
			data:data
		});

		this.refs.commentform.reset();
	}

	render(){
		let title = this.state.title;
		let data =this.state.data;
		return (
			<div>
			
			<h3>{title}</h3><br/>
			<form ref="commentform">
			<input type="textbox" ref="name" placeholder="Enter your name" /><br/><br/>
			<textarea row="4" cols="50" id="t1" ref="comment" placeholder="Comments"/> <br/>
			<button type="Submit" id="b1" onClick={this.add}>Post</button>
			</form>
			<pre>
				<ul>
					{data.map((info=><li>{info.name}: {info.comment}</li>))}
				</ul>
			</pre>
			</div>);
	}

}