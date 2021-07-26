import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
    
    private storedRoutes:{ [key: string]: DetachedRouteHandle} = {}; 

    shouldDetach(route: ActivatedRouteSnapshot): boolean {
        if (route.routeConfig) {
            return true;
        } else {
           return false;
        }
    }
    store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
        if (route.routeConfig && route.routeConfig.path) {
            this.storedRoutes[route.routeConfig.path] = handle;
        }
    }
    shouldAttach(route: ActivatedRouteSnapshot): boolean {
        if (route.routeConfig && route.routeConfig.path) {
            return !!route.routeConfig && !!this.storedRoutes[route.routeConfig.path];
        } else {
            return false;
        }
    }
    retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle | null {
        if (route.routeConfig && route.routeConfig.path) {
            return this.storedRoutes[route.routeConfig.path];
        } else {
            return null
        }
    }
    shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
      return future.routeConfig == curr.routeConfig;
    }
  }