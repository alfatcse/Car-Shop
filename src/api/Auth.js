export const setAuthToken=(user)=>{
    const currentUser={
        email:user.email
    }
    fetch('http://localhost:5006/jwt', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem('genius-token', data.token);
            //navigate(from,{replace:true})
        })
}