class People {
           city: string = "Barrnquilla";
 protected country: string = "Colombia";
 private   addres: string = "Cra 55 # 82 - 65";

  helloWorld():void {
          console.log("Hello World");
  }
}
 class Person extends People   {
  constructor(private id:number, private name:string, private dept:string){
    super();
    this.showFiles();
  }
  //metodos
  private showFiles(): void{
   console.log(`${this.id}  ${this.name} ${this.dept} ${this.city} ${this.country}`);
  }
 }

 const personOne = new Person(15, "jesus", "Atlantico");


