describe('some typescript features', () => {
    describe('declaring typed variables', () => {
        it('implicit variable declaration', () => {
            // when you initialize a variable with a type it is implicitly defined as that type.
            const somestring = 'Tacos';
            expect(somestring).toBe('Tacos');

            const age = 49;

            // if a variable is not defined it is defaulted to any
            let x;
            x = 'tacos';
            x = 38;

            // you can use union types
            let y: string | number;
            y = 'burger';
            y = 28;

        });
        it('typing anonymous objects', () => {
            interface Movie {
                title: string;
                yearReleased: number;
            }

            // Types are capitalized (Interfaces, Classes)
            const theForceAwakens: Movie = {
                title: 'The Force Awakens',
                yearReleased: 2015
            };

            const theLastJedi: Movie = {
                title: 'The Last Jedi',
                yearReleased: 2017
            };

        });
        it('structural typing', () => {
            // structural typing is how Typescript implements duck typing - checking the type to see if it has some properties that match
                        interface VoiceMail {
                           from: string;
                           message: string;
                           answered?: boolean;
                       }
                       function logVoiceMail(call: VoiceMail) {
                           // do something...
                           console.log(`Got a call from ${call.from}  - the message is: ${call.message}`);
                       }

                       const vm1 = {
                           date: 'Today',
                           from: 'Joe',
                           answered: false,
                           message: 'Get your butt to the meeting, you are late!'
                       };

                       const vm2: VoiceMail = {
                           from: 'Joe',
                           message: 'I\'m In!',
                           answered: false
                       };
                       logVoiceMail(vm1);
        });
    });
});

describe('parameters to functions', () => {
    it('you cannot overload functions', () => {
        function formatName(first: string, last: string, mi?: string) {
            let fullName = `${last}, ${first}`;
            if (mi) {
                fullName += ` ${mi}.`;
            }
            return fullName;
        }
        expect(formatName('Han', 'Solo')).toBe('Solo, Han');
        expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

    });

    it('function types', () => {

        type MathOperation = (a: number, b: number) => number;
        let mathOp: MathOperation;

        mathOp = function (a, b) {
            return a + b;
        };
        mathOp = (x, y) => x * y;

        interface Movie {
            title: string;
            director: string;
            yearReleased: number;
            getAge: () => number;
        }

        const thor = {
            title: 'Thor: Ragnorak',
            director: 'Waititi',
            yearReleased: 2017,
            getAge: function() {
                return 23;
            }
        };



    });
});

describe('classes', () => {
    it('creating them', () => {
        class Movie {
            constructor(public title: string, public director: string, public yearReleased: number) {}

            getInfo() {
                return `A movie ${this.title} by ${this.director} in ${this.yearReleased}`;
            }
        }

        const sw = new Movie('A New Hope', 'Lucas', 1977);

        expect(sw.yearReleased).toBe(1977);
        expect(sw.getInfo()).toBe(`A movie A New Hope by Lucas in 1977`);
    });
});

describe('array methods', () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const isAnEvenNumber = (n: number) => n % 2 === 0;
    const double = (n: number) => n * 2;

    it('have a forEach', () => {
        numbers.forEach(n => console.log(n));
    });

    describe('production a new array', () => {
        it('has filter', () => {
            // produces a new array
            const evens = numbers.filter(isAnEvenNumber);
            expect(evens).toEqual([2, 4, 6, 8]);
        });
        it('transforming an array', () => {
            const doubled = numbers.map(n => n * 2);
            const doubledEvens = numbers
                .filter(isAnEvenNumber)
                .map(double);

            expect(doubled).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
            expect(doubledEvens).toEqual([2, 4, 6, 8, 10, 12, 14, 16, 18]);
        });
    });
});
