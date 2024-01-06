import { model, models, Schema } from "mongoose";

const enquirySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

const EnquiryModel = models.Enquiry || model("Enquiry", enquirySchema);

export default EnquiryModel;
