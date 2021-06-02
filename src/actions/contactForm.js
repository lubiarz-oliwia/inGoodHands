


export const addContactFormInfo = (data) => (
    fetch(`https://fer-api.coderslab.pl/v1/portfolio/contact`, {
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