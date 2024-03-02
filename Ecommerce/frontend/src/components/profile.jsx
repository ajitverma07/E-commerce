import { useDispatch, useSelector } from "react-redux";
import userAPI from "../APIs/UserAPI";
import { selectToken } from "../slices/AuthSlice";
import { useState } from "react";
import { setUser } from "../slices/UserSlice";

import personicon from "../imgs/person-fill.svg"
import { Link,  } from "react-router-dom";

function Profile() {
  const user = JSON.parse(sessionStorage.getItem('user'));
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address,
  });
  

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
     const data= await userAPI.UpdateProfile(formData,token);
      handleCloseModal();
      console.log(data);
      dispatch(setUser(data.user));
  
      // You may want to dispatch an action to update the user data in Redux store here
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error (e.g., display error message)
    }
  };
    
      return (
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8">
              {user && (
                <div className="card">
                <div className="card-body">
                  <div className="text-center">
                  <div className="d-flex mb-3">
            <h2>User Profile</h2>
            <Link className="mt-2 ms-3" onClick={handleShowModal}>
              <i className="fa-solid fa-user-pen fa-xl"></i>
            </Link>
          </div>
                    <img src={personicon} alt={user.name} className="rounded-circle" style={{ width: '150px', height: '150px' }} />
                    <h2 className="mt-3">{user.name}</h2>
                    {/* <p className="text-muted">@{user.username}</p> */}
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Email</h5>
                      <p>{user.email}</p>
                    </div>
                    <div className="col-md-6">
                      <h5>Address</h5>
                      <p>{user.address}</p>
                    </div>
                  </div>
                </div>
              </div>
              )}
              {showModal && (
        <UpdateProfileModal
          formData={formData}
          handleCloseModal={handleCloseModal}
          handleFormChange={handleFormChange}
          handleUpdateProfile={handleUpdateProfile}
        />
      )}
            </div>
          </div>
        </div>
      );
}

function UpdateProfileModal({
  formData,
  handleCloseModal,
  handleFormChange,
  handleUpdateProfile,
}) {
  return (
    <div className="modal fade show" tabIndex="-1" style={{ display: "block" }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="updateProfileModalLabel">
              Update Profile
            </h1>
            <button
              type="button"
              className="btn-close"
              onClick={handleCloseModal}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form className="row g-3" onSubmit={handleUpdateProfile}>
              <div className="col-md-6">
                <label htmlFor="userName" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="userEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </div>
              <div className="col-12">
                <label htmlFor="userAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="userAddress"
                  name="address"
                  placeholder="1234 Main St"
                  value={formData.address}
                  onChange={handleFormChange}
                />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleCloseModal}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary" onClick={handleUpdateProfile}>
              Update Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;