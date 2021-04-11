import axios from "axios";

const API_URL = "http://localhost:8000/";

const jobQuery = () =>{
    axios.get(API_URL+"backend/API/Recommend/Jobs", { headers: authHeader() })
    .then((res) => {
        if (res===0){
            console.log("error in fetching job data")
        }
        industry=Object.keys(res.data)

        axios.get(API_URL+"backend/database/JobCache?industries="+industry.toString())
        .then(
            response=>{
                return response.data
            }
        )
        .catch((err) =>console.log(err));
    })
    .catch((err) =>console.log(err));
};

const courseQuery = (courseUrl) =>{
    if (url!==""){
    axios.post(API_URL+"database/Courses/get", {courseUrl})
    .then(
        (resp) =>{
            return resp.data
        }
    )
    .catch((err) =>console.log(err));
    }
};

const courseQuery = (UserSkills, JobSkills) =>{
    data={}
    data["jobSkills"]=jobSkills
    data["userSkills"]=userSkills
    axios.post(API_URL+"backend/API/Recommend/Courses", {data})
    .then(
        resp=>{
            return resp.data
        }
    )
    .catch((err) =>console.log(err));
};