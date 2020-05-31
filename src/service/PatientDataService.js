import http from '../httpcomon'


const getAll= () =>{
    return http.get("/patients")
}

export default {getAll};
