"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TroisPoints = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(abs, ord) {
        this.abs = abs;
        this.ord = ord;
    }
    Object.defineProperty(Point.prototype, "_abs", {
        //get et set
        get: function () {
            return this.abs;
        },
        set: function (value) {
            this.abs = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "_ord", {
        get: function () {
            return this.ord;
        },
        set: function (value) {
            this.ord = value;
        },
        enumerable: false,
        configurable: true
    });
    // fonction calcul distance
    Point.prototype.calculerDistance = function (p) {
        return Math.sqrt(Math.pow(this._abs - p._abs, 2) + Math.pow(this._ord - p._ord, 2));
    };
    // ex4 méthode statique
    Point.distance = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    };
    // ex5 fonction calculerMilieu
    Point.prototype.calculerMilieu = function (p) {
        return new Point((this._abs + p._abs) / 2, (this._ord + p._ord) / 2);
    };
    Point.prototype.afficher = function () {
        return "(".concat(this._abs, ", ").concat(this._ord, ")");
    };
    return Point;
}());
exports.Point = Point;
//6
var TroisPoints = /** @class */ (function () {
    function TroisPoints(premier, deuxieme, troisieme) {
        this.premier = premier;
        this.deuxieme = deuxieme;
        this.troisieme = troisieme;
    }
    Object.defineProperty(TroisPoints.prototype, "_premier", {
        get: function () {
            return this.premier;
        },
        set: function (value) {
            this.premier = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "_deuxieme", {
        get: function () {
            return this.deuxieme;
        },
        set: function (value) {
            this.deuxieme = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TroisPoints.prototype, "_troisieme", {
        get: function () {
            return this.troisieme;
        },
        set: function (value) {
            this.troisieme = value;
        },
        enumerable: false,
        configurable: true
    });
    TroisPoints.prototype.TesterAlignement = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.deuxieme.calculerDistance(this.troisieme);
        if (AB === AC + BC || AC === AB + BC || BC === AC + AB) {
            return true;
        }
        else
            return false;
    };
    //exo8
    TroisPoints.prototype.estIsocele = function () {
        var AB = this.premier.calculerDistance(this.deuxieme);
        var AC = this.premier.calculerDistance(this.troisieme);
        var BC = this.premier.calculerDistance(this.troisieme);
        if (AB === AC || AB === BC || AC === BC) {
            return true;
        }
        else
            return false;
    };
    return TroisPoints;
}());
exports.TroisPoints = TroisPoints;
