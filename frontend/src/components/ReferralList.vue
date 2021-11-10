<template>
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
          <td>{{ data.UsedReferral }}</td>
          <td>
            <button @click="handleView(data._id)">View/Edit</button>
            <button @click.prevent="handleDelete(data._id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div v-else>
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
  },
};
</script>
