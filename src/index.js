import Post from "./Post"
import img from './assets/webpack-logo.png';
import './styles/style.css';
import './styles/style.scss';

const post = new Post ("Webpack new post");

console.log(post.toString(),img);