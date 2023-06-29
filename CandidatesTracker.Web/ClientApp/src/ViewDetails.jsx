import React, { useState, useEffect } from "react";
import { useStatusCounts } from "./StatusCountContext";
import { useParams } from "react-router";
import axios from "axios";


const ViewDetails = () => {

    const [candidateToView, setCandidateToView] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        notes: '',
        status: ''
    });
    const [displayButton, setDisplayButton] = useState(true);
    const { refreshStatusCounts } = useStatusCounts();
    const {id} = useParams();


    useEffect(() => {
        const GetCandidate = async () => {
            const { data } = await axios.get(`/api/CandidatesTracker/getbyid?id=${id}`);
            setCandidateToView(data);
        }

        GetCandidate();

    }, []);

   

    const onButtonClick = async (status) => {
        await axios.post('/api/CandidatesTracker/UpdateCandidateStatus', { id, status });
        setDisplayButton(false);
        refreshStatusCounts();
    }


    return (
        <div className="row">
            <div className="col-md-6 offset-md-3">
                <div className="card card-body bg-light">
                    <h4>Name: {candidateToView.firstName} {candidateToView.lastName}</h4>
                    <h4>Email: {candidateToView.email}</h4>
                    <h4>Phone: {candidateToView.phoneNumber}</h4>
                    <h4>Status: {candidateToView.status}</h4>
                    <h4>Notes:</h4>
                    <p>{candidateToView.notes}</p>
                    {displayButton && <div>
                        <button onClick={() => onButtonClick('Confirmed')} className="btn btn-primary">Confirm</button>
                        <button  onClick={() => onButtonClick('Refused')} className="btn btn-danger">Refuse</button>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default ViewDetails;