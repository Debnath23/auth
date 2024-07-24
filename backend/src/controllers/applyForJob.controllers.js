import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApplyForJob } from "../models/applyForJob.models.js";
import {
  uploadOnCloudinary,
  deleteFromCloudinary,
} from "../utils/cloudinary.js";

export const appliedJob = asyncHandler(async (req, res) => {
  const { name, email, phoneNumber, address, role, attachments } = req.body;

  if (
    [name, email, phoneNumber, address, role, attachments].some(
      (field) => field?.trim() === ""
    )
  ) {
    throw new ApiError(400, "All fields are required");
  }

  const previouslyApplied = await ApplyForJob.findOne({ role });

  if (previouslyApplied) {
    throw new ApiError(409, "You can apply for only one role.");
  }

  const attachmentsPath = req.files?.attachments[0]?.path;

  if (!attachmentsPath) {
    throw new ApiError(400, "Attachment file is required");
  }

  const attachment = await uploadOnCloudinary(attachmentsPath);

  if (!attachment) {
    throw new ApiError(400, "Attachment file is required");
  }

  const applyJob = await ApplyForJob.create({
    name,
    email,
    phoneNumber,
    address,
    role,
    attachments: attachment.url,
  });

  return res
    .status(201)
    .json(new ApiResponse(200, applyJob, "You are applied successfully!"));
});
