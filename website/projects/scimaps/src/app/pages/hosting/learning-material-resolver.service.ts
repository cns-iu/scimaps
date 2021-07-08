import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

interface LearningMaterial {
  title: string;
  content: string;
  image: {
    sm: string,
    lg: string
  };
}
@Injectable({
  providedIn: 'root'
})
export class LearningMaterialResolverService implements Resolve<LearningMaterial[]> {

  constructor() { }


  resolve(): LearningMaterial[] | Observable<LearningMaterial[]> | Promise<LearningMaterial[]> {
    throw new Error('Method not implemented.');
  }
}
