<template>
  <table class="table table-striped table-bordered">
    <thead>
      <tr>
        <th>Case Manager</th>
        <th>Referrals</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in caseManagers" :key="data.CaseManager">
        <td>{{ data.CaseManager }}</td>
        <td>
          {{ data.Count }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      referralData: [],
      caseManagers: [],
    };
  },
  created() {
    let apiURL = "http://localhost:3000/referrals";

    axios
      .get(apiURL)
      .then((res) => (this.referralData = res.data))
      .then(this.testM);
  },

  methods: {
    testM() {
      this.referralData.forEach((currentReferralData) => {
        let count = 0;
        for (let i = 0; i < this.referralData.length; i++) {
          if (
            this.referralData[i].CaseManager.toLowerCase() ==
            currentReferralData.CaseManager.toLowerCase()
          ) {
            count++;
          }
        }

        let payload = {
          CaseManager: currentReferralData.CaseManager,
          Count: count,
        };

        // if (this.caseManagers[0]) {
        //   for (let i = 0; i < this.caseManagers.length; i++) {

        let isThere = this.caseManagers.find(
          (caseManager) =>
            caseManager.CaseManager.toLowerCase() ==
            currentReferralData.CaseManager.toLowerCase()
        );

        isThere = isThere ? true : false;

        if (!isThere) {
          this.caseManagers.push(payload);
        } else {
          console.log("here");
        }

        //   }
        // } else {
        // }
      });
    },
  },
};
</script>
