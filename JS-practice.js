const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];

  console.log(inventors);
  console.log(people);
  //Array.prototype.filter();
  //making table of people who were born in 1800's
  const eighteen = inventors.filter(function(inventors){
      if(inventors.year>= 1800 && inventors.year<1900){
          return true;
      }
  });
  console.table(eighteen);

  //Arrar.prototype.map();
  //making an array of inventor's full names
  const fullNames = inventors.map(inventors => inventors.first + ' ' + inventors.last);
  console.log(fullNames);

  //Array.prototype.sort();
  //sorting inventors on basis of age
  const ordered = inventors.sort((a, b) => a.year>b.year? 1:-1)
  console.table(ordered);

  //Array.prototype.reduce();
  //total number of years inventors lived
  const totalYears = inventors.reduce((total, inventors) =>{
      return total + (inventors.passed - inventors.year);
  } , 0)
  console.log(totalYears);

  //array.sort();
  //based on years they lived
  const ageOrdered = inventors.sort((a, b) => (a.passed - a.year)>(b.passed-b.year)? -1:1);
  console.table(ageOrdered);

  //go to link
  //sorted places containing word de
  const category = Array.from(document.querySelectorAll(".mw-category a"));
const res = category.map(category => category.textContent);
const resp = res.filter(streetName => streetName.includes('de'));   
console.log(resp);

  //sorting people on basis of last names
  const alpha = people.sort(function(lastOne, nextOne){
      const [aLast, aFirst] = lastOne.split(', ');
      const [bLast, bFirst] = nextOne.split(', ');
      if(aLast > bLast){
          return 1;
      }
      else{return -1;}
  })
  console.log(alpha);

  //using reduce to get number of repition
  const data = ['car', 'walk', 'car', 'truck', 'truck', 'car', 'bike', 'walk', 'walk'];
  const transport = data.reduce(function(obj, item){
      if(!obj[item]){
          obj[item]=0;
      }
      obj[item]++;
      return obj;
  }, {});
  console.log(transport);