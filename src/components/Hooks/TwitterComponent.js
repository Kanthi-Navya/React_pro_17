import React, { useState } from 'react';
 
const userList = [
 {
   id: 1,
   name: "shailaja",
   img: "https://lh3.googleusercontent.com/ogw/ADGmqu8CYxPjQKDNTrJH4W2JDelJd0ObLlcxq5pBagbaAw=s32-c-mo",
   username: "shailaja-dhyade", status: "Follow"
 },
 {
   id: 2,
   name: "Dan Abramov",
   img: "https://avatars0.githubusercontent.com/u/810438?v=4",
   username: "shailaja-dhyade", status: "Follow"
 },
 {
   id: 3,
   name: "Sophie Alpert",
   img: "https://avatars2.githubusercontent.com/u/6820?v=4",
   username: "Sophie Alpert",
   status: "Follow"
 },
 {
   id: 4,
   name: "Sebastian Markbåge",
   img: "https://avatars2.githubusercontent.com/u/63648?v=4",
   username: "Sebastian Markbåge",
   status: "Follow"
 }
];
 
  function SuggestionsHead(props){
    return(
      <div className="suggestions-head">
        <h5 style={{color: "black", fontWeight: 700}}>You might like</h5>
        <span> </span>
        <span></span>
      </div>
    )
  }
 
  function Suggestions(props){
    // console.log(props);
    var usersFollowing = [];
    var List=[];
    var [userStatus, setUserStatus] = useState();
   
    var [state,setStatus] = useState('Follow');
  // props.value.status="Following";  // console.log(props);
    // console.log('sadf',state);
    const handleClick = () => {
     setStatus(state === "Follow" ? "Following" : "Follow");
    
    
      // userStatus=userStatus.push(props.id,state);
      if(state === "Follow"){
        usersFollowing  = {
                            "id": props.id,
                            "name": props.name,
                            "username": props.username,
                            "img": props.img,
                            "status": state+"ing"
                           };
         // usersFollowing=[props.id,state+"ing",props.name,props.img,props.username];
      }
      else {
        state="Follow";
        usersFollowing  = {
                            "id": props.id,
                            "name": props.name,
                            "username": props.username,
                            "img": props.img,
                            "status": state
                           };  
      }
 
      userStatus= usersFollowing;
      setUserStatus(userStatus);
    }
   if(userStatus){
     userList.map((index)=>{       
       if(index.id===userStatus.id){
         List.push(userStatus);
         console.log(userStatus);
       }
       else {
         List.push(index);
         // console.log(index);
       }
     });
     console.log(List);
     
    }
    
     console.log(List, "list of elements");
    
    
  
    return(
      <div className="suggestions">
        <a href={props.img} >
        <div className="user-image">
          <img src={props.img} alt="fghufdhg"/>
        </div>
        <div className="users">
          <div className="user-details">
            <b className="name" style={{ paddingTop: 4}}>{props.name}</b>
            <p className="username">@{props.username}</p>
          </div>
 
      </div>
          </a>
        <div className="follow">
          <button  value={props} onClick={handleClick}  className="follow-link">{state}</button></div>
        </div>
    )
  }
 
  function More(){
    return(
      <div style={{padding: 10}}>
        {/* <a href=""><span style={{color: "#1da1f2", fontSize: 14}}>Show more</span></a> */}
      </div>
    )
  }
 
   function List(props){
    
     return(
       <div>
     {props.user.map(users => <Suggestions key={users.id} {...users} />)}
        <More />
         </div>
  )
   }
  function Section(){
    return(
    <div className="section">
        Twitter
    </div> 
    )
  }
  function Left(props){
    // const users = props.user;
       
 
    return(
      <div className="app">
        <SuggestionsHead />
        <List user={userList}/>
      </div>
    );
  }
  const Twitter =() =>{
 
    return(
      <div className="apps">
        <Section/>
        <Left />
      </div>
      )
  }
 //  ReactDOM.render(<App user={userList} className="apps"/>, mountNode)
 
  export default Twitter;

