var Etudiant = /** @class */ (function () {
    function Etudiant(nom, notes) {
        this.nom = nom;
        this.notes = notes;
    }
    Object.defineProperty(Etudiant.prototype, "Nom", {
        get: function () {
            return this.nom;
        },
        set: function (nouveauNom) {
            this.nom = nouveauNom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Etudiant.prototype, "Notes", {
        get: function () {
            return this.notes;
        },
        set: function (nouvellesNotes) {
            this.notes = nouvellesNotes;
        },
        enumerable: false,
        configurable: true
    });
    Etudiant.prototype.calculerMoyenne = function () {
        var somme = 0;
        for (var i = 0; i < this.notes.length; i++) {
            somme += this.notes[i];
        }
        return somme / this.notes.length;
    };
    Etudiant.prototype.trouverMax = function () {
        return Math.max.apply(Math, this.notes);
    };
    Etudiant.prototype.trouverMin = function () {
        return Math.min.apply(Math, this.notes);
    };
    return Etudiant;
}());
var etudiant = new Etudiant("Ali", [15, 20, 10, 5, 3]);
console.log("Moyenne = " + etudiant.calculerMoyenne());
console.log("Max = " + etudiant.trouverMax());
console.log("Max = " + etudiant.trouverMin());
