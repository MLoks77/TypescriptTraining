export class Point {
    constructor (private abs: number, private ord: number){
    }
    //get et set

    public get _abs(): number {
        return this.abs;
    }
    public set _abs(value: number) {
        this.abs = value;
    }

    public get _ord(): number {
        return this.ord;
    }
    public set _ord(value: number) {
        this.ord = value;
    }
    // fonction calcul distance
    calculerDistance(p:Point):number{
        return Math.sqrt(Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2));
    }
    // ex4 méthode statique
    static distance(x1: number, y1: number, x2: number, y2: number){
        return Math.sqrt(Math.pow(x1-x2,2)+Math.pow(y1-y2,2));
    }
    // ex5 fonction calculerMilieu
    calculerMilieu(p: Point): Point {
        return new Point((this._abs + p._abs) / 2, (this._ord + p._ord) / 2);
    }

    afficher(): string {
        return `(${this._abs}, ${this._ord})`;
      }
}
//6
export class TroisPoints {
    constructor (private premier: Point,private deuxieme: Point, private troisieme: Point){
    }
        public get _premier(): Point {
            return this.premier;
        }
        public set _premier(value: Point) {
            this.premier = value;
        }
    
        public get _deuxieme(): Point {
            return this.deuxieme;
        }
        public set _deuxieme(value: Point) {
            this.deuxieme = value;
        }

        public get _troisieme(): Point {
            return this.troisieme;
        }
        public set _troisieme(value: Point) {
            this.troisieme = value;
        }

        TesterAlignement(): boolean {
            const AB = this.premier.calculerDistance(this.deuxieme);
            const AC = this.premier.calculerDistance(this.troisieme);
            const BC = this.deuxieme.calculerDistance(this.troisieme);
            if (AB === AC + BC || AC === AB + BC || BC === AC + AB) {
                return true;
            } else
            return false;
        }

        //exo8
        estIsocele(): boolean {
            const AB = this.premier.calculerDistance(this.deuxieme);
            const AC = this.premier.calculerDistance(this.troisieme);
            const BC = this.premier.calculerDistance(this.troisieme);
            if (AB === AC || AB === BC || AC === BC){
                return true;
            } else
            return false;
        }
}