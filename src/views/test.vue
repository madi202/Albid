<template>
  <div>
	  {{data}}
	  	<div v-for="(item,index) in data" :key="index">
			  {{item}}
		  </div>
  </div>
</template>

<script>
export default {
	created : function(){
			this.data.push('')
	},
data(){
	return {
		data : ["rahmadi",'keika','cenatar']
			
		
	}
}
}
</script>

<style>

</style>