import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { enrollments } from "../Databases";
import { v4 as uuidv4 } from "uuid";
const initialState = {
     enrollments: enrollments,
};
const saveEnrollments = (enrollments: any) => {
     localStorage.setItem("enrollments", JSON.stringify(enrollments));
   };
const coursesEnrollSlice = createSlice({
  name: "enrollment",
  initialState,
  reducers: {
    setEnrollments: (state, action: PayloadAction<any[]>) => {
      state.enrollments = action.payload;
    },
    addEnrollment: (state, action: PayloadAction<{ course: any; user: any }>) => {
      const newEnrollment = {
        _id: uuidv4(),
        course: action.payload.course,
        user: action.payload.user,
      };
      state.enrollments.push(newEnrollment);
    },
    deleteEnrollment: (state, action: PayloadAction<any>) => {
      state.enrollments = state.enrollments.filter(
        (enrollment) => enrollment._id !== action.payload
      );
    },
  },
});
export const { addEnrollment, deleteEnrollment, setEnrollments } =
coursesEnrollSlice.actions;
export default coursesEnrollSlice.reducer;