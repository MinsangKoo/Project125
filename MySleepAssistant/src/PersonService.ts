import { Person } from './classes'
import { Injectable } from '@angular/core';
import { time } from './classes';


@Injectable({
    providedIn: 'root'
  })
export class PersonService {
    public person: Person = new Person('A', 0, 'M')

    getPerson() {
        return this.person;
    }

    setName(name:string) {
        this.person.name = name;
    }

    setAge(age:number) {
        this.person.age = age;
    }

    setGender(gender:string) {
        this.person.gender = gender;
    }

    setAvailability(key:string, value1:time, value2:string) {
        this.person.sleep_availability.set(key, [value1,value2]);
    }
}