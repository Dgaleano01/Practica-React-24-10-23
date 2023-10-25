import axios from "./axios";

export const getEmployeesRequest = ()=>axios.get(`/employees`);
export const createEmployeesRequest = (employee)=> axios.post(`/employees`, employee);
