<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Case #</th>
                        <th>Client #</th>
                        <th>Start Date</th>
                        <th>Close Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="intake in Intake" :key="intake._id">
                        <td>{{ intake.FirstName }}</td>
                        <td>{{ intake.LastName }}</td>
                        <td>{{ intake.CaseNum }}</td>
                        <td>{{ intake.ClientNum }}</td>
                        <td>{{ intake.StartDate }}</td>
                        <td>{{ intake.CloseDate }}</td>
                        <td>
                        <!--code taken from https://forum.vuejs.org/t/how-to-populate-form-depend-on-the-dropdown-selection/47373-->
                            <router-link :to="{name: 'create', params: { id: intake._id }}" @change="viewRecord('intake._id')" class="btn btn-success ">View
                           
                            </router-link>
                        <button @click.prevent="deleteRecord(intake._id)" class="btn btn-danger mx-2">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    export default {
        data() {
            return {
                Intake: []
            }
        },
        // this is using created hook 
        created() {
            let apiURL = 'http://rjustice.azurewebsites.net/clientslatest';
            axios.get(apiURL).then(res => {
                this.Intake = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            //code taken from https://forum.vuejs.org/t/how-to-populate-form-depend-on-the-dropdown-selection/47373
            //views the record when button is pressed
            viewRecord: function (id) {
                let apiURL = 'http://rjustice.azurewebsites.net/clients/' + id;
                this.$axios.$get(apiURL).then((response) => {
                    this.intake._id = response.data;  
                    })
                    .catch((error) => {
                    console.log(error.response)
                    })
            },
            //functionally deletes the record when button is pressed
            deleteRecord: function(id) {
                let apiURL = 'http://rjustice.azurewebsites.net/clients/' + id;
                axios.put(apiURL).then(() => {
                location.reload(); //reloads the page when button is pressed
                })
                .catch((error) => {
                console.log(error.response)
                })
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
