import React from "react";

function UserInfo(props) {
  const { userData } = props;
  return (
    <div className="user-info">
      {userData ? (
        <>
          <p>{userData.username}</p>
          <p>Age: {userData.age}</p>
          <p>Height: {userData.height} cm</p>
          <p>Weight: {userData.weight} kg</p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserInfo;
