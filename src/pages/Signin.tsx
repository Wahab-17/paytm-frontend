import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Heading } from '../maincomponents/Heading';
import { SubHeading } from '../maincomponents/SubHeading';
import { InputBox } from '../maincomponents/InputBox';
import { BottomWarning } from '../maincomponents/BottomWarning';
import { Button1 } from '../maincomponents/Button1';

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
      const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
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
            label={loading ? "Signing in..." : "Sign in"}
            onClick={handleSignin}
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
