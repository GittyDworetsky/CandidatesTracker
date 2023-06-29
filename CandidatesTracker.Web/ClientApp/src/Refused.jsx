import React, { useState, useEffect } from "react";
import axios from "axios";


const Refused = () => {

    const [refusedList, setRefusedList] = useState([]);
    const [showColumn, setShowColumn] = useState(true);

    useEffect(() => {
        const GetRefused = async () => {
            const { data } = await axios.get('/api/CandidatesTracker/getrefused');
            setRefusedList(data);
        }

        GetRefused();

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
                        {refusedList.map(i => {
                            <tr>
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

export default Refused;