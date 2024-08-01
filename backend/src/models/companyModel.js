import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    about: {
        type: String,
    },
    phone: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        default: 'https://as1.ftcdn.net/v2/jpg/03/46/83/96/1000_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg'
    },
    socialMedia:[
        {
            platform:String,
            link:String
        }
    ]
    ,
    domainType: {
        type: String,
        enum: ['Personal URL', 'Default Design'],
        default: 'Default Design',
        required: true
    },
    domain: {
        type: String,
        required: function() {
            return this.domainType === 'Personal URL';
        }
    },
    nfcCode: {
        type: String,
        unique: true,
        required: true
    },
    paymentMethod: {
        type: String,
        enum: ['Online Payment', 'Cash Payment'],
        required: true
    },
    paymentStatus: {
        type: String,
        default: 'Pending'
    }
});

const Company = mongoose.model('Company', companySchema);
export default Company;
