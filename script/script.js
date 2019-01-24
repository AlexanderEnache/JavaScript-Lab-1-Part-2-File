
let Play = false;

let Name;

let playerHealth = 40;
let cpuHealth    = 10;

let playerWins = 0;

let Damage = 0;




startGame();						//Start game//////////////////




function startGame(Play = prompt("Do you wanna play??")){

if(Play.toLowerCase() != "yes"){
	
	console.log("Ok, bye Felicia");
	return;
	
}
	
	Name = prompt("Enter your name");
	
	startCombat();	
	
}

function startCombat(){				//Start combat////////////////
		
	while(playerHealth >= 0){
		
		Damage = getDamage();
		
			if(Damage < 0){
				break;				
			}
		
		cpuHealth = cpuHealth - Damage;
		console.log("You, " + Name + " just dealt " + Damage + " on The Almighty Grant!!!   He has " + (cpuHealth >= 0 ? cpuHealth : 0) + " remaining");
		
			if(cpuHealth <= 0){
				playerWins++;
				cpuHealth = 10;
				if(playerWins == 3){
					console.log("YOU ARE VICTORIOUS!!!");
				}
				break;
			}
		
		Damage = getDamage();
		
			if(Damage < 0){
				break;				
			}
		
		playerHealth = playerHealth - Damage;
		console.log("The Almighty Grant just dealt " + Damage + " on you!!!  You have " + (playerHealth >= 0 ? playerHealth : 0) + " health remaining");
		
		if(playerHealth <= 0){
			console.log("YOU HAVE BEEN DEFEATED!!!");
			break;
		}	
		
	}
	
}

function getDamage(){
	
	if(prompt("Do you wanna attack or flee").toLowerCase() == "attack"){
		
		return Math.floor(Math.random()*5 + 1);
		
	}else{
		
		console.log("You have fleed the battle!!!");
		return -1;
		
	}

	
}


	
	
	