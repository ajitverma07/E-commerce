import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import userAPI from '../APIs/UserAPI';
import { toast } from 'react-toastify';
import { setUser } from '../slices/UserSlice';
import { setToken } from '../slices/AuthSlice';



function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    console.log(userData);
    try {
      const response = await userAPI.login(userData);
      console.log(response);
      dispatch(setUser(response.user));
      dispatch(setToken(response.token));
      setLoading(false);
      toast.success(response.Message);
      navigate("/allproducts")
      
    } catch (error) {
      console.log(error);
      setLoading(false);
      toast.warn(error.response.data.Message);
    }
  };
  return (
    <>
      <div className="container" style={{ margin: 'auto', marginTop: '10px', position: 'relative', top: '5vh', width: '50vw' }}>
        <form>
          <span>
            <h1><b>SIGN IN</b></h1>
            <p>Don't have an account? <Link to="/register">Register here</Link></p>
          </span>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label"></label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
              placeholder="EMAIL ADDRESS"  value={userData.email}
              onChange={(e) =>
                setUserData(() => ({
                  ...userData,
                  email: e.target.value,
                }))
              } />
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label"></label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="PASSWORD" value={userData.password}
          onChange={(e) =>
            setUserData(() => ({
              ...userData,
              password: e.target.value,
            }))
          } />
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"  />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <button  type="submit" className="btn btn-primary w-100 bg-black" onClick={(e) => {
          e.preventDefault();
          login();
        }}>{loading ? (
          <span>
            <span
              className="spinner-border spinner-border-sm me-2"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </span>
        ) : (
          "Log-In"
        )}</button>
          <div className="text-end mt-3"><u>forgot password</u></div>
        </form>
      </div>
    </>
  );
}

export default Login;
