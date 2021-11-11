<template>
  <!-- if clicked is true will display tables with all referrals 
  else will display the indivdual referral in detail -->
  <div v-if="isClicked">
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Case Number</th>
          <th>Case Manager</th>
          <th>Date</th>
          <th>Used Referral</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in referralData" :key="data._id">
          <td>{{ data.CaseNumber }}</td>
          <td>{{ data.CaseManager }}</td>
          <td>{{ data.Date }}</td>
          <!-- converts from boolean to String -->
          <td>{{ data.UsedReferral ? "Yes" : "No" }}</td>
          <td>
            <button @click="handleView(data._id)">View/Edit</button>
            <button @click.prevent="handleDelete(data._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else>
    <!-- child component will render if false, also is passed referral id as a prop-->
    <ViewReferral :currentData="currentData" />
  </div>
</template>

<script>
import axios from "axios";
import ViewReferral from "../components/ViewReferral.vue";

export default {
  data() {
    return {
      referralData: [],
      isClicked: true,
      currentData: "",
    };
  },
  components: {
    ViewReferral,
  },

  methods: {
    //handles the delete function as well as rerenders component
    handleDelete(id) {
      let apiURL = `http://localhost:3000/referrals/${id}`;
      let indexOfArrayItem = this.referralData.findIndex((i) => i._id === id);

      axios.delete(apiURL).then((response) => {
        console.log(response);
        this.referralData.splice(indexOfArrayItem, 1);
      });
    },
    handleView(id) {
      // console.log(row);
      this.currentData = id;
      this.isClicked = false;
    },
  },
  created() {
    let apiURL = "http://localhost:3000/referrals";

    axios.get(apiURL).then((res) => (this.referralData = res.data));
    // axios.get(apiURL).then((res) => console.log(res.data));
  },
};
</script>
