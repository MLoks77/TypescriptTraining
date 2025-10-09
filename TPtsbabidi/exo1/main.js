"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestExercice = void 0;
var tptypescript_1 = require("./tptypescript");
// a tester :
// Point -> calculerDistance, calculerMilieu, afficher
// TroisPoints -> TesterAlignement, estIsocele
var TestExercice = /** @class */ (function () {
    function TestExercice() {
    }
    TestExercice.testerClassPoint = function () {
        console.log("test class point");
        console.log(" ");
        // Partie1
        var pointA = new tptypescript_1.Point(1, 2);
        var pointB = new tptypescript_1.Point(4, 6);
        console.log("Point A", pointA.afficher());
        console.log("Point B", pointB.afficher());
        console.log(" ");
        // Setter 2
        pointA._abs - 3;
        pointB._ord - 5;
        console.log('Point A modifié', pointA.afficher());
        console.log(" ");
        // Getter 3
        var distanceB = pointA.calculerDistance(pointB);
        console.log('Distance AB', distanceB);
        console.log(" ");
        // méthode statique
        var distanceStatique = tptypescript_1.Point.distance(1, 2, 4, 6);
        console.log("Distance statique 1 2 4 6", distanceStatique);
        console.log(" ");
        //partie 5 calcul du milieu
        var milieu = pointA.calculerMilieu(pointB);
        console.log("Milieu AB", milieu.afficher());
        console.log("FIN Class Point -------------------------");
    };
    TestExercice.testerTroisPoints = function () {
        console.log("tester Class Trois Points");
        // Partie définition des points et distances
        var pointA = new tptypescript_1.Point(1, 5);
        var pointB = new tptypescript_1.Point(4, 6);
        var pointC = new tptypescript_1.Point(1, 8);
        console.log("Point A", pointA.afficher());
        console.log("Point B", pointB.afficher());
        console.log("Point C", pointC.afficher());
        console.log(" ");
        // Setter avec Partie abscisse et ordonnée de A B C :
        pointA._abs = 1;
        pointA._ord = 6;
        pointB._abs = 5;
        pointB._ord = 7;
        pointC._abs = 3;
        pointC._ord = 9;
        // Getter avec distance entre points
        var distanceAB = pointA.calculerDistance(pointB);
        var distanceAC = pointA.calculerDistance(pointC);
        var distanceBC = pointB.calculerDistance(pointC);
        console.log("Distance AB :", distanceAB);
        console.log("Distance AC :", distanceAC);
        console.log("Distance BC :", distanceBC);
        // méthode Alignement
        // création objet de la classe TroisPoints avec les points A, B et C.
        var troisPoints = new tptypescript_1.TroisPoints(pointA, pointB, pointC);
        var alignement = troisPoints.TesterAlignement();
        console.log("Alignement des 3 points", alignement); // true = aligner / false = pas aligner, fonctionne
        console.log(" ");
        // méthode isocèle
        var isocele = troisPoints.estIsocele(); // je réutilise la const troisPoints
        console.log("Isocèle ?", isocele); // true = isocele / false = pas isocele, fonctionne 
        console.log(" ");
    };
    TestExercice.runTests = function () {
        console.log('début des exercices');
        this.testerClassPoint();
        this.testerTroisPoints();
    };
    return TestExercice;
}());
exports.TestExercice = TestExercice;
TestExercice.runTests();
