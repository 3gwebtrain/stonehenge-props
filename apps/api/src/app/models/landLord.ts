import * as mongoose from 'mongoose';

const LandLordSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    address: {
      street: {
        type: String,
        required: true,
      },
      doorNo: {
        type: String,
        required: true,
      },
    },
  },
  { timestamps: true }
);

const LandLoardModel = mongoose.model('landlord', LandLordSchema);

export default LandLoardModel;
