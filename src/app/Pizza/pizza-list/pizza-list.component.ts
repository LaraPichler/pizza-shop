import { Component, OnInit } from '@angular/core';
import {PizzaModel} from "../pizza.model";
import {ActivatedRoute, Router} from "@angular/router";
//import { DataService } from '../../services/data-service.service';

@Component({
  selector: 'app-pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {
  constructor(
  //  private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
 //   this.pizza1 = this.dataService.getClassNames();
  }

  showStudentsOf(classname: string) {
    this.router.navigate(
      ['class-detail', classname] /* {
     relativeTo: this.route,
    }*/
    );
  }

  pizza1 = new PizzaModel(1,'Salami',30,7.5,'assets/img/pizza1.jpg');
  pizza2 = new PizzaModel(2,'Hawaii',300,10.0,'assets/img/pizza2.jpg');
  pizza3 = new PizzaModel(3,'Magarita',10,30.5,'assets/img/pizza3.jpg');

  pizzaArray = [this.pizza1,this.pizza2,this.pizza3];

}
