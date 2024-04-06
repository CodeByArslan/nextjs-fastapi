'use client'

import { useState } from 'react';

 function FormN() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = async () => {
        

        const response = await fetch('/api', {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email })
        });

        if (response.ok) {
            console.log('User created successfully');
            // Optionally, you can redirect the user to another page
        } else {
            console.error('Failed to create user');
        }
    };

    function showAlert() {
        alert("Submitted successfully");
      }
      

    return (




        



        

<form className="max-w-sm mx-auto mt-32" onSubmit={handleSubmit}>
    
     <div className="mb-5">
    <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" onChange={(e) => setName(e.target.value)} required />
  </div>
  <div className="mb-5">
    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
    <input type="email" id='email'  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.com" onChange={(e) => setEmail(e.target.value)}
     required />
  </div>
 
  <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
       
       required />
    </div>
    <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
  </div>
  <button onClick={showAlert} type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
  </button>
</form>











       
    );
}

export default FormN;
