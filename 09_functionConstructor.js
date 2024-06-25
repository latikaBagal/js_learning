function player(fullname,totalRuns){
    this.fullname=fullname;
    this.totalRuns=totalRuns;
}
const kohali=new player("Virat Kohli",47000);

const rohit=new player("Rohit Sharma",30000);

const rishabh=new player("Rishabh Pant",50000);

const shami=new player("Mohammad Shami",1000);

player.prototype.country="India";

console.log(`${kohali.fullname},${kohali.totalRuns},${kohali.country}`);

console.log(`${rohit.fullname},${rohit.totalRuns},${rohit.country}`);

console.log(`${rishabh.fullname},${rishabh.totalRuns},${rishabh.country}`);

console.log(`${shami.fullname},${shami.totalRuns},${shami.country}`);

