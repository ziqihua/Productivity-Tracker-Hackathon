import axios from 'axios';

export async function checkUserLogin(userData){
    
    let response = await axios.get(`http://localhost:3000/User?userEmail=${userData.userEmail}`)
    let matchingUser = response.data[0];
    if (matchingUser === null || matchingUser === undefined || matchingUser.userPassword !== userData.userPassword){
        return null;
    }
    else{
        return matchingUser.id;
    }
}

export async function createUser(userData){

    let photos = ["https://cdn-icons-png.flaticon.com/512/13542/13542465.png", "https://cdn-icons-png.flaticon.com/512/13542/13542450.png",    "https://cdn-icons-png.flaticon.com/512/13542/13542444.png",  "https://cdn-icons-png.flaticon.com/512/13542/13542437.png"]

    const randomValue = Math.floor(Math.random() * 4);
    userData["photo"] = photos[randomValue];
    
    let response = await axios.post('http://localhost:3000/User', userData)
    let matchingUser = response.data;
    return matchingUser.id;
}
