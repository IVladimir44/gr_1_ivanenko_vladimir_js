const requestURL = 'https://jsonplaceholder.typicode.com/users';
async function fetchUsers() {
    const response = await fetch(requestURL);
    const users = await response.json();
    return users;
};


(async () => {
    const users = await fetchUsers();

    const usersWrapper = document.createElement('div');
    console.log(users)
    document.body.append(usersWrapper);

    users.forEach(user => {
        const userItem = document.createElement('div');

        userItem.classList.add('user_card');

        const userName = document.createElement('span')
        const userUserName = document.createElement('span')
        const userPhone = document.createElement('span')
        const userEmail = document.createElement('span')
        const userWebsite = document.createElement('span')
        const userId = document.createElement('span')
        const userAddress = document.createElement('span')
        const userCompany = document.createElement('span')

        const buttonDelete = document.createElement('button')
        const buttonInformation = document.createElement('button')

        buttonDelete.innerHTML = 'Delete';
        buttonInformation.innerHTML = 'Information';

        userItem.append(buttonDelete);
        userItem.append(buttonInformation);

        buttonDelete.onclick = function () {
            userItem.remove();
        }
        buttonInformation.onclick = function () {
            alert('Information...');
        }

        userName.style.fontSize = '22px';

        userName.innerHTML = user.name;
        userItem.append(userName);

        userUserName.innerHTML = 'Username: ' + user.username;
        userItem.append(userUserName);

        userPhone.innerHTML = 'Phone: ' + user.phone;
        userItem.append(userPhone);

        userEmail.innerHTML = 'Email: ' + user.email;
        userItem.append(userEmail);

        userWebsite.innerHTML = 'Website: ' + user.website;
        userItem.append(userWebsite);

        userId.innerHTML = 'ID: ' + user.id;
        userItem.append(userId);

        userAddress.innerHTML = 'Address: ' + user.address.street + ' ' + user.address.suite + ' ' + user.address.city + ' ' + user.address.geo.lat + ' ' + user.address.geo.lng + ' ' + user.address.zipcode;
        userItem.append(userAddress);

        userCompany.innerHTML = 'Company: ' + user.company.name + ' ' + user.company.bs + ' ' + user.company.catchPhrase;
        userItem.append(userCompany);
        usersWrapper.append(userItem);
    });
})();