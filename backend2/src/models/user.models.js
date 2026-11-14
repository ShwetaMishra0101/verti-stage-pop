import mongoose from "mongoose";
 import jwt from "jsonwebtoken";
 import bcrypt from 'bcrypt';

const userSchema = mongoose.Schema(
    {

        userName:{
            type:String,
            required:true,
            lowerCase:true,
            unique:true,
            trim:true,
            index:true,
        },
        email:{
            type:String,
            required:true,
            lowerCase:true,
            trim:true,
            unique:true,
        },
        fullName:{
            type:String,
            required:true,
            trim:true,
            index:true,
        },
        avtar:{
            type:String,
            required:true,
        },
        coverImage:{
            type:String,
        },
        watchHistory:[
            {
                type: mongoose.Schema.ObjectId,
                ref:"Video"

            }
        ],
        password:{
            type:String,
            required:[true, "Passowrd is required"]

        },
        refresToken:{
            type:String
        }


    },
    {timeStamps:true}
)

export const User = mongoose.model("User", userSchema)