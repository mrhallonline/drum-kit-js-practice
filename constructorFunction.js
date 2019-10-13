
function HouseKeeper (name, yearsOfExperience, cleaningRepertoire) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRepertoire = cleaningRepertoire;
    this.cleaning = function() {
        alert("About to start cleaning!");
    
    }
}

var houseKeeper6 = new HouseKeeper("Anne", 7, ["bathroom", "lobby", "bedroom"])