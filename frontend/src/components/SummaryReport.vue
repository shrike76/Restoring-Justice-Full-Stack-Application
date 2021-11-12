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
    let apiURL = "http://rjustice.azurewebsites.net/referrals";
    //getting the referral data from backened
    axios
      .get(apiURL)
      .then((res) => (this.referralData = res.data))
      .then(this.setCaseManagerData);
  },

  methods: {
    //takes the referral data and pushes only nessessary data to the caseManagers[]
    //also calculates number of referrals each case manager is assigned to
    // removes duplicates when there are multiple referrals assigned to a specific case manager
    setCaseManagerData() {
      this.referralData.forEach((currentReferralData) => {
        //keeps track of number of referrals assiedn to a case manager
        let count = 0;
        for (let i = 0; i < this.referralData.length; i++) {
          if (
            //converts to lowercase for easier comparison
            this.referralData[i].CaseManager.toLowerCase() ==
            currentReferralData.CaseManager.toLowerCase()
          ) {
            //increment count when found referral that is assigned to a case manager
            count++;
          }
        }
        //formatted data that will be pushed to caseManagers[]
        let payload = {
          CaseManager: currentReferralData.CaseManager,
          Count: count,
        };

        //looks to see if there is already a case manager withing caseManagers[]
        let isThere = this.caseManagers.find(
          (caseManager) =>
            caseManager.CaseManager.toLowerCase() ==
            currentReferralData.CaseManager.toLowerCase()
        );

        // if one already exists within caseManagers[] then it will be true else false
        isThere = isThere ? true : false;

        //if false push to the caseManager[]
        if (!isThere) {
          this.caseManagers.push(payload);
          //else console log message
        } else {
          console.log("here");
        }
      });
    },
  },
};
</script>
