// src/main.ts

import  Spaceship  from "./interfaces/spaceship.interface";
import { Planet, ResourceType } from "./clases/planet.class";
import { Event, EventType } from "./clases/event.class";
import { navigate } from "./utils/exploration.utils";
import { ResourceCollection } from "./utils/resource.collection";
import { handleEvent } from "./utils/event.handler";
import { getUserInput } from "./utils/user.input";
import { simulateTime } from "./utils/simulation";

// Crear una instancia de la nave espacial
const mySpaceship: Spaceship = {
  health: 100,
  cargoCapacity: 200,
  speed: 10,
};

// Crear algunos planetas
const earth = new Planet("Earth", ResourceType.Water, 2);
const mars = new Planet("Mars", ResourceType.Oxygen, 5);
const moon = new Planet("Moon", ResourceType.Minerals, 1);

// Explorar algunos planetas
earth.explore();
mars.explore();
moon.explore();

// Crear algunos eventos
const asteroidImpact = new Event(EventType.AsteroidImpact, 8);
const alienEncounter = new Event(EventType.AlienEncounter, 6);
const solarFlare = new Event(EventType.SolarFlare, 3);

// Manejar eventos
handleEvent(asteroidImpact);
handleEvent(alienEncounter);
handleEvent(solarFlare);

// Navegar en diferentes direcciones
navigate('North');
navigate('East');
navigate('South');
navigate('West');

// Simular el paso del tiempo
simulateTime(5);

// Obtener entrada del usuario
const userInput = getUserInput();
console.log(`User input: ${userInput}`);

// Crear una colección de recursos y añadir algunos recursos
const resourceCollection = new ResourceCollection<string>();
resourceCollection.add('Water');
resourceCollection.add('Oxygen');
resourceCollection.add('Minerals');

// Mostrar todos los recursos en la colección
console.log("Resources:", resourceCollection.getAll());

