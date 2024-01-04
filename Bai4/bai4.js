
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const Population = document.getElementById('Population');
        data.data.forEach(item => {
            let IDNation = item['ID Nation'];
            let Nation = item['Nation'];
            let IDYear = item['ID Year'];
            let population = item['Population'];
            let listItem = `
                <td>${IDNation}</td>
                <td>${Nation}</td>
                <td>${IDYear}</td>
                <td>${population}</td>
            `;

            Population.innerHTML += listItem;
        });
    })
    .catch(function (error) {
        console.log(error);
    });




fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const students = document.getElementById('students');
        data.forEach(item => {
            let id = item['id'];
            let avatar = item['avatar'];
            let name = item['name'];
            let createdAt = item['createdAt'];

            let listItem = `
                <td>${id}</td>
                <td><img src="${avatar}" alt="name" </td>
                <td>${name}</td>
                <td>${createdAt}</td>
               `;

            students.innerHTML += listItem;
        });
    })
    .catch(function (error) {
        console.log(error);
    });