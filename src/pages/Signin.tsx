
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '../maincomponents/Heading';
import { SubHeading } from '../maincomponents/SubHeading';
import { InputBox } from '../maincomponents/InputBox';
import { BottomWarning } from '../maincomponents/BottomWarning';
import Button1 from '../maincomponents/Button1';

export const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignin = async () => {
    if (!username || !password) {
      alert("Please fill in both fields.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post("https://paytm-backend-1-tg54.onrender.com/api/v1/user/signin", {
        username,
        password
      });

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        navigate("/dashboard");
      } else {
        alert("Signin failed. No token received.");
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Signin failed. Try again.";
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-slate-800 min-h-screen flex justify-center items-center">
      <div className="rounded-xl bg-white w-96 text-center p-6 shadow-lg">
        <Heading label="Sign in" />
        <SubHeading label="Enter your credentials to access your account" />
        <div className="space-y-4 mt-4">
          <InputBox
            placeholder="example@gmail.com"
            label="Email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <InputBox
            placeholder="********"
            label="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="pt-4">
          <Button1
            onClick={handleSignin}
            disabled={loading}
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
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )
            }
          />
        </div>
        <BottomWarning
          label="Don't have an account?"
          buttonText="Sign up"
          to="/signup"
        />
      </div>
    </div>
  );
};

export default Signin;
