import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { fetchUsers } from "../actions/userActions";
import UserList from "./UserList";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.timeout = null;
    }

    componentWillReceiveProps(nextProps) {
        if(!nextProps.fetching) {
            clearTimeout(this.timeout);
            this.startPoll();
        }
    }
    componentDidMount() {
        this.props.fetchUsers();
    }
    componentWillUnmount() {
        clearTimeout(this.timeout);
    }
    startPoll() {
        this.timeout = setTimeout(() => this.props.fetchUsers(), 5000);
    }

    render() {
        if (this.props.error != null) {
            return <p>Error x(</p>
        }

        if (!this.props.fetched) {
            return <p>Loading...</p>
        }

        return (
            <div>
                <UserList users={this.props.users} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users:   state.user.users,
        fetched: state.user.fetched,
        error:   state.user.error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);