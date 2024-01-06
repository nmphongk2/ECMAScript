// Bài 2
let sayHello = (name, age) => {
    return `Toi La: ${name}. Tuoi: ${age}`
}
console.log(sayHello('Minh', 18))
console.log(sayHello('Phong', 21))

// Bài 3
fetch('http://universities.hipolabs.com/search?country=viet+nam')

    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        const universities = document.getElementById('universities');
        data.forEach(item => {

            let ten = item['name'];
            let domains = item['domains'];
            let country = item['country'];
            let listItem = `
                
                <td>${ten}</td>
              <td><a href="${domains}">${domains}</a></td>
                <td>${country}</td>
            `;

            universities.innerHTML += listItem;
        });
    })
    .catch(function (error) {
        console.error("Phần tử'universities' ở Bài 3");
       
    });

// Bài 4
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
        console.error("Phần tử'Population' ở Bài 4");
       
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

        console.error("Phần tử'Population' ở Bài 4");
    });

