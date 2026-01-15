import React, { useState } from 'react'

const Pagination = () => {
    const users = [
        { id: 1, name: "Amit", role: "Student" },
        { id: 2, name: "Neha", role: "Developer" },
        { id: 3, name: "Rahul", role: "Designer" },
        { id: 4, name: "Priya", role: "Manager" },
        { id: 5, name: "Karan", role: "Student" },
        { id: 6, name: "Sneha", role: "HR" },
        { id: 7, name: "Vikas", role: "Admin" },
        { id: 8, name: "Anjali", role: "Student" },
        { id: 9, name: "Rohit", role: "Developer" },
        { id: 10, name: "Pooja", role: "Designer" },
        { id: 11, name: "Amit", role: "Student" },
        { id: 12, name: "Neha", role: "Developer" },
        { id: 13, name: "Rahul", role: "Designer" },
        { id: 14, name: "Priya", role: "Manager" },
        { id: 15, name: "Karan", role: "Student" },
        { id: 16, name: "Sneha", role: "HR" },
        { id: 17, name: "Vikas", role: "Admin" },
        { id: 18, name: "Anjali", role: "Student" },
        { id: 19, name: "Rohit", role: "Developer" },
        { id: 20, name: "Pooja", role: "Designer" },
    ];

    const [currentPage, setCurrentPage] = useState(1);
    const totalperPage = 5;
    const totalPage = Math.ceil(users.length / totalperPage);

    const startIndex = (currentPage - 1) * totalperPage;
    const currentData = users.slice(startIndex, startIndex + totalperPage);

    return (
        <div>
            <div className='flex flex-row gap-[30px'>
                <p>ID</p>
                <p>Name</p>
                <p>Role</p>
            </div>

            {currentData.map((user) => (
                <div className='flex flex-roe gap-[30px]'>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.role}</p>
                </div>

            ))}


            <div className='flex gpa-[40px]'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>prev</button>

                {Array.from({ length: totalPage }, (_, index) => (
                    <button key={index} className={currentPage === index + 1 ? 'bg-red-500 text-white' : ''} onClick={() => setCurrentPage(index + 1)}>{index + 1}</button>
                ))}

                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPage}>next</button>
            </div>


        </div>
    );
}

export default Pagination
