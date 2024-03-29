import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Plat } from '../plat.model';
import { PlatService } from '../plat.service';

@Component({
  selector: 'app-plat-liste',
  templateUrl: './plat-liste.component.html',
  styleUrls: ['./plat-liste.component.css']
})
export class PlatListeComponent implements OnInit, OnDestroy {

  plats: Plat[] = [];
  prixVentes: string[] = [];

  private platsSub: Subscription = new Subscription;
  private restoId: string | null | undefined;

  constructor(
    public platsService: PlatService,
    public route: ActivatedRoute,
    private redirect: Router
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("restoId")) {
        this.restoId = paramMap.get("restoId");
        this.platsService.getPlat(this.restoId);
        this.platsSub = this.platsService.getPlatUpdateListener()
          .subscribe(
          (plats: Plat[]) => {
            this.plats = plats;
          })
      } else {
        this.redirect.navigate(['**'])
      }
    })
  }
  ngOnDestroy() {
    this.platsSub.unsubscribe();
  }
}
