import axios from "axios";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

export const handleAddAssignment = async (assignmentId: string, assignment: any) => {

  const response = await axios.post(
    `${ASSIGNMENTS_API}/${assignmentId}/assignments`,
    assignment
  );
  return response.data;
};

export const updateAssignment = async (assignment: any) => {
     const { data } = await axios.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
     return data;
   };
   
export const deleteAssignment = async (assignmentId: string) => {
 const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
 return response.data; };

 export const findAssignment = async (assignmentId: string) => {
  const response = await axios
    .get(`${ASSIGNMENTS_API}/${assignmentId}/assignments`);
  return response.data;
};


