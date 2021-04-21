import { Astronaut } from './Astronaut';
import { Cargo } from './Cargo';
import { Payload } from './Payload';


export class Rocket implements Payload {
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    massKg: number;
    constructor(name: string,totalCapacityKg: number) {
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass( items: Payload[] ): number {
        let sum: number = 0;
        for (let i=0; i< items.length; i++){
            sum += items[i].massKg;
        }
        return sum;
    }

    currentMassKg(): number {
        return this.massKg;
    }

    canAdd(item: Payload): boolean {
        if ( this.currentMassKg() + item.massKg <= this.totalCapacityKg) {
            return true;
        }
    }

    addCargo(cargo: Cargo): boolean {
        if(!this.canAdd){
          return false;
        } 
        return true;
    }

    addAstronaut(astronaut: Astronaut): boolean {
        if(!this.canAdd){
            return false;
        } 
        return true;
    }

}