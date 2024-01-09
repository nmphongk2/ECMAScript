//Bài 1

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dum-keys"]
};

function makelist(arr) {
    const failureItems = [];

    const bai1 = document.getElementById('bai1');
    arr.forEach(item => {

        let success = item['success'];
        let failure = item['failure'];
        let skipped = item['skipped'];
        let listItem = `
            
            <li class="text-success">${item}</li>
          
        `;

        bai1.innerHTML += listItem;

    });

    return failureItems;
}

const failureItems = makelist(result.failure);