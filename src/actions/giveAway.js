export const giveAwayThing = (data) => (
    fetch(`http://localhost:3000/contactForm`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify(data),
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err))
);