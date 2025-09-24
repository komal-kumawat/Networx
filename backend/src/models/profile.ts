import mongoose, { mongo } from "mongoose";
import User from "./users";


export interface IEducation {
    school: string;
    degree: string;
    fieldOfStudy: string
}
export interface IWork {
    company: string;
    position: string;
    years: number;
}
export interface IProfile {
    userId: mongoose.Types.ObjectId;
    bio: string;
    currentPost: string;
    pastWork: IWork[];
    education: IEducation[];
    createdAt: Date;
    updatedAt: Date;

}
const educationSchema = new mongoose.Schema<IEducation>({
    school: { type: String, default: "" },
    degree: { type: String, default: "" },
    fieldOfStudy: { type: String, default: "" }
}, { _id: false })

const workSchema = new mongoose.Schema<IWork>({
    company: { type: String, default: "" },
    position: { type: String, default: "" },
    years: { type: Number, default: 0 }
}, { _id: false })

const profileSchema = new mongoose.Schema<IProfile>({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: User, required: true },
    bio: { type: String, trim: true, default: "" },
    currentPost: { type: String, default: "" },
    education: {
        type: [educationSchema],
        default: []
    },
    pastWork: {
        type: [workSchema],
        default: []
    }
},
    {
        timestamps: true
    }
)

const Profile = mongoose.model<IProfile>("Profile", profileSchema);
export default Profile;