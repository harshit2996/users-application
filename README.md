# Documentation

## Repository Details
- cashfree-react - contains react application to view Users Data
- dropdown - contains implementation of dropdown menu component

## Cashfree-React Application Installation Instructions
1. Clone or download and extract the repository and navigate to the cashfree-react directory
2. Run ```npm install``` to install the dependencies.
3. Run ```npm start``` to run the application on localhost server

## Application Details
- Packages / Dependencies and UI framework used
  - axios
  - Ant Design Framework
- Routes 
  - ```GET '/' - Displays the list of all users fetched from  'https://jsonplaceholder.typicode.com/users' ```
  - ```GET '/user/:id' - Displays the details of user with id as 'id' fetched from  'https://jsonplaceholder.typicode.com/users/:id' ```
- Functionalities
  -  Click on Open button to View the Details of the particular user in the row
  - Click delete to remove the particular user from the table