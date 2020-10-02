<template>
    <div>
        <input type="date" :value="searchText" @input="searchText = $event.target.value"> {{searchText}}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                searchText: undefined
            }
        },
        filters : {
            formatdate: function (value) {
                if (value) {
                    return moment(String(value)).format('LL')
                }
            },
        }
    }
</script>

<style>

</style>