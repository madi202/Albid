<template>
	<div>
		<!-- {{test1}} -->
		<div>
			<label for="">input 1</label>
			<input type="text" v-model="data.test1">
		</div>
		<div>
			<label for="">input 2</label>
			<input type="text" v-model="data.test2">
		</div>
		<div>
			<label for="">input 3</label>
			<input type="text" :value="gravida">
		</div>

		{{test3}}
	</div>
</template>

<script>
	import moment from 'moment'
	export default {
		data() {
			return {
				
				data: {
					test1: 0,
					test2: 0,
				test3 : 0
				}
			}
		},
		computed: {
			gravida: function () {
				let gravid = parseInt(this.data.test1) + parseInt(this.data.test2);
				this.data.test3 = gravid
				return gravid;
			}
		}

	}
</script>

<style>

</style>