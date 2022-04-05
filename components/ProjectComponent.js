import React, { Component } from "react";
import TeamQuestions from "./TeamQuestions";
import ProjectComponentTabs from "./ProjectComponentTabs";
import FeedbackQuestions from "./FeedbackQuestions";

class ProjectComponent extends Component {
  constructor(props) {
    super(props);
    this.setCategoryType = this.setCategoryType.bind(this);
  }

  state = {
    categorytypes: [
      {
        id: 1,
        type: "Team Questions",
      },
      {
        id: 2,
        type: "Feedback",
      },
    ],
    selectedcategorytype: 1,
    selected_project: false,
  };

  setProject(project) {
    this.setState({ selected_project: project });
  }

  setCategoryType(selectedtype) {
    this.setState({ selectedcategorytype: selectedtype });
  }

  render() {
    const disabled = this.props.view_only_mode ?? false;

    if (!this.state.selected_project) {
      return (
        <div>
          <div className="min-h-screen ml-20 mr-20">
            <div className="flex -mx-3 justify-center mt-10 ">
              {" "}
              <h3>Please choose the Hackathon to enter:</h3>
              <br />
              <br />
            </div>

            <div className="flex -mx-3 justify-center my-5">
              {Object.entries(this.props.projects).map(([id, project]) => {
                return (
                  <button
                    className="block bg-indblue text-white p-5 rounded-xl ml-5"
                    key={id}
                    onClick={() => {
                      this.setProject(id);
                    }}
                  >
                    {project.initiative.hackathon} -{" "}
                    {project.initiative.edition}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (this.state.selectedcategorytype === 1) {
      return (
        <>
          <div className="flex justify-between">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="button-active bg-indblue p-5 m-3 text-white rounded-lg w-40 flex"
              onClick={() => this.setProject(null)}
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              <span className="ml-6">Back</span>
            </button>
            <div
              style={{ fontFamily: "Montserrat" }}
              className="bg-indblue text-white p-5 m-3 mr-14 -ml-10 rounded-xl"
            >
              {
                this.props.projects[this.state.selected_project].initiative
                  .hackathon
              }{" "}
              -{" "}
              {
                this.props.projects[this.state.selected_project].initiative
                  .edition
              }
            </div>
            <div className="col-span-4" />
          </div>

          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
            currentTab={this.state.selectedcategorytype}
          />
          <TeamQuestions
            user={this.props.user}
            project={this.props.projects[this.state.selected_project]}
            disabled={disabled}
          />
        </>
      );
    }

    if (this.state.selectedcategorytype === 2) {
      return (
        <>
          <div className="flex justify-between">
            <button
              style={{ fontFamily: "Montserrat" }}
              className="button-active bg-indblue p-5 m-3 text-white rounded-lg w-40 flex"
              onClick={() => this.setProject(null)}
            >
              <svg
                class="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>{" "}
              <span className="ml-6">Back</span>
            </button>
            <div
              style={{ fontFamily: "Montserrat" }}
              className="bg-indblue text-white p-5 m-3 mr-14 -ml-10 rounded-xl"
            >
              {
                this.props.projects[this.state.selected_project].initiative
                  .hackathon
              }{" "}
              -{" "}
              {
                this.props.projects[this.state.selected_project].initiative
                  .edition
              }
            </div>
            <div className="col-span-4" />
          </div>

          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
          />
          <FeedbackQuestions
            user={this.props.user}
            project={this.props.projects[this.state.selected_project]}
            disabled={disabled}
          />
        </>
      );
    } else {
      return (
        <>
          <ProjectComponentTabs
            categorytypes={this.state.categorytypes}
            selectedtype={this.setCategoryType}
          />
        </>
      );
    }
  }
}

export default ProjectComponent;
