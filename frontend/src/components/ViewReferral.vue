<template>
  <div>
    <b-card bg-variant="light">
      <b-form-group
        label-cols-lg="3"
        label="Edit Referral"
        label-size="lg"
        label-class="fw-bold pt-0"
        class="mb-0"
      >
        <b-form-group
          label="Case Number:"
          label-for="nested-street"
          label-cols-sm="3"
          label-align-sm="end"
        >
          <b-form-input v-model="clientData.CaseNumber"></b-form-input>
        </b-form-group>
        <b-form-group
          label="Case Manager:"
          label-for="nested-city"
          label-cols-sm="3"
          label-align-sm="end"
        >
          <b-form-input v-model="clientData.CaseManager"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Services:"
          label-for="nested-country"
          label-cols-sm="3"
          label-align-sm="end"
        >
          <b-form-select
            :options="ex1Options"
            size="sm"
            class="mt-3"
            v-model="clientData.SocialServices"
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Date:" label-cols-sm="3" label-align-sm="end">
          <b-row class="my-1">
            <b-col sm="3">
              <label :for="`type-date`"></label>
            </b-col>
            <b-col sm="9">
              <b-form-input
                :id="`type-date`"
                type="date"
                v-model="clientData.Date"
              ></b-form-input>
            </b-col>
          </b-row>
        </b-form-group>

        <b-form-group
          label="Hours Spent:"
          label-for="nested-state"
          label-cols-sm="3"
          label-align-sm="end"
          v-model="clientData.HoursSpent"
        >
          <b-form-input v-model="clientData.HoursSpent"></b-form-input>
        </b-form-group>

        <b-form-group
          label="Notes:"
          label-for="nested-country"
          label-cols-sm="3"
          label-align-sm="end"
        >
          <b-form-textarea
            id="textarea"
            v-model="clientData.Notes"
            rows="3"
            max-rows="6"
          ></b-form-textarea>
          <pre class="mt-3 mb-0">{{ textEx1 }}</pre>
        </b-form-group>

        <b-form-group
          label="Referral Used:"
          label-cols-sm="3"
          label-align-sm="end"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            class="pt-2"
            :options="['Yes', 'No']"
            :aria-describedby="ariaDescribedby"
            v-model="clientData.UsedReferral"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group
          label="Needs Addressed:"
          label-cols-sm="3"
          label-align-sm="end"
          class="mb-0"
          v-slot="{ ariaDescribedby }"
        >
          <b-form-radio-group
            class="pt-2"
            :options="['Not at all', 'Partially', 'Fully']"
            v-model="clientData.NeedsAddressed"
            :aria-describedby="ariaDescribedby"
          ></b-form-radio-group>
        </b-form-group>

        <b-form-group class="mt-3">
          <b-button variant="primary" @click="handleSubmit">Submit</b-button>
        </b-form-group>
      </b-form-group>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  //holds the id for the specific referral, will be used when fetching the data
  props: ["currentData"],
  data() {
    return {
      clientData: {},
      ex1Options: [
        "Transportation",
        "Nutrition",
        "Housing",
        "Legal",
        "Family Services",
        "Clothing",
        "Identification",
        "Immigration",
        "Anger Management",
        "Mental Health",
        "Drop In Centers",
        "Disability Services",
        "Job Training",
        "Substance Use",
        "Disorder Services",
        "Drug Testing",
        "Other",
      ],
      converted: "",
    };
  },

  created() {
    let apiURL = `http://localhost:3000/referrals/${this.currentData}`;
    //gets the data from backend and places it inside clientData
    axios
      .get(apiURL)
      .then((res) => (this.clientData = res.data))
      .then(this.convertData);
  },
  methods: {
    //handles the update for a referral
    handleSubmit() {
      let apiURL = `http://localhost:3000/referrals/${this.clientData._id}`;

      //converts from string to boolean for backend storage purposes
      if (this.clientData.UsedReferral == "Yes") {
        this.clientData.UsedReferral = true;
      } else {
        this.clientData.UsedReferral = false;
      }

      axios.put(apiURL, this.clientData).then((res) => {
        console.log(res);
        // this.$router.push("/");
        alert(res.data);
      });
    },

    //converts from boolean to String for frontend purposes
    convertData() {
      if (this.clientData.UsedReferral == true) {
        this.clientData.UsedReferral = "Yes";
      } else {
        this.clientData.UsedReferral = "No";
      }
    },
  },
};
</script>
