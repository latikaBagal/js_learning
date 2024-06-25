 console.log("==========================Step 1===================================");
 class Student {
  constructor(name, year, price,color){

        this.name = name;

        this.year = year;

        this.price = price;
       this. color=color;

    }

    details(){

        console.log(`Details:Name ${this.name}, Year ${this.year}, Price ${this.price},Color ${this.color}`);

    }

}

const tataCar = new Student("Tata Nexon", "2017", "700000","White");
tataCar.details();

 const hyundai = new Student("Hyundai i20", "2023", "1500000","Fiery Red");
hyundai.details();

const car = new Student("maruti Swift", "2024", "1200000","Black roof");
car.details();

 const mahindra= new Student("Mahindra xuv300", "2021", "1400000","white");
mahindra.details();


class Collage {

    constructor(collageName, location, department, establish ){

        this.collageName = collageName;

        this.location = location;

        this.department = department;
       this. establish=establish;

    }

    display(){

        console.log(`Collage Details: ${this.collageName},${this.location},${this.department},${this.establish}`);
        
    }

}
console.log("===============================Step 2===============================");
const clgName = new Collage("KBP","Pandharpur", "Computer-Engineering", 2005);
clgName.display();

 const clgLocation = new Collage("New Satara","Solapur", "Civil-Engineering", 2009,);
clgLocation.display();

const clgDept = new Collage("Sweri", "Pandharpur", "Mechanical-Engineering",2000);
clgDept.display();

 const clgYear= new Collage("Shihangd",  "Korti","Electronic-Engineering",2010);
clgYear.display();





