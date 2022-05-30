function solve(input){
    if(input.dizziness == true){
        input.levelOfHydrated += input.experience * input.weight * 0.1;
        input.dizziness = false;
    }

    return input;
}

console.log(solve({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true }
  ));

  console.log(solve({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true }
  ));

  console.log(solve({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }
  ));
