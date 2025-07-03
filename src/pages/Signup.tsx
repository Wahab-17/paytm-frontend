
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '../maincomponents/Heading';
import { SubHeading } from '../maincomponents/SubHeading';
import { InputBox } from '../maincomponents/InputBox';
import { BottomWarning } from '../maincomponents/BottomWarning';
import Button1 from '../maincomponents/Button1';

export const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!firstName || !lastName || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post("https://paytm-backend-1-tg54.onrender.com/api/v1/user/signup", {
        firstName,
        lastName,
        username,
        password
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        alert("Signup failed. No token received.");
      }
    } catch (e) {
      const message =
        e.response?.data?.message || "Signup failed. Please try again.";
      alert(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-300 min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-96 text-center p-6 shadow-lg">
        <Heading label={"Sign up"} />
        <SubHeading label={"Enter your information to create an account"} />
        <div className="space-y-4 mt-4">
          <InputBox
            placeholder="Name"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <InputBox
            placeholder="Name"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
          <InputBox
            placeholder="example@gmail.com"
            label="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="******"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-4">
          <Button1
            onClick={handleSignup}
            label={
              loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Signing up...
                </span>
              ) : (
                "Sign up"
              )
            }
            disabled={loading}
          />
        </div>
        <BottomWarning
          label="Already have an account?"
          buttonText="Sign in"
          to="/signin"
        />
      </div>
    </div>
  );
};

export default Signup;
