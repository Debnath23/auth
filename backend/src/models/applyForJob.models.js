import mongoose, { Schema } from "mongoose";

const scheduledMeetingSchema = new Schema(
  {
    scheduledTime: {
      type: String,
    },
    meetingLink: {
      type: String,
    },
  },
  { _id: false }
);

const applyForJobSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    attachments: {
      type: String,
      required: true,
    },
    applicationStatus: {
      type: String,
      enum: ['Pending', 'Approved', 'Rejected'],
      default: 'Pending',
    },
    scheduledMeeting: [scheduledMeetingSchema],
  },
  {
    timestamps: true,
  }
);

export const ApplyForJob = mongoose.model("ApplyForJob", applyForJobSchema);
