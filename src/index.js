
import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/dbConnection.js";

dotenv.config({path:'.env'})

connectDB()


const app = express()

