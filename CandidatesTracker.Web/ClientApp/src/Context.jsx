import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const StatusCountContext = createContext();

const Context = ({ children }) => {
    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const refreshStatusCounts = async () => {
        const { data } = await axios.get('/api/CandidatesTracker/getcounts');
        setPendingCount(data.Pending);
        setConfirmedCount(data.Confirmed);
        setRefusedCount(data.Refused);

    }

    useEffect(() => {
        refreshStatusCounts();
    }, []);

    return (
        <OrderCountContext.Provider value={{pendingCount, confirmedCount, refusedCount, refreshStatusCounts}}>
            {children}
        </OrderCountContext.Provider>
    )

}

const useStatusCounts = () => {
    return useContext(StatusCountContext);
}

export { Context , useStatusCounts };