const axios=require('axios')
// const baseUrl="https://gateway.marvel.com"
const baseUrl="https://www.breakingbadapi.com"
var params={
    apikey:"d53c4b9f19df887206586c4d5b365df1"
}
const getAllCharacter=async ()=>{

    try {
        
   
    const  allCharacterData=await axios.get(baseUrl+"/api/characters");
    console.log("allchar data==",allCharacterData);
    return allCharacterData;

} catch (error) {
        console.log("error===",error);
        
}

}


export {getAllCharacter}