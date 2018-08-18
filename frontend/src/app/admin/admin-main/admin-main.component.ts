import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.scss']
})
export class AdminMainComponent {

  activeId = 'dashboard';

  public onTabChange($event: NgbTabChangeEvent) {
    this.router.navigate([$event.nextId], {relativeTo: this.activatedRoute});
  };

  constructor(private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute) {
      this.getActiveIdFromUrl();
  }

  getActiveIdFromUrl() {
    if (!this.activatedRoute.parent) {
      return;
    }
    const basePath = this.activatedRoute.parent.snapshot.routeConfig.path;
    const fullUrl = window.location.href;
    const path = fullUrl.slice(fullUrl.lastIndexOf(basePath)).replace(`${basePath}/`, '');
    this.activeId = path;
  }

}
