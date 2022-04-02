import React, { createContext, Component } from "react";

export const UserContext = createContext();

class UserContextProvider extends Component {
  state = {
    jwt: "",
    loggedIn: false,
  };

  //for login
  login = (password) => {
    // console.log(password);

    fetch("https://joshuaizutechs.herokuapp.com/admincp/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
      },
      body: JSON.stringify({ password }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.user) {
          // console.log(data.user)

          this.setState({
            jwt: data.user.jwt,
            loggedIn: "true",
          });
          window.localStorage.setItem("jwt", this.state.jwt);
          window.localStorage.setItem("loggedIn", this.state.loggedIn);
          alert("Logged In");
        } else {
          alert(data.errors);
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <UserContext.Provider
        value={{
          ...this.state,
          login: this.login,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default UserContextProvider;
