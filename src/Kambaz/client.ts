import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ENROLLMENTS_API = `${REMOTE_SERVER}/api/enrollments`;
const USERS_API = `${REMOTE_SERVER}/api/enrollments`;
// export const createModuleForCourse = async (courseId: string, module: any) => {
//      const response = await axios.post(
//        `${COURSES_API}/${courseId}/modules`,
//        module
//      );
//      return response.data;
//    };
   
export const findEnrollments = async (enrollmentId: string) => {
     const response = await axios
       .get(`${ENROLLMENTS_API}/${enrollmentId}/enrollments`);
     return response.data;
   };
   
export const fetchAllEnrollments = async (id: string) => {
  const { data } = await axios.get(`${USERS_API}/${id}/courses`);
  return data;
};
export const deleteEnrollment = async (id: string) => {
     const { data } = await axios.delete(`${ENROLLMENTS_API}/${id}`);
     return data;
   };



