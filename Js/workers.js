const workers = [
    {name: 'Ivan', salary: 500},
    {name: 'Andrey', salary: 1200},
    {name: 'Olga', salary: 2000}
];

const GetStrongWorkers = workersArr =>{
    const StrongWorkers = [];

    for (let i = 0; i < workersArr.length; i++) {
        const eachWorkers = workersArr[i];

        if (eachWorkers.salary > 1000){
            StrongWorkers.push(eachWorkers.name);
        }
    }

    return StrongWorkers;
}


console.log(GetStrongWorkers(workers))