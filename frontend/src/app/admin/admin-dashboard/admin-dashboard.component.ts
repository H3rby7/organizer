import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbTabChangeEvent, NgbTabset } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent {

  activeId = '';

  public onTabChange($event: NgbTabChangeEvent) {
    if ($event.nextId === '') {
      return this.router.navigate(['./'], {relativeTo: this.activatedRoute});
    }
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
