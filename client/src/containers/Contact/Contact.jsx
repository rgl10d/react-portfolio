import React from "react";
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <main className="container">
        <div className="row">
          <article className="col">
            <h1>Contact</h1>
            <hr className="my-4" />
            <form>
              <div className="form-group">
                <label className="control-label col-sm-2" for="name">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                    name="name"
                  />
                </div>
              </div>
              <div className="form-group">
                <label
                  className="control-label col-sm-2"
                  id="emailtitle"
                  for="email"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-2" for="message">
                  Message
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="message"
                    rows="3"
                  ></textarea>
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                  <button type="button" className="btn btn-secondary btn-lg">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </article>
        </div>
      </main>
    </>
  );
};

export default Contact;
