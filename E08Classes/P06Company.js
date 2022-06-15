class Company {
    constructor() {
        this.departments = new Map();
    }

    addEmployee(name, salary, position, department) {
        if (!name || !salary || salary < 0 || !position || !department) {
            throw new Error("Invalid input!");
        }

        let employee = {name, 
            salary, 
            position, 
            department 
        };

        if (this.departments.has(department)) {
            this.departments.get(department).push(employee);
        } else {
            this.departments.set(department, [employee]);
        }

        return `New employee is hired. Name: ${name}. Position: ${position}`;
    }

    bestDepartment() {
        let totalSalary = (department) => {
            let totalSalary = department[1].reduce((all, s) => { return all += s.salary }, 0);
            let avgSalary = (totalSalary / department[1].length).toFixed(2);
            department.push(avgSalary);
            return avgSalary;
        };

        let bestDepartment = [...this.departments].sort((el1, el2) => totalSalary(el2) - totalSalary(el1))[0];
        let sortedByName = bestDepartment[1].sort((el1, el2) => el2.salary - el1.salary || el1.name.localeCompare(el2.name));

        let finalResult = `Best Department is: ${bestDepartment.shift()}\n`;
        finalResult += `Average salary: ${bestDepartment.pop()}\n`;
        sortedByName.forEach(el => finalResult += `${el.name} ${el.salary} ${el.position}\n`);

        return finalResult.trim();
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
