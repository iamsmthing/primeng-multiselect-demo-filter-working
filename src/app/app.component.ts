import { Component } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { SelectItem, PrimeNGConfig } from "primeng/api";
import { CountryService } from "./countryservice";

interface Query {
  id: number;
  name: string;
}

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [CountryService]
})
export class AppComponent {
  selectedCities: string[] = [];

  selectedCountries1: string[] = [];

  selectedCountries2: string[] = [];

  items: SelectItem[];

  item: string;

  cities: any[];

  countries: any[];
  savedQueries: Query[] = [
    { id: 1, name: 'Query 1' },
    { id: 2, name: 'Query 2' },
    { id: 3, name: 'Query 3' },
    { id: 4, name: 'Query 4' },
    { id: 5, name: 'Query 5' },
  ];

  selectedQueries1: Query[] = [];
  selectedQueries2: Query[] = [];

  get queryOptions1(): Query[] {
    return this.savedQueries.filter((query) => {
      return !this.selectedQueries2.includes(query);
    });
  }

  get queryOptions2(): Query[] {
    return this.savedQueries.filter((query) => {
      return !this.selectedQueries1.includes(query);
    });
  }

  

  constructor(
    private countryService: CountryService,
    private primengConfig: PrimeNGConfig
  ) {
    this.items = [];

    this.countryService.getCountries().then(countries => {
      this.items = countries;
    });

    this.countries = [
      { name: "Australia", code: "AU" },
      { name: "Brazil", code: "BR" },
      { name: "China", code: "CN" },
      { name: "Egypt", code: "EG" },
      { name: "France", code: "FR" },
      { name: "Germany", code: "DE" },
      { name: "India", code: "IN" },
      { name: "Japan", code: "JP" },
      { name: "Spain", code: "ES" },
      { name: "United States", code: "US" }
    ];

    this.cities = [
      { name: "New York", code: "NY" },
      { name: "Rome", code: "RM" },
      { name: "London", code: "LDN" },
      { name: "Istanbul", code: "IST" },
      { name: "Paris", code: "PRS" }
    ];
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
  }
}
