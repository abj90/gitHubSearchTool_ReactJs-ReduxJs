import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";

const RepositoryCard = ({ repo }) => {
  return (
    <div className="col-md-3 my-2">
      <Card>
        <CardHeader>{repo.full_name}</CardHeader>
        <CardBody>
          <CardTitle>Name: {repo.name}</CardTitle>
          <CardText>language: {repo.language}</CardText>
          <CardText>Private: {repo.private}</CardText>
          <Button>
            <a
              href={repo.clone_url}
              target={"_blank"}
              style={{ textDecoration: "none", color: "white" }}
            >
              Go to repo
            </a>
          </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default RepositoryCard;
