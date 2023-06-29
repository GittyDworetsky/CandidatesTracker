import React, { useState, useEffect } from "react";
import axios from "axios";


const Confirmed = () => {

    const [confirmedList, setConfirmedList] = useState([]);
    const [showColumn, setShowColumn] = useState(true);

    useEffect(() => {
        const GetConfirmed = async () => {
            const { data } = await axios.get('/api/CandidatesTracker/getconfirmed');
            setConfirmedList(data);
        }

        GetConfirmed();

    }, []);


    const onToggleColumn = () => {
        setShowColumn(!showColumn);
    };


    return (
        <div>
            <h1>Confirmed</h1>
            <div>
                <button onClick={onToggleColumn} className="btn btn-success">Toggle Notes</button>
                <table className="table table-hover table-striped table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                            {showColumn && <th>Notes</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {confirmedList.map(i => {
                           return <tr>
                                <td>{i.firstName}</td>
                                <td>{i.lastName}</td>
                                <td>{i.phoneNumber}</td>
                                <td>{i.email}</td>
                                {showColumn && <td>{i.notes}</td>}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )

}

export default Confirmed;