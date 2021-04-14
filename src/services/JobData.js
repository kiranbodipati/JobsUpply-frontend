import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:8000/";
const user = JSON.parse(localStorage.getItem('user'));
const jobQuery = () =>{
    axios.get(API_URL+"backend/API/Recommend/Jobs?email="+user.user.email)
    .then((res) => {
        if (res.data == 0){
            console.log("error in fetching job data");
        }
        console.log(res.data)
        const industry=Object.keys(res.data);
        console.log(industry.toString);
        axios.get(API_URL+"backend/database/JobCache?industries="+industry.toString())
        .then(
            response=>{
                console.log(response.data);
                return response.data;
            }
        )
        .catch((err) =>console.log(err));
    }, (err)=>{
        console.log(err)
    })
    .catch((err) =>console.log(err));
};

const courseQuery = (courseUrl) =>{
    if (courseUrl!==""){
    axios.post(API_URL+"database/Courses/get", {courseUrl})
    .then(
        (resp) =>{
            return resp.data;
        }
    )
    .catch((err) =>console.log(err));
    };
};

const courseRecommendation = (userSkills, jobSkills) =>{
    let data={}
    data["jobSkills"]=jobSkills;
    data["userSkills"]=userSkills;
    axios.post(API_URL+"backend/API/Recommend/Courses", {data})
    .then(
        resp=>{
            console.log(resp.data)
            return resp.data;
        }
    )
    .catch((err) =>console.log(err));
};

export default {
    jobQuery,
    courseQuery,
    courseRecommendation
  };