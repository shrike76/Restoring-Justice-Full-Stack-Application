const mongoose = require("mongoose");

function FormatDate(value) {
  console.log(value);
  return value.toLocaleString("en-US");
}

let ReferralForm = new mongoose.Schema({
  //Form Primary ID
  CaseNumber: {
    type: Number,
    required: true,
    unique: true,
  },
  CaseManager: {
    type: String,
  },
  //Will handle fill in list on front end
  SocialServices: {
    type: String,
  },
  Notes: {
    type: String,
  },
  Date: {
    type: Date,
    get: FormatDate,
  },
  UsedReferral: {
    type: Boolean,
  },
  NeedsAddressed: {
    type: String,
    enum: ["Not at all", "Partially", "Fully"],
  },
});

//code taken from https://stackoverflow.com/questions/21832088/why-are-my-mongoose-3-8-7-schema-getters-and-setters-being-ignored
ReferralForm.set("toJSON", { getters: true });
ReferralForm.set("toObject", { getters: true });
module.exports = mongoose.model("Referral", ReferralForm);
