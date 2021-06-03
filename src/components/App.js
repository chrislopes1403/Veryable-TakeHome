
import React, {useState,useEffect} from 'react';
import Header from './Header';
import UserList from './UserList';
import './styles.css';


const App = ()=>{

    const [users,setUsers]= useState([]);


    useEffect(()=>{

        getUsers();
    },[]);


    const getUsers =()=>{
        fetch('./users.json',
        {
            headers:{
                    'Content-Type':'application/json',
                    'Accept':'application/json'
                    }
        })
        .then((res)=>{return res.json()})
        .then((resJson)=>setUsers(resJson));
    }





    return(
        <div className="container">
        <Header/>
        <UserList users={users}/>
        </div>
        );
}


export default App;