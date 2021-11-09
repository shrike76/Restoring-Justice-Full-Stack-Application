<template>
    <form @submit.prevent="handleSubmitForm">
        <!--CaseNum, ClientNum, StartDate, CloseDate-->
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label>Case #</label>
                    <input type="text" class="form-control" v-model="intakeForm.CaseNum" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Client #</label>
                    <input type="text" class="form-control" v-model="intakeForm.ClientNum" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Start Date</label>
                    <input type="text" class="form-control" v-model="intakeForm.StartDate" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Close Date</label>
                    <input type="text" class="form-control" v-model="intakeForm.CloseDate" required>
                </div>
            </div>
        </div>
        <hr />
        <!--IsUSCitizen, MaritalStatus-->
        <div class="row">
            <div class="col-md-4">
            <label>US citizen?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsUSCitizen" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsUSCitizen" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>
            <div class="col-md-4">
                <label class="form-label">
                    Marital Status
                </label>
                <select class="form-select" v-model="intakeForm.MaritalStatus">
                    <option>Single</option>
                    <option>Married</option>
                    <option>Seperated</option>
                </select>                
            </div>  
        </div>
        <!--TotalRent, IsUtilitiesIncluded, IsSubsidizedRent, IsSingleParent-->
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label>Total Rent</label>
                    <input type="text" class="form-control" v-model="intakeForm.TotalRent">
                </div>
            </div>
            <div class="col-md-8">
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="IsUtilitiesIncluded" v-model="intakeForm.IsUtilitiesIncluded">
                    <label class="form-check-label" for="IsUtilitiesIncluded">
                    Ultilies Included
                    </label>
                </div>
                    <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="IsSubsidizedRent"  v-model="intakeForm.IsSubsidizedRent">
                    <label class="form-check-label" for="IsSubsidizedRent">
                    Rent subsidized
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="IsSingleParent"  v-model="intakeForm.IsSingleParent">
                    <label class="form-check-label" for="IsSingleParent">
                    Single Parent
                    </label>
                </div>
            </div>
        </div>
        <!--IsFoodStamps, Amount-->
        <div class="row">

            <div class="col-md-6">
                <div class="form-check">
                    <label class="form-check-label" for="IsFoodStamps">
                    Do you receieve food stamps?
                    </label>

                    <input class="form-check-input" type="checkbox" id="IsFoodStamps" v-model="intakeForm.IsFoodStamps">
                    
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsFoodStamps">
                <div class="form-group">
                    <label>How much?</label>
                    <input type="text" class="form-control" v-model="intakeForm.Amount">
                </div>
            </div>



        </div>
        <button class="btn btn-danger mt-3" id="btnSubmit">Create</button>
    </form>

</template>


<script>

    import axios from "axios";

    export default {
        data() {
            return {
                //need all schema inputs to be added to this list
                intakeForm: {
                   CaseNum: '22',
                   ClientNum: '22',
                   StartDate: '11/11/1111',
                   CloseDate: '11/11/1112',
                   IsUSCitizen: '',
                   MaritalStatus: ''
                }
            }
        },
        mounted() {
            if (this.$route.params.id){
                document.getElementById('btnSubmit').innerText = 'Edit';
            }
        },
        //populates from view if id
        created() {
            var id = this.$route.params.id;
            if (id){
                
            let apiURL = 'http://localhost:3000/clients/' + id;
                axios.get(apiURL)
                    .then((response) => {
                    // console.log(response)
                    // set your form data not sure of the correct form from above but same idea
                    this.intakeForm = response.data;  // however the response is formatted from Laravel may differ
                    delete this.intakeForm._id; //removes json element https://stackoverflow.com/questions/5310304/remove-json-element/39753601
                    })
                    .catch((error) => {
                    console.log(error.response)
                    })}
        },
        methods: {
            handleSubmitForm() {
                let apiURL = 'http://localhost:3000/clients';
                axios.post(apiURL, this.intakeForm).then(() => {
                    //console.log('success')
                    //chnaging the view to the list
                  //this.$router.push('/view')
                  /*this.intakeForm = {
                    CaseNum: '',
                    ClientNum: '',
                    StartDate: '',
                    CloseDate: ''
                  }*/
                }).catch(error => {
                    console.log(error)
                });
            }
        }
           
    }
</script>
