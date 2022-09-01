import React, { useState } from "react";
import "./index.css";
const App = () => {
  const [data, setData] = useState({
    name: "",
    password: "",
  });
  const handler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    fetch("https://test-api-b-default-rtdb.firebaseio.com/data.json", {
      method: "post",
      body: JSON.stringify(data),
    }).then((res) => {
      if (data.name == "" && data.password == "") {
        document.getElementById("demo").innerHTML =
          " Name and Password Should Not Be Empty";
        document.getElementById("demo").style.display = "block";
      } else if (data.name == "") {
        document.getElementById("demo").innerHTML = "Please Enter Name";
      } else if (data.password == "") {
        document.getElementById("demo").innerHTML = "Please Enter Password";
      } else {
        document.getElementById("demo").style.display = "none";

        alert("Data Posted To Database").catch((err) => console.log(err));
      }
    });
  };
  return (
    <body>
      <div className="container ">
        <center>
          <div className="row">
            <div className="col-md-12">
              <h4>Login Form</h4>
              <form onSubmit={submit}>
                <lable>User Name</lable>
                <br />
                <input type="text" name="name" onChange={handler} />
                <br />
                <lable>Password</lable>
                <br />
                <input type="Password" name="password" onChange={handler} />
                <br />
                <br />
                <input type="submit" value="Log In" id="btn" />
                <br />
                <h5 id="demo"></h5>
              </form>
            </div>
          </div>
        </center>
      </div>
    </body>
  );
};

export default App;
