import { Link, useNavigate} from "react-router-dom";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [message, setMessage] = useState('');
  const [inquiryType, setInquiryType] = useState('General Inquiry');
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, firstname, lastname });
    navigate('/');
  };
  return (

    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 bg-[#0a0025]">
      <h1 className="text-6xl font-bold text-White-600 mb-4">Contact Us</h1>
        <form className="bg-[#15003a] p-8 rounded-lg w-full max-w-sm shadow-lg space-y-4" onSubmit={handleSubmit}>

          <input type="email" placeholder="E-mail" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" value={email} onChange={(e) => setEmail(e.target.value)} />

          <input type="text" placeholder="Firstname" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" value={firstname} onChange={(e) => setFirstname(e.target.value)} />

          <input type="text" placeholder="Lastname" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" value={lastname} onChange={(e) => setLastname(e.target.value)} />
          
          <select value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white">
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">Support</option>
            <option value="Feedback">Refund</option>
            <option value="Other">Other</option>
          </select>

          <textarea placeholder="Your Message" className="w-full p-2 rounded bg-[#1d004f] border border-purple-600 text-white placeholder-purple-300" rows="4" value={message}onChange={(e) => setMessage(e.target.value)}/>

          <button type="submit" className="w-full py-2 font-bold text-white transition rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:scale-105">
            Send Email →
          </button>

        </form>
    </div>
  );
}

export default Contact;
