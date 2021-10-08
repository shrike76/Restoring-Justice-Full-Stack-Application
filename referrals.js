const mongoose = require('mongoose');

let ReferralForm = new mongoose.Schema({
    //Form Primary ID
    CaseNumber: {
        type: Number,
        required: true
    },
    CaseManager: {
        type: String
    },
    //Will handle fill in list on front end
    SocialServices: {
        type: String
    },
    Notes: {
        type: String
    },
    Date: {
        type: Date
    },
    UsedReferral: {
        type: Boolean
    },
    NeedsAddressed: {
        type: String,
        enum: ['Not at all', 'Partially', 'Fully']
    }
});

module.exports = mongoose.model('Referral', ReferralForm);