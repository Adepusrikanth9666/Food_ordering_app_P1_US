import React from "react";
import "./styles/home.css";
import Header from "./Header";
import Footer from "./Footer";
import { Button } from "@mui/material";
import { useState } from "react";

export function Welcome({ name, user }) {
  // const text = props.text;
  // console.log(props);
  return (
    <>
      <h2>{`Hey ${name}: ${user.email} ,How R U ??,How May i help you??`}</h2>
    </>
  );
}

export function Home() {
  const [count, setCount] = useState(0);

  const user = {
    name: "srikanth",
    email: "sri@gmail.com",
    employeeCode: "1234",
  };

  const handleClick = () => {
    setCount(count + 1);
  };
  console.log(count);
  return (
    <div className="home-container">
      {/* Header */}

      <Header />
      <Welcome name="Srikanth" user={user} />
      <h1>Home page</h1>

      <div>
        <p>count is {count} </p>
        <Button onClick={handleClick}>Click</Button>
      </div>

      {/* body */}

      {/* footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

// props ()
