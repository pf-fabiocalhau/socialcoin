import { Component, OnInit, ViewChild, ViewContainerRef, OnDestroy, ComponentRef, ComponentFactory, ComponentFactoryResolver, Type } from '@angular/core';
import { ActivatedRouteSnapshot, Router, NavigationEnd, Event } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {

  @ViewChild("toolbarTarget", {read: ViewContainerRef})
  toolbarTarget: ViewContainerRef;

  toolbarComponents: ComponentRef<Component>[] = new Array<ComponentRef<Component>>();
  routerEventSubscription: Subscription;

  constructor(private router: Router, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.routerEventSubscription = this.router.events.subscribe(
      (event: Event) => {
          if (event instanceof NavigationEnd) {
              this.updateToolbarContent(this.router.routerState.snapshot.root);
          }
      }
  );
  }

  ngOnDestroy(): void {
    this.routerEventSubscription.unsubscribe();
}

private updateToolbarContent(snapshot: ActivatedRouteSnapshot): void {
    this.clearToolbar();
    let toolbar: any = (snapshot.data as {toolbar: Type<Component>}).toolbar;
    if (toolbar instanceof Type) {
        let factory: ComponentFactory<Component> = this.componentFactoryResolver.resolveComponentFactory(toolbar);
        let componentRef: ComponentRef<Component> = this.toolbarTarget.createComponent(factory);
        this.toolbarComponents.push(componentRef);
    }
    for (let childSnapshot of snapshot.children) {
        this.updateToolbarContent(childSnapshot);
    }
}

private clearToolbar() {
    this.toolbarTarget.clear();
    for (let toolbarComponent of this.toolbarComponents) {
        toolbarComponent.destroy();
    }
}

}
