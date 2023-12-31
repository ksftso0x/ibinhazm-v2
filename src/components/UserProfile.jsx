import userImg from "../assets/user_img.png";

function UserProfile({ logedIn }) {
  const userProfile = (
    <>
      <img src={userImg} alt="user img" className="header__user-img m-r-s" />
      <h5 className="header__user-name">Okkasha Ally</h5>
    </>
  );

  const signinLogin = (
    <div className="signin-login">
      <button className="btn btn__signin">Sign Up</button>
      <button className="btn btn__login">Log In</button>
    </div>
  );

  return (
    <div className="header__user">{logedIn ? userProfile : signinLogin}</div>
  );
}

UserProfile.defaultProps = {
  logedIn: true,
};

export default UserProfile;
