var Adresse = /** @class */ (function () {
    function Adresse(rue, cp, ville) {
        this.rue = rue;
        this.cp = cp;
        this.ville = ville;
    }
    Object.defineProperty(Adresse.prototype, "Rue", {
        get: function () {
            return this.rue;
        },
        set: function (rue) {
            this.rue = rue;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "Cp", {
        get: function () {
            return this.cp;
        },
        set: function (cp) {
            this.cp = cp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "Ville", {
        get: function () {
            return this.ville;
        },
        set: function (ville) {
            this.ville = ville;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Adresse.prototype, "FullAdresse", {
        get: function () {
            return "".concat(this.rue, ", ").concat(this.cp, " ").concat(this.ville);
        },
        enumerable: false,
        configurable: true
    });
    return Adresse;
}());
