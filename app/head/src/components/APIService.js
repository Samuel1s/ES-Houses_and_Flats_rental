import axios from 'axios';
const API_URL = 'http://localhost:8000';

export class APIService {
    
	constructor(){
	}

    //To get all posts.
	getPosts = () => {
		const url = `${API_URL}/user/posts/`;
		try {
		return axios.get(url).then(response => response);
		} catch(error) {
		console.log(error);
		}
	}
    
    //To get especfic post.
	getPost(post) {
		const url = `${API_URL}/user/post/${post._id}`;
		return axios.get(url).then(response => response.data);
	}
    
    //To delete a especfic post. "Why axios.delete dont works."
	deletePost(post){
	const url = `${API_URL}/user/dl_post/${post._id}`;
	return axios.get(url);
	}
    
    //To create a new post. 
	createPost(post){
	const url = `${API_URL}/user/create/`;
	return axios.post(url,post);
	}

	createHouse(obj){
	console.log(obj);
	const url = `${API_URL}/user/create_house/`;
	return axios.post(url,obj);
	}

	updatePost(post){
		const url = `${API_URL}/user/up_post/${post._id}`;
		return axios.put(url,post);
	}
}
