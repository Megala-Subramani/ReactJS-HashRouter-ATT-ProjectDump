import axios from "axios";

const httpApi = axios.create({
        baseURL: "http://localhost:8081/emonitor",
        headers: {
            "content-type": "applicaiton/json"
        },
    }
);

httpApi.interceptors.request.use(x=>{
    console.log(x);
    return x;
});

httpApi.interceptors.response.use(x=>{
    console.log(x);
    return x;
});

export default httpApi;