import React from "react";

function UserInfo(props) {
  const { userData } = props;
  return (
    <div className="user-info">
      {userData ? (
        <>
          <p>{userData.username}</p>
          <p>
            <strong>Age:</strong> {userData.age}
          </p>
          <p>
            <strong>Height:</strong> {userData.height} cm
          </p>
          <p>
            <strong>Weight:</strong> {userData.weight} kg
          </p>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserInfo;
