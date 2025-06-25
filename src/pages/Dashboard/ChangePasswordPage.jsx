import React, { useState } from "react";
import { changePassword } from "../../api/authApi";
import { Eye, EyeOff } from "lucide-react";

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChangePassword = async () => {
    try {
      setError("");
      setSuccess("");
      const data = { oldPassword, newPassword };
      await changePassword(data);
      setSuccess("Password changed successfully!");
    } catch (err) {
      setError(`Failed to change your password: ${err?.response?.data?.message ?? "Unknown Error"}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-[#0f0220] to-[#1a0333] text-white min-h-screen py-10">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-2xl font-bold mb-6">🔐 Change Password</h1>
        <div className="bg-[#1a0333] py-6 px-4 rounded-lg shadow-lg">
          <div className="mb-4 max-w-md relative">
            <input
              type={showOldPassword ? "text" : "password"}
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              placeholder="Current Password"
              className="w-full px-4 py-2 rounded-lg bg-[#2a0444] text-white border border-[#f93cff] focus:outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-purple-300"
              onClick={() => setShowOldPassword(!showOldPassword)}
              aria-label={showOldPassword ? "Hide password" : "Show password"}
            >
              {showOldPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className="mb-4 max-w-md relative">
            <input
              type={showNewPassword ? "text" : "password"}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              className="w-full px-4 py-2 rounded-lg bg-[#2a0444] text-white border border-[#f93cff] focus:outline-none"
            />
            <button
              type="button"
              className="absolute inset-y-0 right-3 flex items-center text-purple-300"
              onClick={() => setShowNewPassword(!showNewPassword)}
              aria-label={showNewPassword ? "Hide password" : "Show password"}
            >
              {showNewPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          {error && (
            <div className="text-sm text-red-400 mb-4" role="alert">
              {error}
            </div>
          )}
          {success && (
            <div className="text-sm text-green-400 mb-4" role="alert">
              {success}
            </div>
          )}
          <div className="flex gap-4 mt-8">
            <button
              onClick={handleChangePassword}
              className="w-full md:w-fit bg-gradient-to-r from-[#f93cff] to-[#ffa9ca] text-white px-6 py-2 rounded-full font-bold transition hover:opacity-90"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChangePasswordPage;