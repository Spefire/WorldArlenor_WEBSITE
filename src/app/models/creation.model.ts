export const LIST_RACES = [
	{
		id: 1,
		name: "Humain",
		pe: 6,
		nbPointsSkills: 51
	},
	{
		id: 2,
		name: "Elfe",
		pe: 8,
		nbPointsSkills: 50
	},
	{
		id: 3,
		name: "Nain",
		pe: 8,
		nbPointsSkills: 52
	},
	{
		id: 4,
		name: "Mutant",
		pe: 8,
		nbPointsSkills: 52
	},
	{
		id: 5,
		name: "Pan",
		pe: 12,
		nbPointsSkills: 52
	},
	{
		id: 6,
		name: "Arlénien",
		pe: 10,
		nbPointsSkills: 53
	}
];

export const LIST_ARMORS = [
	{
		id: 1,
		name: "Vêtements renforcés",
		defenceBonus: 2,
		mobility: "Normale",
		actionsMalus: 0
	},
	{
		id: 2,
		name: "Armure lègère (cuir, cottes de mailles)",
		defenceBonus: 4,
		mobility: "Normale",
		actionsMalus: -2
	},
	{
		id: 3,
		name: "Armure lourde (cuirasse, armure complète)",
		defenceBonus: 6,
		mobility: "Réduite",
		actionsMalus: -4
	}
];

export const LIST_WEAPONS = [
	{
		id: 1,
		name: "Lame courte (dague)",
		attackBonus: 2,
		defenceBonus: 2,
		category: "Légère"
	},
	{
		id: 2,
		name: "Arme à une main (épée longue, hache)",
		attackBonus: 4,
		defenceBonus: 0,
		category: "Moyenne"
	},
	{
		id: 3,
		name: "Arme à deux mains (espadon, grande hache)",
		attackBonus: 6,
		defenceBonus: -2,
		category: "Lourde"
	},
	{
		id: 4,
		name: "Arme d'hast (lance, hallebarde)",
		attackBonus: 3,
		defenceBonus: 1,
		category: "Lourde"
	},
	{
		id: 5,
		name: "Arme contondante (matraque, bâton)",
		attackBonus: 1,
		defenceBonus: 2,
		category: "Légère ou Moyenne"
	},
	{
		id: 6,
		name: "Arc",
		attackBonus: 2,
		count: 1,
		cooldown: "Rapide",
		zone: 25
	},
	{
		id: 7,
		name: "Arbalète",
		attackBonus: 4,
		count: 1,
		cooldown: "Action",
		zone: 35
	},
	{
		id: 8,
		name: "Fronde",
		attackBonus: 0,
		count: 1,
		cooldown: "Rapide",
		zone: 10
	},
	{
		id: 9,
		name: "Armes de lancer (couteaux)",
		attackBonus: 2,
		count: 1,
		cooldown: "Rapide",
		zone: 5
	},
	{
		id: 10,
		name: "Armes à feu lègere (pistolet)",
		attackBonus: 4,
		count: 4,
		cooldown: "Action",
		zone: 20
	},
	{
		id: 11,
		name: "Armes à feu lourde (fusil)",
		attackBonus: 6,
		count: 2,
		cooldown: "Action",
		zone: 150
	},
	{
		id: 12,
		name: "Bouclier",
		defenceBonus: 2,
		mobility: "Normale",
		actionsMalus: -2
	}
];

export const LIST_CRYSTALS = [
	{
		id: 1,
		rank: "S",
		rarity: "Unique",
		power: "Extrême",
		EV: 5,
		demiPV: 10,
		demiEV: 3
	},
	{
		id: 2,
		rank: "A",
		rarity: "Rare",
		power: "Forte",
		EV: 3,
		demiPV: 5,
		demiEV: 2
	},
	{
		id: 3,
		rank: "B",
		rarity: "Peu rare",
		power: "Moyenne",
		EV: 2,
		demiPV: 3,
		demiEV: 1
	},
	{
		id: 4,
		rank: "C",
		rarity: "Commune",
		power: "Faible",
		EV: 1,
		demiPV: 1,
		demiEV: 0
	},
	{
		id: 5,
		rank: "D",
		rarity: "Très commune",
		power: "Nulle",
		EV: 0,
		demiPV: 0,
		demiEV: 0
	}
];