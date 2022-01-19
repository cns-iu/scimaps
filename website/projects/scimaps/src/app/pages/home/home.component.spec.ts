import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconTestingModule } from '@angular/material/icon/testing';
import { ActivatedRoute } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { of } from 'rxjs';
import { HomeComponent } from './home.component';
import { HomeModule } from './home.module';

const cta = {
    title: 'title',
    subtitle: 'subtitle',
    body: 'body',
    buttonLink: 'buttonLink',
    buttonLabel: 'buttonLabel',
    imageSource: 'imageSource'
};

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    beforeEach(() => {
        const route = {
            data: of({
                homeBody: {
                    cta
                }
            })
        };
        TestBed.configureTestingModule({
            schemas: [NO_ERRORS_SCHEMA],
            imports: [HomeModule, MatIconTestingModule, MarkdownModule.forRoot()],
            providers: [{ provide: ActivatedRoute, useValue: route }]
        }).compileComponents();
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
    });

    it('can load instance', () => {
        expect(component).toBeTruthy();
    });
    it('should set actionCard variables correctly', () => {
        fixture.detectChanges();
        expect(component.actionCard).toBeTruthy();
        expect(component.actionCard.title).toEqual(cta.title);
        expect(component.actionCard.subtitle).toEqual(cta.subtitle);
        expect(component.actionCard.body).toEqual(cta.body);
        expect(component.actionCard.buttonLabel).toEqual(cta.buttonLabel);
        expect(component.actionCard.buttonLink).toEqual(cta.buttonLink);
    });
});
