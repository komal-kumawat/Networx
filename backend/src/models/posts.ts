import mongoose, { Schema, Document } from "mongoose";
import User from "./users";

export interface IPost extends Document {
  userId: mongoose.Types.ObjectId;
  body: string;
  likes: number;
  media: string;
  active: boolean;
  fileType: string;
  createdAt: Date;
  updatedAt: Date;
}

const postSchema  = new mongoose.Schema<IPost>({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User,
        required:true
    },
    body:{
        type:String,
        required:true ,
        trim:true
    },
    likes:{
        type:Number,
        default:0
    },
    media:{
        type:String,
        default:""
    },
    active:{
        type:Boolean , 
        default:true
    },
    fileType:{
        type:String,
        default:""
    }
},
{
    timestamps:true
}
);

const Post = mongoose.model<IPost>("Post" , postSchema);
export default Post;
