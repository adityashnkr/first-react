
import React from "react";


class AddContact extends React.Component {
    state = {
        name: "",
        email: "",
    };
    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.email === "") {
          alert("ALl the fields are mandatory!");
          return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"",email:""});
    };
    render() {
        return (
            <div className="container">
                <h2>Add Contact</h2>
                <form className="form" onSubmit={this.add}>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input type="text" 
                        name="name" 
                        placeholder="Name" 
                        className="form-control" 
                        value={this.state.name}
                        onChange={ (e) => this.setState({name: e.target.value})} 
                        ></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input 
                        type="text" 
                        name="email" 
                        placeholder="Email" 
                        className="form-control"
                        value={this.state.email}
                        onChange={ (e) => this.setState({email: e.target.value})} 
                        ></input>
                    </div>
                    <button className = "btn btn-primary">Add</button>
                </form>
            </div>
            );
    }
    }

export default AddContact;