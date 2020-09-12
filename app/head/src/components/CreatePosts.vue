<template>
	<div id="container" class="container">
		<div class="row">
			<div class="col-sm-8 offset-sm-2">
				<div class="alert alert-warning" v-show="showError" >
						<button type="button" class="close" @click="hideMessage()">X</button>
						<strong>Error!</strong>
				</div>

				<h1>Criação de um novo usuário.</h1>

				<div class="info-form">
					<form>
						<div class="form-group">
							<label for="name">Todo name</label>
							<input v-model="post.name" type="text" class="form-control" id="name" aria-describedby="nameHelp" placeholder="Enter Name">
						</div>
					</form>
               
					<button class="btn btn-primary" @click="createPost()" ><span>Create</span></button>
					<button class="btn btn-primary" @click="newPost()" >New..</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import {APIService} from './APIService';
	const apiService = new APIService();
   
   
	export default {
	name: 'CreatePosts',
	components: {},
	data() {
		return {
			showError: false,
			post: {}
		};
	},
    
	methods: {
		createPost(){
			apiService.createPost(this.post).then((result)=>{
				console.log(result);
					if(result.status === 201) {
						this.post = result.data;
					}
			},
			(error)=>{
				this.showError = error;
			});
			},

		updatePost(){
			apiService.updatePost(this.post).then((result)=>{
					console.log(result);
			},
			(error)=>{
				this.showError = error;
			});
			},

		newPost(){
			this.post = {};
		}
	},

	}
</script>


<style scoped>
	.aform{
		margin-left: auto;
		width: 60%;
	}
</style>