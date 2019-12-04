import React from "react";
import { connect } from "react-redux";
import { fetchUserRepos } from "../../../actions";
import ParallaxBanner from "./parallaxBannerComponent/parallaxBanner";
import RepositoryCard from "./repositoryCard/RepositoryCard";

class ReposList extends React.Component {
  componentDidMount = () => {
    const { userData } = this.props;
    this.props.fetchUserRepos(userData.login);
  };

  render() {
    console.log("commin from repos", this.props.repos);
    return (
      <section>
        <ParallaxBanner />
        <div
          className="container"
          style={{ height: "100%", backgroundColor: "#f5f5f5" }}
        >
          <div className="row">
            {this.props.repos.map(repo => {
              return <RepositoryCard key={repo.id} repo={repo} />;
            })}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = ({ repos, userData }) => {
  return {
    repos,
    userData
  };
};

export default connect(mapStateToProps, {
  fetchUserRepos
})(ReposList);
