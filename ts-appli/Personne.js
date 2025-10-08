var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, adresse) {
        this.nom = nom;
        this.prenom = prenom;
        this.adresse = adresse;
    }
    Object.defineProperty(Personne.prototype, "Nom", {
        get: function () {
            return this.nom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "Prenom", {
        get: function () {
            return this.Prenom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "Adresse", {
        get: function () {
            return this.adresse;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Personne.prototype, "FullInfos", {
        get: function () {
            return "".concat(this.nom, " ").concat(this.prenom, ", ").concat(this.adresse.FullAdresse);
        },
        enumerable: false,
        configurable: true
    });
    return Personne;
}());
var Enseignant = /** @class */ (function (_super) {
    __extends(Enseignant, _super);
    function Enseignant(nom, prenom, adresse, specialite, statut) {
        var _this = _super.call(this, nom, prenom, adresse) || this;
        _this.specialite = specialite;
        _this.statut = statut;
        return _this;
    }
    Object.defineProperty(Enseignant.prototype, "Specialite", {
        get: function () {
            return this.specialite;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enseignant.prototype, "Statut", {
        get: function () {
            return this.statut;
        },
        set: function (stat) {
            this.statut = stat;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enseignant.prototype, "Spec", {
        set: function (spec) {
            this.specialite = spec;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Enseignant.prototype, "FullInfos", {
        get: function () {
            return "".concat(this.nom, " ").concat(this.prenom, ", ").concat(this.adresse.FullAdresse, ", Sp\u00E9cialit\u00E9: ").concat(this.specialite, ", Statut: ").concat(this.statut);
        },
        enumerable: false,
        configurable: true
    });
    return Enseignant;
}(Personne));
