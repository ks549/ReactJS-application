import React from 'react';
import ReactDom from'react-Dom';
import Comment from './component/Comment';
import Contact from './component/Contact';

var app = document.getElementById('app');

ReactDom.render(<Comment/>,app);

var contact_app = document.getElementById("contact_app");
ReactDom.render(<Contact/>,contact_app);

