import ToyotaCamry from '../Cars/ToyotaCamry.webp';
import AudiA4 from '../Cars/AudiA4.webp';
import BMW3Series from '../Cars/BMW3Series.webp';
import ChevroletCorvette from '../Cars/ChevroletCorvette.webp';
import FordMustangGT from '../Cars/FordMustangGT.webp';
import HondaCivic from '../Cars/HondaCivic.webp';
import HyundaiCreta from '../Cars/HyundaiCreta.webp';
import KiaSeltos from '../Cars/KiaSeltos.webp';
import MarutiSuzukiSwift from '../Cars/MarutiSuzukiSwift.webp';
import MercedesBenzCClass from '../Cars/MercedesBenzCClass.webp';
import TataNexon from '../Cars/TataNexon.webp';
import ToyotaFortuner from '../Cars/ToyotaFortuner.webp';

const cars = [
  {
    id: 1,
    name: "Toyota Camry",
    image: ToyotaCamry,
    type: "sedan",
    gear: "automatic",
    fuel: "petrol",
    charges: 45,
    model: "2024",
  },
  {
    id: 2,
    name: "Honda Civic",
    image: HondaCivic,
    type: "sedan",
    gear: "automatic",
    fuel: "petrol",
    charges: 40,
    model: "2024",
  },
  {
    id: 3,
    name: "Hyundai Creta",
    image: HyundaiCreta,
    type: "suv",
    gear: "automatic",
    fuel: "petrol",
    charges: 50,
    model: "2024",
  },
  {
    id: 4,
    name: "Kia Seltos",
    image: KiaSeltos,
    type: "suv",
    gear: "automatic",
    fuel: "diesel",
    charges: 52,
    model: "2024",
  },
  {
    id: 5,
    name: "Toyota Fortuner",
    image: ToyotaFortuner,
    type: "suv",
    gear: "automatic",
    fuel: "diesel",
    charges: 80,
    model: "2024",
  },
  {
    id: 6,
    name: "Ford Mustang GT",
    image: FordMustangGT,
    type: "sports",
    gear: "automatic",
    fuel: "petrol",
    charges: 120,
    model: "2024",
  },
  {
    id: 7,
    name: "Chevrolet Corvette",
    image: ChevroletCorvette,
    type: "sports",
    gear: "automatic",
    fuel: "petrol",
    charges: 150,
    model: "2024",
  },
  {
    id: 8,
    name: "BMW 3 Series",
    image: BMW3Series,
    type: "luxury",
    gear: "automatic",
    fuel: "petrol",
    charges: 90,
    model: "2024",
  },
  {
    id: 9,
    name: "Mercedes-Benz C-Class",
    image: MercedesBenzCClass,
    type: "luxury",
    gear: "automatic",
    fuel: "petrol",
    charges: 100,
    model: "2024",
  },
  {
    id: 10,
    name: "Audi A4",
    image: AudiA4,
    type: "luxury",
    gear: "automatic",
    fuel: "petrol",
    charges: 95,
    model: "2024",
  },
  {
    id: 11,
    name: "Maruti Suzuki Swift",
    image: MarutiSuzukiSwift,
    type: "hatchback",
    gear: "manual",
    fuel: "petrol",
    charges: 30,
    model: "2024",
  },
  {
    id: 12,
    name: "Tata Nexon",
    image: TataNexon,
    type: "crossover",
    gear: "manual",
    fuel: "petrol",
    charges: 38,
    model: "2024",
  },
];

export { cars };