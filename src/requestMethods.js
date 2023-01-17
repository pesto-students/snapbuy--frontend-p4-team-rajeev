import axios  from "axios";
const BASE_URL = "http://13.126.158.22:3000/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjUwNGM0YmFlZWNlZTU2NGJiN2FjNCIsInJvbGUiOiJzaG9wcGVyIiwiaWF0IjoxNjczNjc5MjcyLCJleHAiOjE2NzM5Mzg0NzJ9.DlS4qGJKZNlfuaTkoOSwDlT48EGXL8wacTdOskDdMS0"
export const publicRequest = axios.create({
    baseURL: BASE_URL,
});
export const userRequest = axios.create({
    baseURLL: BASE_URL,
    header: { token:`Bearer ${TOKEN}`},
});
