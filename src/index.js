import Post from "./Post";
import img from "./assets/webpack-logo.png";
import "./styles/style.css";
import "./styles/style.scss";
import json from  "./assets/json.json";

import React from "react";
import  ReactDom from "react-dom";

function Index() {
    return (
        <div>
            <h1>Hello World</h1>
        </div>
    );
}

ReactDom.render(<Index/>, document.getElementById("root"));


const post = new Post ("Webpack new post");
console.log(json);
Object.keys(json).map(item => console.log(json));
console.log(post.toString(),img);