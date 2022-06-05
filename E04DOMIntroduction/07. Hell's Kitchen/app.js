function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]

   function onClick() {
      const input = JSON.parse(document.querySelector('#inputs textarea').value);
      let bestRestaurantName = '';
      let avgSalary = 0;
      let totalSalary = 0;
      let bestAvgSalary = 0;
      let output = {};

      for (let el of input) {
         let restaurantInfo = el.split(' - ');
         //['PizzaHut', 'Peter 500, George 300, Mark 800']
         let restaurantName = restaurantInfo[0];
         let workersInfo = restaurantInfo[1].split(', ');
         // ['Peter 500', 'George 300', 'Mark 800']

         for (let worker of workersInfo) {
            let [name, salary] = worker.split(' ');
            //['Peter', 500], ['George', 300], ['Mark', 800]
            if (!output.hasOwnProperty(restaurantName)) {
               output[restaurantName] = {};
            }
            if (output.hasOwnProperty(restaurantName)) {
               output[restaurantName][name] = Number(salary);
            }
         }
      }
      let restaurantEntries = Object.entries(output);
      //[['RestaurantName', {WorkerName, Salary}],['RestaurantName', {WorkerName, Salary}]]

      for (let entry of restaurantEntries) {
         let key = entry[0];//restaurant name
         let values = Object.entries(entry[1]);//workers data
         //[['George', 300], ['Mark', 800], ...]

         for (let [workerName, salaryValue] of values) {
            totalSalary += salaryValue;
         }
         avgSalary = totalSalary / values.length;

         if (avgSalary > bestAvgSalary) {
            bestAvgSalary = avgSalary;
            totalSalary = 0;
            bestRestaurantName = key;
         }
      }

      let result = Object.entries(output[bestRestaurantName]).sort((w1, w2) => w2[1] - w1[1]);
      let bestRestWorkerInfo = '';

      result.forEach(w => bestRestWorkerInfo += `Name: ${w[0]} With Salary: ${w[1]} `);

      let bestRestaurantOutput = `Name: ${bestRestaurantName} Average Salary: ${bestAvgSalary.toFixed(2)} Best Salary: ${result[0][1].toFixed(2)} `;
      document.querySelector('#bestRestaurant p').textContent = bestRestaurantOutput;
      document.querySelector('#workers p').textContent = bestRestWorkerInfo;

   }
}