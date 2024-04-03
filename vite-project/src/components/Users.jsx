import React, { useState, useEffect } from "react";
import User from "./User";

export default function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();
            setUsers(data.users);
            console.log(data);
        };

        fetchData(); // Call the fetchData function to make the API call
    }, []);

    useEffect(() => {
        console.log(users);
    }, [users]);

    return (
        <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            minHeight: '100vh', // Adjust as needed
            padding: '20px' // Add padding to the container
        }}>
            {users.map((user) => (
                <div 
                    key={user.id} 
                    style={{ 
                        flex: '0 0 calc(33.33% - 40px)', // Adjusted width to 33.33% with padding subtracted
                        margin: '20px', // Increased margin for spacing
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <User 
                        image={user.image} 
                        firstName={user.firstName} 
                        age={user.age} 
                        address={user.address} 
                        email={user.email}
                    />
                </div>
            ))}
        </div>
    );
}
