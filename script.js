//your JS code here. If required.
document.addEventListener('DOMContentLoaded', async function() {
    const outputDiv = document.getElementById('output');
    const promises = [];

    for (let i = 1; i <= 5; i++) {
        const promise = new Promise((resolve, reject) => {
            const randomNumber = Math.floor(Math.random() * 10) + 1;
            const shouldReject = Math.random() < 0.5;

            setTimeout(() => {
                if (shouldReject) {
                    reject(`Promise ${i} rejected with error`);
                } else {
                    resolve(randomNumber);
                }
            }, 1000);
        });

        promises.push(promise);
    }

    try {
        const results = await Promise.all(promises);
        results.forEach((result, index) => {
            const p = document.createElement('p');
            p.textContent = `Promise ${index + 1}: ${result}`;
            outputDiv.appendChild(p);
        });
    } catch (error) {
        const p = document.createElement('p');
        p.textContent = error;
        outputDiv.appendChild(p);
    }
});
