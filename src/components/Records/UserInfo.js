import React from "react";

function UserInfo(props) {
  const { userData } = props;
  const today = new Date();
  const day = today.getDate();
  const month = today.toLocaleString("default", { month: "long" });

  return (
    <div className="user-info my-3">
      {userData ? (
        <>
          <div className="user-name">
            <h3>Hi, {userData.username}</h3>
          </div>
          <div className="user-stats">
            <p>
              <strong>
                <i class="fa-regular fa-calendar"></i>
                <span>
                  {day}, {month}
                </span>
              </strong>
            </p>
            <p>
              <i class="fa-solid fa-cake-candles"></i>
              <strong>Age:</strong> {userData.age}
            </p>
            <p>
              <i class="fa-solid fa-weight-scale"></i>
              <strong>Height:</strong> {userData.height} cm
            </p>
            <p>
              <i class="fa-solid fa-ruler-vertical"></i>
              <strong>Weight:</strong> {userData.weight} kg
            </p>
          </div>
        </>
      ) : (
        <p>Please log in</p>
      )}
    </div>
  );
}

export default UserInfo;
