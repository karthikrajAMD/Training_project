import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useFormik } from "formik";
import { env } from "../env";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import "../styleSheet/profile.css";
function Profile() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [change, setChange] = useState(false);
  // const [showIcon, setShowIcon] = useState(false);

  const [imageUrl, setImageUrl] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [Dob, setDob] = useState("");
  const [Doj, setDoj] = useState("");
  const [address, setAddress] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [mobile, setMobile] = useState("");
  const [educationBackground, setEducationBackground] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const navigate = useNavigate();
  async function getProfileData(email) {
    console.log(email);
    let data = await axios
      .get(`${env.REACT_APP_API}/users/profile/get/${email}`)
      .then((d) => {
        console.log(d.data.profile);
        setImageUrl(d.data.profile.imageUrl);
        setJobTitle(d.data.profile.jobTitle);
        setDob(d.data.profile.Dob);
        setDoj(d.data.profile.Doj);
        setAddress(d.data.profile.address);
        setBloodGroup(d.data.profile.bloodGroup);
        setMobile(d.data.profile.mobile);
        setEducationBackground(d.data.profile.educationBackground);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }

  async function updateProfile(values, action, eMail) {
    console.log(eMail);
    let sendProfileData = await axios
      .put(`${env.REACT_APP_API}/users/profile_update`, {
        email: eMail,
        imageUrl: values.imageUrl,
        jobTitle: values.jobTitle,
        Dob: values.Dob,
        Doj: values.Doj,
        address: values.address,
        bloodGroup: values.bloodGroup,
        mobile: values.mobile,
        educationBackground: values.educationBackground,
      })
      .then((d) => {
        console.log(d);
        setChange(!change);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  async function onSubmit2(values, action) {
    console.log(email);
    let sendProfileData = await axios
      .post(`${env.REACT_APP_API}/users/profile`, {
        email: email,
        imageUrl: values.imageUrl,
        jobTitle: values.jobTitle,
        Dob: values.Dob,
        Doj: values.Doj,
        address: values.address,
        bloodGroup: values.bloodGroup,
        mobile: values.mobile,
        educationBackground: values.educationBackground,
      })
      .then((d) => {
        console.log(d);
      })
      .catch((err) => {
        if (err.response.status === 400 || err.response.status === 500) {
          updateProfile(values, action, email);
        }
      });
    setTimeout(() => {
      handleClose();
    }, 1000);
  }

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      imageUrl: imageUrl ? imageUrl : "",
      jobTitle: jobTitle ? jobTitle : "",
      Dob: Dob ? Dob : "",
      Doj: Doj ? Doj : "",
      address: address ? address : "",
      bloodGroup: bloodGroup ? bloodGroup : "",
      mobile: mobile ? mobile : "",
      educationBackground: educationBackground ? educationBackground : "",
    },
    onSubmit: onSubmit2,
  });
  useEffect(() => {
    let loginSignupClass = document.querySelector(".login-signup");
    if (loginSignupClass) loginSignupClass.className = "ls-remove";
    let headClass = document.querySelector(".head1");
    if (headClass) headClass.className = "head";
    let getData = localStorage.getItem("user");
    if (getData === "") {
      let loginSignupClass = document.querySelector(".ls-remove");
      loginSignupClass.className = "login-signup";
      let headClass = document.querySelector(".head");
      headClass.className = "head1";
      navigate("/");
    } else {
      // console.log(getData);
      setEmail(JSON.parse(getData).email);
      getProfileData(JSON.parse(getData).email);
    }
  }, [change]);
  return (
    <div>
      <div className="profile-image">
        <img
          src={
            imageUrl
              ? imageUrl
              : "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          }
        />
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Profile Update</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body> */}
        <div className="modal-body">
          <form onSubmit={formik.handleSubmit} autoComplete="off">
            <div className="mb-3">
              <label>Image URL</label>
              <input
                type="text"
                value={formik.values.imageUrl}
                onChange={formik.handleChange}
                placeholder="Image Url"
                id="imageUrl"
              />
            </div>
            <div className="mb-3">
              <label>Job Title</label>
              <input
                type="text"
                value={formik.values.jobTitle}
                onChange={formik.handleChange}
                placeholder="Job Title"
                id="jobTitle"
              />
            </div>
            <div className="mb-3">
              <label>Date of Birth</label>
              <input
                type="date"
                value={formik.values.Dob}
                onChange={formik.handleChange}
                placeholder="Date of birth"
                id="Dob"
              />
            </div>
            <div className="mb-3">
              <label>Date of Join</label>
              <input
                type="date"
                value={formik.values.Doj}
                onChange={formik.handleChange}
                placeholder="Date of Joining"
                id="Doj"
              />
            </div>
            <div className="mb-3">
              <label>Address</label>
              <input
                type="text"
                value={formik.values.address}
                onChange={formik.handleChange}
                placeholder="Address"
                id="address"
              />
            </div>
            <div className="mb-3">
              <label>Blood</label>
              <input
                type="text"
                value={formik.values.bloodGroup}
                onChange={formik.handleChange}
                placeholder="Blood Group"
                id="bloodGroup"
              />
            </div>
            <div className="mb-3">
              <label>Mobile</label>
              <input
                type="text"
                min="10"
                max="10"
                value={formik.values.mobile}
                onChange={formik.handleChange}
                placeholder="Mobile"
                id="mobile"
              />
            </div>
            <div className="mb-3">
              <label>Qualification</label>
              <input
                type="text"
                value={formik.values.educationBackground}
                onChange={formik.handleChange}
                placeholder="Qualification"
                id="educationBackground"
              />
            </div>

            {/* </Modal.Body> */}
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                // disabled={formik.isSubmitting}
                type="submit"
                variant="primary"
              >
                Save Changes
              </Button>
            </Modal.Footer>
          </form>
        </div>
      </Modal>

      <div className="profile-content">
        <div>
          Job Title:<span>{jobTitle}</span>
        </div>
        <div>
          DoB:<span>{Dob}</span>
        </div>
        <div>
          DoJ:<span>{Doj}</span>
        </div>
        <div>
          Address:<span>{address}</span>
        </div>
        <div>
          Blood:<span>{bloodGroup}</span>
        </div>
        <div>
          Mobile:<span>{mobile}</span>
        </div>
        <div>
          Qualification:<span>{educationBackground}</span>
        </div>
        {/* {profileData
          ? profileData.map((e) => {
              return (
                <>
                  <div>
                    Job Title:<span>{e}</span>
                  </div>
                  <div>
                    Image URL:<span></span>
                  </div>
                  <div>
                    DoB:<span></span>
                  </div>
                  <div>
                    DoJ:<span></span>
                  </div>
                  <div>
                    Address:<span></span>
                  </div>
                  <div>
                    Blood:<span></span>
                  </div>
                  <div>
                    Mobile:<span></span>
                  </div>
                  <div>
                    Qualification:<span></span>
                  </div>
                </>
              );
            })
          : ""} */}
      </div>
      <div>
        <button className="profile-update-but" onClick={handleShow}>
          Update
        </button>
      </div>
    </div>
  );
}

export default Profile;
