import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from 'axios';

const StatusCountContext = createContext();

const StatusCountContextComponent = ({ children }) => {

    const [pendingCount, setPendingCount] = useState(0);
    const [confirmedCount, setConfirmedCount] = useState(0);
    const [refusedCount, setRefusedCount] = useState(0);

    const refreshStatusCounts = async () => {
        
        const { data } = await axios.get('/api/CandidatesTracker/getcounts');
        const {pending, confirmed, refused } = data;
        setPendingCount(pending);
        setConfirmedCount(confirmed);
        setRefusedCount(refused);

    }

    useEffect(() => {
        refreshStatusCounts();
    }, []);

    const value = {
        pendingCount, 
        confirmedCount, 
        refusedCount, 
        refreshStatusCounts
    }

    return (
        <StatusCountContext.Provider value={value}>
            {children}
        </StatusCountContext.Provider>
    )

}

const useStatusCounts = () => {
    return useContext(StatusCountContext);
}

export { StatusCountContextComponent , useStatusCounts };