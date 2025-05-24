import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from 
"mongoose-aggregate-paginate-v2";
const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // cloudinary url
      required: true,
    },
    thumbnail: {
      type: String,
      requried: true,
    },
    title: {
      type: String, // cloudinary url
      required: true,
      requried: true,
    },
    discription: {
      type: String,
      requried: true,
    },
    duration: {
      type: Number,
      requried: true,
    },
    views: {
      type: Number,
      default: 0,
    },
    isPublished: {
      type: Boolean,
      default: true,
    },
    Owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
