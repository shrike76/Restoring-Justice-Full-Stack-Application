<template>


<!--pie chart from https://chartkick.com/vue-->
<pie-chart :data="chartData">
</pie-chart>


</template>

<script>
 import axios from "axios";
    export default {
        data() {
            return {
                chartData: []
            }},
                created() {
                let apiURL = 'http://localhost:3000/chart';
                axios.get(apiURL).then(res => {
                    var input = res.data;
                    var result = [];
                    input.forEach(function(i){
                        result.push(Object.values(i));
                    });
                    this.chartData = result;
                }).catch(error => {
                    console.log(error)
                });
            }
        }
</script>