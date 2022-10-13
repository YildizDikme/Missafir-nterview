import React from 'react';

const initialValue = [];

export const DataContext = React.createContext();
export const useData = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
    const [data, setData] = React.useState(initialValue);

    return (
        <DataContext.Provider value={{
            data,
            setData
        }}>
            {children}
        </DataContext.Provider>
    )   
}

export default DataProvider