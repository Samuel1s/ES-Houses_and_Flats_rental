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
				<tr v-for="post in items" :key="post.rua">
					<td>{{ post.rua }}</td>
					<th></th>
					<td></td>
					<td>
						<button class="btn btn-danger" @click="removeItem(post)"> X</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { mapState, mapActions } from 'vuex'


	export default {
	name: 'ListPost',
	components: {},

	computed: {
        ...mapState({
            items: state => state.items
        })
	},
     
	methods: {
        ...mapActions([
			'removeItem'
		]),

	},

	mounted () {
        this.$store.dispatch('loadItems')
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