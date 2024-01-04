var resume = [
    { Name: "Udhaya sankar" },
    { Course: "B.tech" },
    { Fathername: "Karunanithi" },
    { mothername: "Navamani" },
    { age: 22 },
    { District: "Ranipet" }
  ];
  
  for (var item of resume) {
    for (var key in item) {
      console.log(key, item[key]);
    }
  }
  