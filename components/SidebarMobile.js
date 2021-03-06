import { Button } from "@chakra-ui/button";
import React from "react";
import { Component } from "react";
import "./test.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import auth from "../utils/auth";
import styles from './SidebarMobile.module.css';

class SidebarMobile extends Component {
  constructor(props) {
    super(props);
    this.state = { ClickedButton: 1 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState({ ClickedButton: id });
    this.props.selectedtype.bind(this, id)();
  }
  render() {
    return (
      <div class="px-0.5 py-0.5 bg-indblue z-50 static uppercase font-semibold  flex h-16 md:flex-col   justify-around md:h-screen w-80 fixed bottom-0 items-left">
        <img
          className="hidden h-10 md:block"
          src="/assets/logo-all.png"
        ></img>
        {this.props.moduletypes.map((moduletype, selectedtype) => (
          <div
            className={
              moduletype.id === this.state.ClickedButton
                ? "bg-white md:flex md:flex-wrap p-2 delay-75 duration-500 ease-in-out transform items-center text-indblue rounded-xl"
                : "transparent md:flex md:flex-wrap p-2 delay-75 duration-500 ease-in-out transform items-center text-white"
            }
            id={moduletype.id}
            key={moduletype.id}
            onClick={() => this.handleChange(moduletype.id)}
          >
            <FontAwesomeIcon icon={moduletype.icon} className="m-2" />
            <span
              style={{ fontFamily: "Montserrat" }}
              className="hidden  md:block text-sm"
            >
              {moduletype.type}
            </span>
          </div>
        ))}
        <div className="hidden md:block md:h-20"></div>
        {!this.props.view_only_mode && (
          <div
            onClick={() => auth().logout()}
            class="hidden md:flex md:flex-wrap hover:shadow-md p-2 rounded-xl duration-1000 ease-in-out transform delay-200  text-3xl font-bold text-white text-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
          >
            <svg
              class="w-6 h-6 mr-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              ></path>
            </svg>
            <span
              style={{ fontFamily: "Montserrat" }}
              className="hidden md:block text-sm"
            >
              Log Out
            </span>
          </div>
        )}
      </div>
    );
  }
}

export default SidebarMobile;
