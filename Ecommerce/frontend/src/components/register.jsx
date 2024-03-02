import { Link } from 'react-router-dom';
import userAPI from '../APIs/UserAPI';
import { useState } from 'react';
import { toast } from 'react-toastify';

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Call the register function from the userAPI module and pass the form data
      console.log(formData);
      const response = await userAPI.register(formData);
      console.log("Registration successful:",response);
      setLoading(false);
      setFormData({ name: "", email: "", password: "", address: "" });
      // Optionally, you can redirect the user to another page or show a success message
      toast.success(response.Message)
    } catch (error) {
      setLoading(false)
      console.error("Registration failed:", error);
      toast.warn(error.response.data.Message)
      // Optionally, you can display an error message to the user
    }
  };
  return (
    <>
      <div className="p-5">
        <div className="row">
          <div className="col mt-5 col-lg-6 d-lg-block d-none">
            <img src="https://www.maccosmetics.in/media/export/cms/sch_bhumi_52662/Bhumi_GNAV_030723.jpg" alt="" style={{ borderRadius: '5px', boxShadow: '5px 5px 5px 5px' }} />
          </div>
          <div className="col">
            <form>
              <span>
                <h1><b>Registration Form</b></h1>
              </span>
              <div className="mb-3">
                <label htmlFor="exampleInputname" className="form-label"></label>
                <input type="text" className="form-control" id="exampleInputname" placeholder="ENTER NAME" value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label"></label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="EMAIL ADDRESS" value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

              </div>
              <div className="mb-3 ">
                <label className="form-label" htmlFor="exampleInputPassword"></label>
                <input type="password" className="form-control" id="exampleInputPassword" aria-describedby="password" placeholder="PASSWORD" value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  } />
              </div>
              <div className="mb-3 ">
                <label className="form-label" htmlFor="exampleInputAddress"></label>
                <input type="text" className="form-control" id="exampleInputAddress" aria-describedby="Address" placeholder="Address" value={formData.address}
                  onChange={(e) =>
                    setFormData({ ...formData, address: e.target.value })
                  } />
              </div>
              <button type="submit" className="btn btn-primary w-100 bg-black" onClick={(e) => {
                handleSubmit(e); // Call register function on button click
              }}> {loading ? (
                <span>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    aria-hidden="true"
                  ></span>
                  <span role="status">Loading...</span>
                </span>
              ) : (
                "Register"
              )}</button>
              <div className="text-end mt-3"><u><Link to="/feedback">Feedback</Link></u></div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
