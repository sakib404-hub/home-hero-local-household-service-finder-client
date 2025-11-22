import React, { use } from 'react';
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { updateProfile } from 'firebase/auth';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
    const { user, setUser } = use(AuthContext);
    const handleFormSubmission = (event) => {
        event.preventDefault();
        const displayName = event.target.username.value;
        const photoURL = event.target.photoURL.value;

        updateProfile(user, {
            displayName: displayName,
            photoURL: photoURL
        })
            .then(() => {
                setUser(user)
                Swal.fire({
                    title: "Profile Updated!",
                    text: "Your user information has been successfully updated.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1800,
                    position: "top-end",
                    background: "#f0fdf4",
                    color: "#166534",
                    toast: true,
                    timerProgressBar: true,
                });
            })
            .catch((error) => {
                Swal.fire({
                    title: "Update Failed!",
                    text: error.message || "Something went wrong. Please try again.",
                    icon: "error",
                    position: "top-end",
                    toast: true,
                    background: "#fef2f2",
                    color: "#991b1b",
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                });
            });

    }
    return (
        <div className='min-h-screen flex items-center justify-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <form
                        onSubmit={handleFormSubmission}>
                        <fieldset className="fieldset">
                            <label
                                htmlFor='username'
                                className="label"
                            >Username</label>
                            <input
                                type="text"
                                name='username'
                                id='username'
                                defaultValue={user?.displayName}
                                className="input"
                            />
                            <label
                                htmlFor='photoURL'
                                className="label">photoURL</label>
                            <input
                                type="text"
                                id='photoURL'
                                name='photoURL'
                                className="input"
                                defaultValue={user?.photoURL}
                            />
                            <button
                                type='submit'
                                className="btn 
                            btn-primary mt-4">Update Profile</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;