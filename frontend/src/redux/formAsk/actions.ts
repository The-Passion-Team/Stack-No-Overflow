// import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateQuestionPayload } from "./interfaces";
// import { APIPaths } from "~/utils";

export const createQuestion = createAsyncThunk<any, CreateQuestionPayload>(
	"ask/createQuestion", 
	async (payload, {rejectWithValue}) => {
		console.log("object");
		try {
			// const res = await axios.post(`${APIPaths.Auth}/signup`, payload);
			console.log(payload);
		} catch (e : any) {
			console.log("e: ", e.response.data);
			return rejectWithValue(e);
		}
	}
);