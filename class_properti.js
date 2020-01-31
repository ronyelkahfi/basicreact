class Human{
	constructor (){
		this.gender = "-";
	}

	setGender(gender){
		this.gender = gender;
	}

	showGender(){
		console.log(this.gender);
	}
}

class Person extends Human{
	constructor(){
		super();
		this.name = "-";
	}

	setName(name){
		this.name = name;
	}
}

let person1 = new Person();

person1.setGender("Male");
person1.showGender();
//person.setGender("Male");
//person.showGender();