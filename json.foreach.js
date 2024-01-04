var resume = [
    { Name: "Udhaya sankar" },
    { Course: "B.tech" },
    { Fathername: "Karunanithi" },
    { mothername: "Navamani" },
    { age: 22 },
    { District: "Ranipet" }
  ];
  
  resume.forEach(function(item) {
    for (var key in item) {
      console.log(key, item[key]);
    }
  });