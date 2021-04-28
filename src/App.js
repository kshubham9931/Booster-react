import { useState } from "react";
import "./styles.css";

export default function App() {
  const api = `https://randomuser.me/api`;
  const [user, setUser] = useState([]);
  const addUserHandler = async () => {
    const userData = await fetch(api, {
      method: "GET"
    });
    const userJson = await userData.json();
    //    console.log(userJson.results[0]);
    const newUser = [...user, userJson.results[0]];
    setUser(newUser);
  };
  return (
    <div className="main-container">
      <h1>DOM Array Methods in React</h1>
      {/* <div className="header-btns">
        <button onClick={addUserHandler}>Add User</button>
        <input type="text" placeholder="search" />
        <button id="sort-dsc">sort Desc</button>
        <button id="sort-asc">sort Asc</button>
      </div> */}
      <UserBtn addUserHandler={addUserHandler} />
      <UserList user={user} />
    </div>
  );
}

const UserList = (props) => {
  const { user } = props;
  return (
    <div className="user-list">
      {user.map((userObj, index) => {
        return <UserObject key={index} userobj={userObj} />;
      })}
    </div>
  );
};

const UserBtn = ({ addUserHandler }) => {
  //const { addUserHandler = () => {} } = props;
  return (
    <div className="header-btns">
      <button onClick={addUserHandler}>Add User</button>
      <input type="text" placeholder="search" />
      <button id="sort-dsc">sort Desc</button>
      <button id="sort-asc">sort Asc</button>
    </div>
  );
};

const UserObject = (props) => {
  let { userobj } = props;
  return (
    <div>
      <div className="header-data">
        <div className="data-name">
          {userobj.name.title} {userobj.name.first} {userobj.name.last}
        </div>
        <ol>
          <li>{userobj.email} </li>
          <li>{userobj.gender} </li>
        </ol>
      </div>
    </div>
  );
};
