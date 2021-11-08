<template>
    <div class="row">
        <div class="col-md-12">
            <!--  colton's failed attempt to get search functionalty, might need later.
            <b-form-input v-model="filterinput" type="search" placeholder="Type to search">
            </b-form-input>
            <b-input v-model="filterinput" placeholder="Filter table"></b-input>
            <hr />
            <b-table striped :items="intakeForm" :fields="tableFields" :filter="filterinput" >
            </b-table>
            -->


              
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
                            {{intake._id}}
                        <!--<button @click.prevent="deleteStudent(student._id)" class="btn btn-danger mx-2">Delete</button>-->
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
                //colton's failed attempt to get search functionalty, might need later.
            //     filterinput: '',
            //     intakeForm: [],
            //     tableFields: [
            //     {
            //         key: 'FirstName',
            //         label: 'First Name',
            //         sortable: true
            //     },
            //     {
            //         key: 'LastName',
            //         label: 'Last Name',
            //         sortable: false
            //     },
            //     {
            //         key: 'CaseNum',
            //         label: 'Case #',
            //         sortable: true,
            //     }
            //     ],
                Intake: []
            }
        },
        
        // this is using created hook 
        created() {
            let apiURL = 'http://localhost:3000/clients';
            axios.get(apiURL).then(res => {
                this.Intake = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            //code taken from https://forum.vuejs.org/t/how-to-populate-form-depend-on-the-dropdown-selection/47373
            viewRecord: function (id) {
                let apiURL = 'http://localhost:3000/clients/' + id;
                this.$axios.$get(apiURL)
                    .then((response) => {
                    console.log(response)
                    // set your form data not sure of the correct form from above but same idea
                    this.intake._id = response.data;  // however the response is formatted from Laravel may differ
                    })
                    .catch((error) => {
                    console.log(error.response)
                    })
            }
        }




       /* methods: {
            deleteStudent(id){
                console.log(id)
                let apiURL = `http://localhost:3000/student/${id}`;
                let indexOfArrayItem = this.Students.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Students.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }*/
    }
</script>



<style>
    .btn-success {
        margin-right: 10px;
    }
</style>
