// src/classes/planet.class.ts

enum ResourceType {
    Water,
    Oxygen,
    Minerals,
    Unknown,
  }
  
  class Planet {
    constructor(public name: string, public resourceType: ResourceType, public dangerLevel: number) {}
  
    explore(): void {
      console.log(`Exploring ${this.name}...`);
      // Simulate exploration logic here
    }
  }
  
  export { Planet, ResourceType };
  