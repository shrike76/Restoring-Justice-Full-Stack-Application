const mongoose = require('mongoose');
const { ObjectId } = require('bson');

function FormatDate(value){
    if (value){
    return value.toLocaleString('en-US');
    }
    else {
        return value;
    }
}

let IntakeForm = new mongoose.Schema({
    //Form Primary ID
    IntakeFormID: {
        type: Number,
        required: true
    },
    //tracks the version 
    IntakeFormNext: {
        type: [ObjectId],
        ref: "IntakeForm"
    },
    //tracks date of version edits
    IntakeFormDate: {
        type: Date,
        get: FormatDate
    },
    //Functionally deletes
    IsActive: {
        type: Boolean,
        required: true
    },
    //Case Information
    CaseNum: {
        type: Number
    },
    ClientNum: {
        type: Number
    },
    StartDate: {
        type: Date,
        get: FormatDate
    },
    CloseDate: {
        type: Date,
        get: FormatDate
    },
    //General Information
    LastName: {
        type: String
    },
    FirstName: {
        type: String
    },
    MiddleName: {
        type: String
    },
    Birthdate: {
        type: Date,
        get: FormatDate
    },
    SocialSecurity: {
        type: Number, 
    },
    IsUSCitizen: {
        type: Boolean
    },
    Gender: {
        type: String,
    },
    TXIDNum: {
        type: Number
    },
    //Residence Information
    Address: {
        type: String
    },
    City: {
        type: String
    },
    State: {
        type: String
    },
    Zip: {
        type: Number
    },
    County: {
        type: String  
    },
    Height: {
        type: Number,
    },
    Weight: {
        type: Number,
    },
    IsInCustody: {
        type: Boolean
    },
    CustodyLocation: {
        type: String,
    },
    IsAdelphoi: {
        type: Boolean
    },
    AdelphoiName: {
        type: String,
    },
    TotalRent: {
        type: mongoose.Schema.Types.Decimal128,
    },
    IsUtilitiesIncluded: {
        type: Boolean
    },
    IsSubsidizedRent: {
        type: Boolean
    },
    IsSingleParent: {
        type: Boolean
    },
    //Contact Information
    HomePhone: {
        type: String,
    },
    WorkPhone: {
        type: Number,
    },
    CellPhone: {
        type: Number,
    },
    OtherPhone: {
        type: Number,
    },
    PersonalEmail: {
        type: String,  
    },
    OtherEmail: {
        type: String,
    },
    MaritalStatus: {
        type: String,
    },
    Language: [String],
    Ethnicity: {
        type: String
    },
    //Employement Information
    IsEmployed: {
        type: Boolean
    },
    HowLongE:{
        type: String,
    },
    IsUnemployed: {
        type: Boolean
    },
    HowLongU:{
        type: String,
    },
    Employer: {
        type: String
    },
    Occupation:{
        type: String
    },
    IsRetired: {
        type: Boolean
    },
    HowLongR:{
        type: String,
    },
    IsHouseWife: {
        type: Boolean
    },
    //Education Information
    IsAttendedSchool: {
        type: Boolean
    },
    School:{
        type: String,
    },
    LastGrade: {
        type: String,
    },
    Graduated: {
        type: String,
    },
    Graduated1: {
        type: Boolean
    },
    Certification:{
        type: String
    },
    //Income Information
    IsHeadOfHouse: {
        type: Boolean
    },
    MonthlyIncome: {
        type: mongoose.Schema.Types.Decimal128
    },
    OtherIncome: {
        type: mongoose.Schema.Types.Decimal128
    },
    SpousalSupport: {
        type: mongoose.Schema.Types.Decimal128
    },
    WorkersComp: {
        type: mongoose.Schema.Types.Decimal128
    },
    ChildSupport: {
        type: mongoose.Schema.Types.Decimal128
    },
    Tanf: {
        type: mongoose.Schema.Types.Decimal128
    },
    Ssi: {
        type: mongoose.Schema.Types.Decimal128
    },
    Unemployment: {
        type: mongoose.Schema.Types.Decimal128
    },
    SocialSecurity: {
        type: mongoose.Schema.Types.Decimal128
    },
    Other: {
        type: mongoose.Schema.Types.Decimal128
    },
    Notes: {
        type: String
    },
    //Health Insurance Information
    IsHealthInsurance: {
        type: Boolean
    },
    HealthInsuranceType: {
        type: String,
    },
    IsFoodStamps: {
        type: Boolean
    },
    Amount: {
        type: mongoose.Schema.Types.Decimal128,
    },
    Reason: {
        type: String,
    },
    IsDrugsOrAlcohol: {
        type: Boolean
    },
    HowMuch: {
        type: String,
    },
    IsTreatment: {
        type: Boolean
    },
    Notes: {
        type: String
    },
    History: {
        type: String
    },
    //Legal Information
    CaseNo: {
        type: Number
    },
    IsMentalCompetency: {
        type: Boolean
    },
    FileDate: {
        type: Date,
        get: FormatDate
    },
    PriorAttorneyName: {
        type: String
    },
    PriorAttorneyCaseLoad: {
        type: String
    },
    Charge: {
        type: String
    },
    Degree: {
        type: String
    },
    PunishmenRange: {
        type: String
    },
    Disposition: {
        type: String
    },
    CourtAddress: {
        type: String
    },
    JudgeName: {
        type: String
    },
    CourtType: {
        type: String
    },
    CompletionDate: {
        type: Date,
        get: FormatDate
    },
    Status: {
        type: String
    },
    BondAmount: {
        type: mongoose.Schema.Types.Decimal128
    },
    SettlingDate: {
        type: Date,
        get: FormatDate
    }
});

//code taken from https://stackoverflow.com/questions/21832088/why-are-my-mongoose-3-8-7-schema-getters-and-setters-being-ignored
IntakeForm.set('toJSON', { getters: true });
IntakeForm.set('toObject', { getters: true });
module.exports = mongoose.model('IntakeForm', IntakeForm);