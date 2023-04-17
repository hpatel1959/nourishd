import React from "react";

function UserInfo(props) {
  const { userData } = props;
  return (
    <div>
      {userData ? (
        <>
          <p>{userData.username}</p>
          <p>{userData.age} years old</p>
          <p>{userData.height} cm</p>
          <p>{userData.weight} kg</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserInfo;
