// Add your code here
function submitData(userName, userEmail) {
    const hostURL = "http://localhost:3000/users";
    const userData = {name: userName, email: userEmail};
    const configurationObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(userData)
    };
    
    return fetch(hostURL, configurationObj)
        .then (response => response.json())
        .then (object => {
            const div = document.querySelector("div");
            const p = document.createElement("p");
            p.innerHTML = `ID for the new User: ${object.id}`;
            div.appendChild(p);
        })
        .catch (error => {
            const div = document.querySelector("div");
            const p = document.createElement("p");
            p.innerHTML = `Unauthorized Access (Server error: ${error.message})`;
            div.appendChild(p);
        })
}

submitData("Johny", "roadWarrior@aol.com");
