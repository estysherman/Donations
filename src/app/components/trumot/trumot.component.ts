import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { Router } from '@angular/router';
import { Truma } from 'src/app/models/truma.model';
import { TrumaService } from 'src/app/services/truma.service';

@Component({
  selector: 'app-trumot',
  templateUrl: './trumot.component.html',
  styleUrls: ['./trumot.component.css']
})
export class TrumotComponent implements OnInit {

  @ViewChild(MatAccordion) accordion!: MatAccordion;
  trumot!: Truma[];
  isEdit: boolean = false;

  constructor(private trumaService: TrumaService,
    private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.trumaService.getTrumot().subscribe(
      data => {
        this.trumot = data;
        this.trumot.forEach(x => x.isEdit = false);
      }
    )
  }

  addTruma() {
    this.router.navigate(['/truma-card']);
  }

}
