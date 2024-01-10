// Bài 4
fetch('https://datausa.io/api/data?drilldowns=Nation&measures=Population')

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {

        const Population = document.getElementById('Population');
        data.data.forEach(({
                               'ID Nation': IDNation,
                               'Nation': Nation,
                               'ID Year': IDYear,
                               'Population': population,
                               ...rest
                           }) => {
            console.log('Rest:', rest); // sử dụng phần tử rest
            console.log(data);
            let listItem = `
                <td>${IDNation}</td>
                <td>${Nation}</td>
                <td>${IDYear}</td>
                <td>${population}</td>
               
            `;

            Population.innerHTML += listItem;
        });
    })
    .catch(error => console.error(error));


fetch('https://65929f4fbb129707198fe18e.mockapi.io/tinhpv10/students')

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const students = document.getElementById('students');
        data.forEach(({'id': id, 'avatar': avatar, 'name': name, 'createdAt': createdAt, ...rest}) => {
            console.log('Rest:', rest); // sử dụng phần tử rest

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

