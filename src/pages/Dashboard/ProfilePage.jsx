import React, { useEffect, useState } from "react";
import { getUserProfile, updateUserProfile } from "../../api/userApi";
import { useNavigate } from "react-router-dom";

import { CircleUserRound as UserIcon } from "lucide-react";

const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const userId = JSON.parse(localStorage.getItem("user"))?._id ?? null;


  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const profile = await getUserProfile(userId);
        setUser(profile);
        setUsername(profile.username ?? "");
      } catch (err) {
        console.error("Failed to fetch user profile:", err.response?.data?.message ?? "Unknown Error");
        setError("Failed to load your profile. Please try again later.");
      }
    };

    fetchUserProfile();
  }, [userId]);

  const handleSave = async () => {
    setError("");
    try {
      const updatedProfile = await updateUserProfile(userId, { username });
      setUser(updatedProfile);
      setIsEditing(false);
    } catch (err) {
      setError(`Failed to update your profile: ${err.response?.data?.message  ?? `Unknown Error`}`);
    }
  };

  if (!user) {
    return <div className="text-white text-center py-10">Loading your profile...</div>;
  }

  return (
    <section className="relative bg-gradient-to-b from-[#0f0220] to-[#1a0333] text-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-6">👤 My Profile</h1>
        <div className="bg-[#1a0333] py-6 px-4 rounded-lg shadow-lg">
          {!isEditing ? (
            <div>
              <div>
                <UserIcon className="w-32 h-32 text-[#f93cff] mb-4 mx-auto" />
              </div>
              <div className="p-4 text-center mb-6">
                <h2 className="text-2xl font-semibold mb-2 break-all whitespace-normal overflow-hidden truncate">{user.username}</h2>
                <p className="text-sm text-gray-400">User ID: {user._id}</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-4">
                <button
                  onClick={() => setIsEditing(true)}
                  className="w-full md:w-fit bg-gradient-to-r from-[#f93cff] to-[#ffa9ca] text-white px-6 py-2 rounded-full font-bold transition hover:opacity-90"
                >
                  Edit Profile
                </button>
                <button
                  onClick={() => navigate("/change-password")}
                  className="w-full md:w-fit border-2 border-[#f93cff] text-white px-6 py-2 rounded-full font-bold transition hover:opacity-90"
                >
                  Change Password
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2">New Username</label>
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-[#2a0444] text-white border border-[#f93cff] focus:outline-none"
                />
              </div>
              {error && (
                <div className="text-sm text-red-400 mb-4" role="alert">
                  {error}
                </div>
              )}
              <div className="flex gap-4">
                <button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-[#f93cff] to-[#ffa9ca] text-white px-6 py-2 rounded-full font-bold transition hover:opacity-90"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="border-2 border-[#f93cff] text-white px-6 py-2 rounded-full font-bold hover:bg-[#f93cff]/20"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProfilePage;