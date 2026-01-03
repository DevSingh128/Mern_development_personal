import React, { useState, useEffect } from 'react';


function UserList(){
    //state logic
    const [user,setusers] = useState([])
    const [search,setsearch] = useState("")

    //fetch logic
    useEffect(()=>{
        const fetchUser = async() => {
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setusers(data);
        }catch(error){
            console.log("error cant fetch")
        }
    }
    fetchUser();
    },[])

    //filter logic
    const filteredUser = user.filter((u) => {
        return u.name.toLowerCase().includes(search.toLowerCase())
    });

    return (
    <div className="container">
      <h2 className="title">User Directory</h2>
      
      <input 
        type="text" 
        placeholder="Search by name..." 
        className="search-input text-3xl text-amber-950"
        value={search}
        onChange={(e)=>{setsearch(e.target.value)}}
      />

      <div className="user-list text-[0.25rem] text-black">
        {/* --- 5. YOUR MAP LOGIC ---*/}
        {
            filteredUser.map((item) => (
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <h1>{item.email}</h1>
                </div>
            ))
        }
      </div>
    </div>
  );
}

export default UserList;