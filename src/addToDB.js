import { json } from "react-router-dom"

const getStoredReadList = () =>{
const storedListstr=localStorage.getItem('read-list')
if (storedListstr) {
    const storedList=JSON.parse(storedListstr)
    return storedList
}else{
    return []
}
}

const addToStoredReadList=(id)=>{
 const storedList=getStoredReadList()
 if (storedList.includes(id)) {
    console.log(id ,'already exist');
    
 }else{
    storedList.push(id)
    const storeliststr=JSON.stringify(storedList)
    localStorage.setItem('read-list',storeliststr)
 }
}

export {addToStoredReadList}
