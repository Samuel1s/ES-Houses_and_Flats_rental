<template>
	<div id="slice1">
		<h1>Lista de Usuários Teste.</h1>
		<table class="table table-bordered table-hover">
			<thead>
				<tr>
					<th>#</th>
					<th>Name</th>
					<th>Actions</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="post in posts" :key="post.name">
					<td>{{ post.name }}</td>
					<th></th>
					<td></td>
					<td>
						<button class="btn btn-danger" @click="deletePost(post)"> X</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import {APIService} from './APIService';
	const apiService = new APIService();

	export default {
	name: 'ListPost',
	components: {},

	data() {
		return {
			posts: [],
			numberOfPosts:0
		};
	},
     
	methods: {
    
	getPost(){
		apiService.getPosts().then((data) => {
			this.posts = data.data;
			this.numberOfProducts = data.count;
		});
	},

	deletePost(post){
		apiService.deletePost(post).then((r)=>{
		if(r.status === 204) {
			alert("Post deleted");
			this.$router.go()
		}
        })
	},

	},

	mounted() {
	this.getPost();
	},

	}
</script>

<style scoped>
	#slice1 {
    display: flex;
    flex-direction: column;
    align-items: center;
	}

	.list-horizontal li {
	display: inline-block;
    }

	.list-horizontal li:before {
		content: '\00a0\2022\00a0\00a0';
		color:#999;
		color:rgba(0,0,0,0.5);
		font-size:11px;
	}

	.list-horizontal li:first-child:before {
		content: '';
	}
</style>