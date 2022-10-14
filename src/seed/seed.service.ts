import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service';
import { BrandsService } from '../brands/brands.service';
import { BRANDS_SEED, CARS_SEED } from './data';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandsService,
  ) {}

  populateDB() {
    this.carsService.seedCars(CARS_SEED);
    this.brandsService.seedBrands(BRANDS_SEED);

    return `Seed executed successfully`;
  }
}
