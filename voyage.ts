class Sejour {
    constructor(private _name:string, private _price:number){

    }

    set name(_newName:string){
        this._name = _newName;
    }
    get name():string{
        return this._name;
    }

    set price(_newPrice:number){
        this._price = _newPrice;
    }
    get price():number{
        return this._price;
    }
}

class SejourService{
    private sejours:Sejour[];
    constructor(){
        this.sejours= new Array(0);
        this.sejours.push(new Sejour('Paris', 500));
        this.sejours.push(new Sejour('Londres', 600));
        this.sejours.push(new Sejour('Nice', 300));
    }
    searchByName(_name:string):Sejour | void{

        for (const sejour of this.sejours) {
            if (_name === sejour.name){
                return sejour;
                }
        }
/* Attention code suivant ne retourne pas depuis searchByName
                this.sejours.forEach((sejour) => {
                    console.log(sejour)
                    console.log(sejour.name);
                    console.log(_name)
                    if (_name === sejour.name){
                        return sejour;
                        }
            });*/
            try {
                throw new Error(`Séjour \'${_name}\' non trouvé.`);
            }catch(e) {
                console.log(e);
        }
    }
}

let sejourService = new SejourService;
console.log(sejourService.searchByName('Paris'));
console.log(sejourService.searchByName('Londres'));
console.log(sejourService.searchByName('Nantes'));
console.log(sejourService.searchByName('Nice'));


