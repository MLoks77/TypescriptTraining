class Etudiant {
    private nom: string;
    private notes: number[]; 

    constructor(nom: string, notes: number[]) {
        this.nom = nom;
        this.notes = notes;
    }

    public get Nom(): string {
        return this.nom;
    }

    public set Nom(nouveauNom: string) {
        this.nom = nouveauNom;
    }

    public get Notes(): number[] {
        return this.notes;
    }

    public set Notes(nouvellesNotes: number[]) {
        this.notes = nouvellesNotes;
    }

    public calculerMoyenne(): number {
        let somme = 0;
        for (let i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }
        return somme / this.notes.length;
    }

    public trouverMax(): number {
        return Math.max(...this.notes);
    }

    public trouverMin(): number {
        return Math.min(...this.notes);
    }
}

const etudiant = new Etudiant("Ali", [15, 20, 10, 5, 3]);

console.log(`Moyenne = `+etudiant.calculerMoyenne());
console.log(`Max = ` + etudiant.trouverMax());
console.log(`Max = `+etudiant.trouverMin());