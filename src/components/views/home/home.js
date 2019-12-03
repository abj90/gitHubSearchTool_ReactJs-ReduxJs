import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { connect } from 'react-redux';
import { updateUserName, fetchUserData, fetchUserRepos} from '../../../actions';

class Home extends React.Component{
    
    constructor(props){
        super(props);
        this.state ={
            userName: ""
        }

    }

    onInputChange =(event)=>{
    
        this.setState({ userName: event.target.value });        
    }

    onFormSubmit =(event)=>{
        const { userName } =this.state;
        // in order to avoid refreshing the app by submitting the form 
        event.preventDefault();
        this.props.fetchUserRepos(userName);
        this.props.fetchUserData(userName);
    }

    render(){
        return(
            <div className="container pt-4" style={{height:"575px"}}>
                <Form onSubmit={this.onFormSubmit} inline>
                    <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                        <Input type="text" placeholder="Enter your GitHub user"
                        onChange={this.onInputChange}
                        />
                    </FormGroup>
                    <Button color="primary">Submit</Button>
                </Form>
            </div>
        )
    }
    
}

const mapStateToProps = ({ repos, userData, orgs }) =>{
    return {
        repos,
        userData,
        orgs,
    }
}

export default connect(
    mapStateToProps,
    {
        fetchUserRepos,
        fetchUserData
    }
) (Home);
