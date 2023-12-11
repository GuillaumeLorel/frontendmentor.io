import { useState } from "react";
import SignUp from "./components/SignUp";
import SuccessMessage from "./components/SucessMessage";

function App() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");

  return (
    <div className="sm:bg-dark-navy min-h-screen flex justify-center items-center sm:px-4">
      {success ? (
        <SuccessMessage
          setSuccess={setSuccess}
          email={email}
          setEmail={setEmail}
        />
      ) : (
        <SignUp setSuccess={setSuccess} email={email} setEmail={setEmail} />
      )}
    </div>
  );
}

export default App;
