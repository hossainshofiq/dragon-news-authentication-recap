// import React from 'react';

import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {

    const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // get form data
        const form = new FormData(e.target);
        const name = form.get("name");
        if (name.length < 5) {
            setError({ ...error, name: "Must be more than 5 characters long" });
            return
        }
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        if (password.length < 6) {
            setError({ ...error, password: "Must be more than 6 characters long" });
            return
        }
        // console.log({ name, photo, email, password })

        createNewUser(email, password).then((result) => {
            const user = result.user;
            setUser(user);
            // console.log(user);

            updateUserProfile({ displayName: name, photoURL: photo })
                .then(() => {
                    navigate("/");
                })
                .catch((err) => {
                    console.log(err);
                })

        })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="card bg-base-100 w-full max-w-lg shrink-0 rounded-none p-16">
                <h2 className="text-2xl font-semibold text-center">Register your account</h2>
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input name="name" type="text" placeholder="Enter your name" className="input input-bordered" required />
                        {
                            error.name && <label className="label text-sm text-red-500">
                                {error.name}
                            </label>
                        }
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input name="photo" type="text" placeholder="Enter your photo url" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Enter your email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="Enter your password" className="input input-bordered" required />
                        {
                            error.password && <label className="label text-sm text-red-500">
                                {error.password}
                            </label>
                        }
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-neutral rounded-md">Register</button>
                    </div>
                </form>
                <p className="font-semibold text-center">Already Have An Account ? <Link className="text-red-500" to='/auth/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;