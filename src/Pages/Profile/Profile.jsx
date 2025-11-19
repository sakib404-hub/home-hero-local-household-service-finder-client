import React, { use } from "react";
import { FaEnvelope, FaUser, FaClock, FaIdBadge, FaGoogle, FaCheckCircle } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const Profile = () => {
    const { user } = use(AuthContext)
    const {
        displayName,
        email,
        photoURL,
        providerId,
        uid,
        metadata,
        emailVerified,
    } = user;

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="card w-full max-w-lg bg-base-100 shadow-xl border border-base-content/10">
                <div className="card-body">

                    {/* Profile Image */}
                    <div className="flex flex-col items-center">
                        <div className="h-28 w-28 rounded-full overflow-hidden shadow-md border border-base-content/20">
                            <img
                                src={photoURL}
                                alt="User Avatar"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        <h2 className="text-2xl font-bold mt-3 text-primary">
                            {displayName || "Unnamed User"}
                        </h2>

                        <div className="flex items-center gap-2 mt-1">
                            <span className="badge badge-success gap-2">
                                <FaCheckCircle />
                                {emailVerified ? "Verified" : "Not Verified"}
                            </span>
                        </div>
                    </div>

                    <div className="divider"></div>

                    {/* Info Section */}
                    <div className="space-y-4">

                        <div className="flex items-center gap-3">
                            <FaEnvelope className="text-primary" />
                            <span className="font-medium">{email}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaUser className="text-primary" />
                            <span className="font-medium">
                                Provider: {providerId === "google.com" ? "Google" : providerId}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaIdBadge className="text-primary" />
                            <span className="font-medium">UID: {uid}</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaClock className="text-primary" />
                            <span className="font-medium">
                                Last Login: {metadata?.lastSignInTime}
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <FaClock className="text-primary" />
                            <span className="font-medium">
                                Account Created: {metadata?.creationTime}
                            </span>
                        </div>

                    </div>

                    <div className="card-actions justify-center mt-5">
                        <button className="btn btn-primary w-full">
                            Edit Profile
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Profile;
