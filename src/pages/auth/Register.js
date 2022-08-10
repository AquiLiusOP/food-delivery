import React from "react";

const Register = () => {
  return (
    <div className="container">
      <div className="py-5">
        <form className="form-width">
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="text" id="form3Example2" class="form-control" />
                <label class="form-label" for="form3Example2">
                  Last name
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
            <input type="email" id="form3Example3" class="form-control" />
            <label class="form-label" for="form3Example3">
              Email address
            </label>
          </div>

          <div class="form-outline mb-4">
            <input type="password" id="form3Example4" class="form-control" />
            <label class="form-label" for="form3Example4">
              Password
            </label>
          </div>

          <div class="form-check d-flex justify-content-center mb-4">
            <label class="form-label" for="user">
              Role
            </label>{" "}
            <select
              name="role"
              id="user"
              className="form-select ms-2"
              aria-label="Default select example"
            >
              <option selected>User</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary btn-block mb-4">
            Sign up
          </button>

          <div class="text-center">
            <p>or sign up with:</p>
            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-primary btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
