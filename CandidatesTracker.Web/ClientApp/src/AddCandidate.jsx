import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddCandidate = () => {

    const [firstName, SetFirstName] = useState('');
    const [lastName, SetLastName] = useState('');
    const [email, SetEmail] = useState('');
    const [phoneNumber, SetPhoneNumber] = useState(0);
    const [notes, SetNotes] = useState('');

    const nav = useNavigate();

    const onSubmitClick = async () => {
        await axios.post('/api/CandidatesTracker/add',  { firstName, lastName, email, phoneNumber, notes, status: "Pending" } );
        nav('/');
    }

    return (

        <>
            <div className="row" style={{ marginTop: 20 }}>
                <div className="col-md-6 offset-md-3">
                    <div className="card card-body bg-light">
                        <h4>Add Candidate</h4>
                        <form>
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="form-control"
                                onChange={e => SetFirstName(e.target.value)}
                            />
                            <br />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="form-control"
                                onChange={e => SetLastName(e.target.value)}

                            />
                            <br />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form-control"
                                onChange={e => SetEmail(e.target.value)}

                            />
                            <br />
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder="Phone Number"
                                className="form-control"
                                onChange={e => SetPhoneNumber(e.target.value)}

                            />
                            <br />
                            <textarea
                                rows={5}
                                className="form-control"
                                name="notes"
                                defaultValue={""}
                                onChange={e => SetNotes(e.target.value)}

                            />
                            <br />
                            <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddCandidate;
