import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";


const Pending = () => {

    const [pendingList, setPendingList] = useState([]);

    useEffect(() => {
        const GetPending = async () => {
            const { data } = await axios.get('/api/CandidatesTracker/getpending');
            setPendingList(data);
        }

        GetPending();

    }, []);

    return (

        <table className="table table-hover table-striped table-bordered">
            <thead>
                <tr>
                    <th />
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {pendingList.map(i => {
                    <tr>
                        <td>
                            <Link to={`/viewdetails/id=${i.id}`}>View Details</Link>
                        </td>
                        <td>{i.firstName}</td>
                        <td>{i.lastName}</td>
                        <td>{i.phoneNumber}</td>
                        <td>{i.email}</td>
                    </tr>
                })}

               
            </tbody>
        </table>


    )

}

export default Pending;