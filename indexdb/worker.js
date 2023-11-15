import { get } from 'https://cdn.jsdelivr.net/npm/idb-keyval@6/+esm';


//localStorage.setItem("user","pedro")

async function getData(){
    const user = await get('user')
    console.log(user)
}

getData()