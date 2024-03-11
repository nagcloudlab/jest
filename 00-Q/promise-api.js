
// ----------------------------------------------
//  trainer
// ----------------------------------------------

const trainer = {
    getTopic() {
        const executor = (resolve, reject) => {
            setTimeout(() => {
                const topic = "JEST"

                console.log("TRAINER : resolved promise");
                resolve(topic); // push

                // console.log("TRAINER : rejected promise");
                // reject("No topic available"); // push

            }, 3000);
        }
        const promise = new Promise(executor);
        return promise;
    }
}


// ----------------------------------------------
// ai Tools
// ----------------------------------------------

const aiTool = {
    getTopic(topic) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log("AI TOOLS: resolved promise");
                const enrichedTopic = topic + " with AI";
                resolve(enrichedTopic);
            }, 3000);
        });
    }
}

// ----------------------------------------------
// employee
// ----------------------------------------------

// problems with deep nested callbacks

// 1. callback hell
// 2. error handling
// 3. code maintainability
// 4. code readability
// 5. code reusability

//------------------------------------------------


const employee = {
    doLearnV1() {
        console.log("EMPLOYEE: started learning");
        const promise = trainer.getTopic();
        console.log("EMPLOYEE: got promise, defer learning");
        // by callbacks
        promise
            .then(topic => {
                console.log("EMPLOYEE: learning - " + topic);
                const promise = aiTool.getTopic(topic)
                promise
                    .then(enrichedTopic => {
                        console.log("EMPLOYEE: learning - " + enrichedTopic);
                    })
                    .catch(err => {
                        console.log("EMPLOYEE: learning failed - " + err);
                    })
            })
            .catch(err => {
                console.log("EMPLOYEE: learning failed - " + err);
            })
    },
    async doLearnV2() {
        console.log("EMPLOYEE: started learning");
        try {
            const topic = await trainer.getTopic();
            console.log("EMPLOYEE: learning - " + topic);
            const enrichedTopic = await aiTool.getTopic(topic);
            console.log("EMPLOYEE: learning - " + enrichedTopic);
        } catch (err) {
            console.log("EMPLOYEE: learning failed - " + err);
        }
    },
    doWork() {
        this.doLearnV2()
        console.log("EMPLOYEE: with other work");
    }
}

// employee.doWork();


// ----------------------------------------------

// fetch top5 todos from jsonplaceholder

// ----------------------------------------------

async function getTop5Todos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5');
        const todos = await response.json();
        console.log(todos);
    }
    catch (err) {
        console.log(err);
    }
}
getTop5Todos();
console.log("loading todos...");

// ----------------------------------------------
