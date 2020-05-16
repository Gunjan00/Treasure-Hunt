import { Injectable } from "@angular/core";

export interface DataItem {
    id: number;
    name: string;
    description: string;
   
}

@Injectable({
    providedIn: "root"
})
export class DataService {

    private items = new Array<DataItem>(
        {
            id: 1,
            name: "Clue I",
            description: "The only city in the world, where the «M» of the famous McDonalds logo is not written in yellow – but with white. "
            
        },
        {
            id: 2,
            name: "Clue II",
            description: "The most expensive city of the world"
            
        },
        {
            id: 3,
            name: "Clue III",
            description: "The longest street network in the world, exceeding 10,000 kms."
            
        },
        {
            id: 4,
            name: "Clue IV",
            description: "The city which has the most number of Rolls Royce cars per resident in the world"
            
        },
        {
            id: 5,
            name: "Clue V",
            description: "The most densely populated city in the world"
            
        },
        {
            id: 6,
            name: "Clue VI",
            description: "221B BAKER STREET"
            
        },
        {
            id: 7,
            name: "Clue VII",
            description: "Home to Africa’s only subway (City)"
            
        },
        {
            id: 8,
            name: "Clue VIII",
            description: "If you’re traveling with a child in a stroller, buses in this city are free of charge. P.S. Also a Money Heist character"
            
        },
        {
            id: 9,
            name: "Clue IX",
            description: "There have been 5 major city-wide riots over the sport-hockey in the past 60 years! Guess this city.",
            
        },
        {
            id: 10,
            name: "Clue X",
            description: "This city has more bicycles than people. ",
            
        },
        {
            id: 11,
            name: "Clue XI",
            description: "Has the oldest zoo in the world!!",
            
            
        },
        {
            id: 12,
            name: "Clue XII",
            description: "City was built on a soft lake bed,it is sinking at a rate of 10cm per year",
            
        },
        {
            id: 13,
            name: "Clue XIII",
            description: "This city has a museum dedicated to our favourite... Pasta!!",
            
        },
        {
            id: 14,
            name: "Clue XIV",
            description: "First place in Europe to have traffic lights..",
            
        },
        {
            id: 15,
            name: "Clue XV",
            description: "World's second most bird rich capital city!",
            
        },
        {
            id: 16,
            name: "Clue XVI",
            description: "World's second most bird rich capital city!",
            
        }


    );

    getItems(): Array<DataItem> {
        return this.items;
    }

    getItem(id: number): DataItem {
        return this.items.filter((item) => item.id === id)[0];
    }


   
   
}
