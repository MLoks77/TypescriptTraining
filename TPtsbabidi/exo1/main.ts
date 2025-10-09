import { Point, TroisPoints } from './tptypescript';

// a tester :
// Point -> calculerDistance, calculerMilieu, afficher
// TroisPoints -> TesterAlignement, estIsocele

export class TestExercice {
    static testerClassPoint(): void {
        console.log("test class point");
        console.log(" ")
        // Partie1
        const pointA = new Point(1, 2);
        const pointB = new Point(4, 6);
        console.log("Point A",pointA.afficher());
        console.log("Point B",pointB.afficher());
        console.log(" ")
        // Setter 2
        pointA._abs-3;
        pointB._ord-5;
        console.log('Point A modifié', pointA.afficher());
        console.log(" ")
        // Getter 3
        const distanceB = pointA.calculerDistance(pointB);
        console.log('Distance AB', distanceB);
        console.log(" ")
        // méthode statique
        const distanceStatique = Point.distance(1, 2, 4, 6);
        console.log("Distance statique 1 2 4 6", distanceStatique);
        console.log(" ")
        //partie 5 calcul du milieu
        const milieu = pointA.calculerMilieu(pointB);
        console.log("Milieu AB",milieu.afficher())
        console.log("FIN Class Point -------------------------")
    }

    static testerTroisPoints(): void {
        console.log("tester Class Trois Points")
        // Partie définition des points et distances
        const pointA = new Point(1, 5);
        const pointB = new Point(4, 6);
        const pointC = new Point(1, 8);
        console.log("Point A",pointA.afficher());
        console.log("Point B",pointB.afficher());
        console.log("Point C",pointC.afficher());
        console.log(" ")
        // Setter avec Partie abscisse et ordonnée de A B C :
        pointA._abs = 1;
        pointA._ord = 6;

        pointB._abs = 5;
        pointB._ord = 7;
        
        pointC._abs = 3;
        pointC._ord = 9;
        // Getter avec distance entre points
        const distanceAB = pointA.calculerDistance(pointB);
        const distanceAC = pointA.calculerDistance(pointC);
        const distanceBC = pointB.calculerDistance(pointC);
        console.log("Distance AB :", distanceAB);
        console.log("Distance AC :", distanceAC);
        console.log("Distance BC :", distanceBC);
        // méthode Alignement
        // création objet de la classe TroisPoints avec les points A, B et C.
        const troisPoints = new TroisPoints(pointA, pointB, pointC);
        const alignement = troisPoints.TesterAlignement();
        console.log("Alignement des 3 points", alignement); // true = aligner / false = pas aligner, fonctionne
        console.log(" ")
        // méthode isocèle
        const isocele = troisPoints.estIsocele(); // je réutilise la const troisPoints
        console.log("Isocèle ?", isocele); // true = isocele / false = pas isocele, fonctionne 
        console.log(" ")
    }

    static runTests(): void {
        console.log('début des exercices');
        this.testerClassPoint();
        this.testerTroisPoints();
    }
}

TestExercice.runTests();
