import React from "react";


class CreateTechnicianForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            employeeNumber: '',
        }

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmployeeNumberChange =this.handleEmployeeNumberChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) {
        event.preventDefault();
        const data = {...this.state};
        data.employee_number = data.employeeNumber;
        delete data.employeeNumber;

        const technicianUrl = `http://localhost:8080/api/technicians/`;
        const fetchConfig = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        };
        const response = await fetch(technicianUrl, fetchConfig);
        if (response.ok) {
            const newTechnician = await response.json();
             console.log(newTechnician)


            const cleared = {
                name: '',
                employeeNumber: '',
            }
            this.setState(cleared)

        }
    }

    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
    }
    handleEmployeeNumberChange(event) {
        const value = event.target.value;
        this.setState({employeeNumber: value})
    }

    render() {
        return(
            <div className="row">
            <div className="offset-3 col-6">
              <div className="shadow p-4 mt-4">
                <h1>Create a technician</h1>
                <form onSubmit={this.handleSubmit} id="create-presentation-form">
                  <div className="form-floating mb-3">
                    <input onChange={this.handleNameChange} value={this.state.name} placeholder="Name" required type="text" id="name" className="form-control" />
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input onChange={this.handleEmployeeNumberChange} value={this.state.employeeNumber} placeholder="Employee Number" required type="text" id="employee_number" className="form-control" />
                    <label htmlFor="employee_number">Employee number</label>
                  </div>
                  <button className="btn btn-primary">Create</button>
                </form>
              </div>
            </div>
          </div>
        );
    }
}
export default CreateTechnicianForm;