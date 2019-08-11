import axios from "axios";
const delayedInterceptor = axios.interceptors.request.use(async (request) =>{
    await wait(3000)
    return request;
});

async function wait(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
