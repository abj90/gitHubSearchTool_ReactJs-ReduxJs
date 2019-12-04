import React from "react";
import { Button, Form, FormGroup, Input, Spinner } from "reactstrap";
import { connect } from "react-redux";
import { fetchUserData } from "../../../actions";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import UserCard from "./userDataComponent/userCard";
import "./home.css";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: ""
    };
  }

  onInputChange = event => {
    this.setState({ userName: event.target.value });
  };

  onFormSubmit = event => {
    const { userName } = this.state;
    // in order to avoid refreshing the app by submitting the form
    event.preventDefault();
    this.props.fetchUserData(userName);
  };

  renderUser = () => {
    if (this.props.loading) {
      return (
        <div className="spinner">
          <Spinner type="grow" color="primary" />
        </div>
      );
    } else if (this.props.error) {
      return <div>{this.props.error}</div>;
    }
    return <UserCard userData={this.props.userData} />;
  };

  render() {
    return (
      <section>
        <ParallaxBanner />
        <div className="container py-2">
          {/*wrapper1*/}
          <div className="wrap1">
            <div className="content py-4">
              <h2>
                Check out your GitHub Profile, Repositories and Organizations
              </h2>
            </div>
            <div className="input">
              {/*input form*/}
              <Form onSubmit={this.onFormSubmit} inline>
                <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                  <Input
                    type="text"
                    placeholder="Enter your GitHub user"
                    onChange={this.onInputChange}
                  />
                </FormGroup>
                <Button color="primary">Submit</Button>
              </Form>
            </div>
          </div>
          {/*wrapper2*/}
          <div className="wrap2">{this.renderUser()}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ repos, userData, orgs, loading, error }) => {
  return {
    userData,
    orgs,
    loading,
    error
  };
};

export default connect(mapStateToProps, {
  fetchUserData
})(Home);
