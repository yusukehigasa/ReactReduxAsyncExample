import React from "react";
import ReactDOM from "react-dom";

export default class UserList extends React.Component {
    render() {
        return (
            <table className="tbl">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.users.map((user) => (
                        <tr key={ user.id }>
                            <td>{ user.id }</td>
                            <td>{ user.first_name }</td>
                            <td>{ user.last_name }</td>
                            <td>{ user.gender == 1 ? "Man" : "Woman" }</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}