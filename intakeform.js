const mongoose = require('mongoose');

let IntakeForm = new mongoose.Schema({
    //Case Information
    CaseNum: {
      type: Number
    },
    ClientNum: {
      type: Number
    },
    StartDate: {
      type: Date
    },
    CloseDate: {
      type: Date,
      required: function() {
        CloseDate > StartDate;
      }
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
        type: Date
    },
    //regrex from https://www.geeksforgeeks.org/how-to-validate-ssn-social-security-number-using-regular-expression/
    SocialSecurity: {
        type: Number,
        match: [/^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$/]  
    },
    IsUSCitizen: {
        type: Boolean
    },
    Gender: {
        type: String,
        enum: ['Male','Female']
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
    //store back end in inches, convert to feet and inches on front end
    Height: {
        type: Number,
        min: [0]
    },
    Weight: {
        type: Number,
        min: [0]
    },
    IsInCustody: {
        type: Boolean
    },
    CustodyLocation: {
        type: String,
        required: function() {
            IsInCustody = true;
        }
    },
    IsAdelphoi: {
        type: Boolean
    },
    AdelphoiName: {
        type: String,
        required: function() {
            IsAdelphoi = true;
        }
    },
    TotalRent: {
        type: mongoose.Schema.Types.Decimal128,
        min: [0.0]
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
    //regrex from https://stackoverflow.com/questions/16699007/regular-expression-to-match-standard-10-digit-phone-number
    HomePhone: {
        type: String,
        match: [/^[1-9]\d{2}-\d{3}-\d{4}/]
    },
    WorkPhone: {
        type: Number,
        match: [/^[1-9]\d{2}-\d{3}-\d{4}/]
    },
    CellPhone: {
        type: Number,
        match: [/^[1-9]\d{2}-\d{3}-\d{4}/]
    },
    OtherPhone: {
        type: Number,
        match: [/^[1-9]\d{2}-\d{3}-\d{4}/]
    },
    //regrex from https://www.codegrepper.com/code-examples/whatever/mongoose+validate+match+regex
    PersonalEmail: {
        type: String,  
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    OtherEmail: {
        type: String,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/]
    },
    MaritalStatus: {
        type: String,
        enum: ['Single,','Married','Seperated','Divorced','Widow','CommonLaw']
    },
    //will validate on front end
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
        required: function() {
            Employed = true}
    },
    IsUnemployed: {
        type: Boolean
    },
    HowLongU:{
        type: String,
        required: function() {
            Unemployed = true}
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
        required: function() {
            Retired = true}
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
        required: function() {
            attendedSchool = true}
    },
    LastGrade: {
        type: String,
        required: function() {
            attendedSchool = true}
    },
    Graduated: {
        type: String,
        enum: ['Elementary,','HighSchool','AttendCollege','TechnicalSchool','AssociateDegree','BachelorDegree','MasterDegree','PHD']
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
        enum: ['Private Insurance', 'Medicaid', 'Medicare', 'Chip', 'Gold Card', 'WIC']
    },
    IsFoodStamps: {
        type: Boolean
    },
    Amount: {
        type: mongoose.Schema.Types.Decimal128,
        required: function () {
            IsFoodStamps = true;
        }
    },
    Reason: {
        type: String,
        enum: ['Do not qualify', 'Have not applied', 'Application in process', 'Need help applying']
    },
    IsDrugsOrAlcohol: {
        type: Boolean
    },
    HowMuch: {
        type: String,
        required: function () {
            IsDrugsOrAlcohol = true;
        }
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
        type: Date
    },
    PriorAttorneyName: {
        type: String
    },
    PriorAttorneyCaseLoad: {
        type: String
    },
    Convictions: [{
        charge: String,
        degree: String,
        punishmentRange: String,
        disposition: String
    }],
    CurrentCourt: {
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
        type: Date
    },
    Status: {
        type: String
    },
    BondAmount: {
        type: mongoose.Schema.Types.Decimal128
    },
    SettlingDate: {
        type: Date
    }
});

module.exports = mongoose.model('IntakeForm', IntakeForm);