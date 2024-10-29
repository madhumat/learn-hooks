import React, { useReducer } from 'react';

// Initial state
const initialState = {
    loading: false,
    data: null,
    error: null,
};

// Reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_INIT':
            return { ...state, loading: true, error: null };
        case 'FETCH_SUCCESS':
            return { loading: false, data: action.payload, error: null };
        case 'FETCH_FAILURE':
            return { loading: false, data: null, error: action.payload };
        default:
            return state;
    }
};

// Fake API function
const fetchFakeData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true; // Change to false to simulate an error
            if (success) {
                resolve({ message: "Data fetched successfully!" });
            } else {
                reject("Error fetching data");
            }
        }, 1000);
    });
};

const DataFetchingComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const fetchData = async () => {
        dispatch({ type: 'FETCH_INIT' }); // Dispatch FETCH_INIT
        try {
            const result = await fetchFakeData(); // Simulate fetching data
            dispatch({ type: 'FETCH_SUCCESS', payload: result }); // Dispatch FETCH_SUCCESS
        } catch (error) {
            dispatch({ type: 'FETCH_FAILURE', payload: error }); // Dispatch FETCH_FAILURE
        }
    };

    return (
        <div>
            <button onClick={fetchData}>Fetch Data</button>
            {state.loading && <p>Loading...</p>}
            {state.error && <p>Error: {state.error}</p>}
            {state.data && <p>{state.data.message}</p>}
        </div>
    );
};

export default DataFetchingComponent;
