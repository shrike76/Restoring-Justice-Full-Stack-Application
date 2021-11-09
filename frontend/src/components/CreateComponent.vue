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
                    <option>Divorced</option>
                    <option>Widow</option>
                    <option>CommonLaw</option>
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

            <div class="col-md-4">
                <label class="form-label">
                    if No, Why Not?
                </label>
                <select class="form-select" v-model="intakeForm.Reason">
                    <option>Do not qualify</option>
                    <option>Have not applied</option>
                    <option>Application in process</option>
                    <option>Need help applying</option>
                </select>                
            </div>


        </div>

        <!--HomePhone, WorkPhone, CellPhone, OtherPhone, PersonalEmail, OtherEmail-->
        <div class="row">
            <div class="col-md-3">
                <div class="form-group">
                    <label>Home Ph #</label>
                    <input type="text" class="form-control" v-model="intakeForm.HomePhone" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Work Phone</label>
                    <input type="text" class="form-control" v-model="intakeForm.WorkPhone" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Cell</label>
                    <input type="text" class="form-control" v-model="intakeForm.CellPhone" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Other</label>
                    <input type="text" class="form-control" v-model="intakeForm.OtherPhone" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Personal Email</label>
                    <input type="text" class="form-control" v-model="intakeForm.PersonalEmail" required>
                </div>
            </div>
            <div class="col-md-3">
                <div class="form-group">
                    <label>Other Email</label>
                    <input type="text" class="form-control" v-model="intakeForm.OtherEmail" required>
                </div>
            </div>
        </div>
        
            <!--Language-->
        <div class="row">
            <div class="col-md-4">
                <label class="form-label">
                    Language 
                </label>
                <select class="form-select" v-model="intakeForm.Language">
                    <option>Spanish</option>
                    <option>English</option>
                    <option>Bilingual</option>
                    
                </select>                
            </div>
        </div>

             <!--Ethnicity-->
        <div class="row">
            <div class="col-md-4">
                <label class="form-label">
                    Ethnicity 
                </label>
                <select class="form-select" v-model="intakeForm.Ethnicity">
                    <option>Hispanic/Latino</option>
                    <option>African American</option>
                    <option>White/Non-Hispanic</option>
                    <option>Asian</option>
                    
                </select>                
            </div>
        </div>


            <!--employed, unemployed, retired, Housewife-->
        <div class="row">

            <div class="col-md-6">
                <div class="form-check">
                    <label class="form-check-label" for="IsEmployed">
                    Employed
                    </label>

                    <input class="form-check-input" type="checkbox" id="IsEmployed" v-model="intakeForm.IsEmployed">
                    
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsEmployed">
                <div class="form-group">
                    <label>Employer:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Employer">
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsEmployed">
                <div class="form-group">
                    <label>How Long:</label>
                    <input type="text" class="form-control" v-model="intakeForm.HowLongE">
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsEmployed">
                <div class="form-group">
                    <label>Occupation:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Occupation">
                </div>
            </div>


            <div class="col-md-6">
                <div class="form-check">
                    <label class="form-check-label" for="IsUnemployed">
                    Unemployed
                    </label>

                    <input class="form-check-input" type="checkbox" id="IsUnemployed" v-model="intakeForm.IsUnemployed">
                    
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsUnemployed">
                <div class="form-group">
                    <label>How Long:</label>
                    <input type="text" class="form-control" v-model="intakeForm.HowLongU">
                </div>
            </div>


            <div class="col-md-6">
                <div class="form-check">
                    <label class="form-check-label" for="IsRetired">
                    Retired
                    </label>

                    <input class="form-check-input" type="checkbox" id="IsRetired" v-model="intakeForm.IsRetired">
                    
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsRetired">
                <div class="form-group">
                    <label>How Long:</label>
                    <input type="text" class="form-control" v-model="intakeForm.HowLongR">
                </div>
            </div>

            <div class="col-md-6">
                <div class="form-check">
                    <label class="form-check-label" for="IsHouseWife">
                    Housewife
                    </label>

                    <input class="form-check-input" type="checkbox" id="IsHouseWife" v-model="intakeForm.IsHouseWife">
                    
                </div>
            </div>

        </div>

            <!--school, education, Last grade -->
        <div class="row">
            <div class="col-md-4">
                <label>Have You Attend School?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsAttendedSchool" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsAttendedSchool" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsAttendedSchool">
                <div class="form-group">
                    <label>School:</label>
                    <input type="text" class="form-control" v-model="intakeForm.School">
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsAttendedSchool">
                <div class="form-group">
                    <label>Last Grade:</label>
                    <input type="text" class="form-control" v-model="intakeForm.LastGrade">
                </div>
            </div>
        </div>

        <!--Graduate, Certification -->
        <div class="row">
            <div class="col-md-4">
                <label>Graduated</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.Graduated" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.Graduated" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            
            <div class="col-md-4">
                <label class="form-label">
                    Graduation 
                </label>
                <select class="form-select" v-model="intakeForm.Graduated">
                    <option>Elementary</option>
                    <option>High School</option>
                    <option>Attend College</option>
                    <option>Technical School</option>
                    <option>Associate Degree</option>
                    <option>BachelorDegree</option>
                    <option>Master Degree</option>
                    <option>PHD</option>
                    
                </select>                
            </div>


            <div class="col-md-6" v-show="intakeForm.Graduated">
                <div class="form-group">
                    <label>Certification:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Certification">
                </div>
            </div>
        </div>


        <!--income information -->
        <div class="row">
            <div class="col-md-4">
                <label> Are You Head Of Household</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsHeadOfHouse" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsHeadOfHouse" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Monthly income</label>
                    <input type="text" class="form-control" v-model="intakeForm.MonthlyIncome">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Other Income:</label>
                    <input type="text" class="form-control" v-model="intakeForm.OtherIncome">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Spousal Support:</label>
                    <input type="text" class="form-control" v-model="intakeForm.SpousalSupport">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Worker's Comp:</label>
                    <input type="text" class="form-control" v-model="intakeForm.WorkersComp">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Child Support:</label>
                    <input type="text" class="form-control" v-model="intakeForm.ChildSupport">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>TANF:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Tanf">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>SSI:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Ssi">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Unemployment:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Unemployment">
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Social Security:</label>
                    <input type="text" class="form-control" v-model="intakeForm.SocialSecurity">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Other:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Other">
                </div>
            </div>
            <div class="col-md-6" v-show="intakeForm.IsHeadOfHouse">
                <div class="form-group">
                    <label>Notes:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Notes">
                </div>
            </div>

        </div>


        <!--Health insurance -->
        <div class="row">
            <div class="col-md-4">
                <label> Do You Have Health Insurance</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsHealthInsurance" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsHealthInsurance" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div class="col-md-4">
                <label class="form-label">
                    Health Insurance Type 
                </label>
                <select class="form-select" v-model="intakeForm.HealthInsuranceType">
                    <option>Private Insurance</option>
                    <option>Medicaid</option>
                    <option>Medicare</option>
                    <option>Chip</option>
                    <option>Gold Card</option>
                    <option>WIC</option>
                    
                </select>                
            </div>

        
            <div class="col-md-4">
                <label> Do you use drugs or alcohol?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsDrugsOrAlcohol" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsDrugsOrAlcohol" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsDrugsOrAlcohol">
                <div class="form-group">
                    <label>If yes, what and how much?</label>
                    <input type="text" class="form-control" v-model="intakeForm.HowMuch">
                </div>
            </div>

            <div class="col-md-4">
                <label> Do you want treatment?</label>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="true" v-model="intakeForm.IsTreatment" >
                    <label class="form-check-label">
                        Yes
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="radio" value="false" v-model="intakeForm.IsTreatment" >
                    <label class="form-check-label">
                        No
                    </label>
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsTreatment">
                <div class="form-group">
                    <label>Notes:</label>
                    <input type="text" class="form-control" v-model="intakeForm.Notes">
                </div>
            </div>

            <div class="col-md-6" v-show="intakeForm.IsTreatment">
                <div class="form-group">
                    <label>Treatment History:</label>
                    <input type="text" class="form-control" v-model="intakeForm.History">
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
