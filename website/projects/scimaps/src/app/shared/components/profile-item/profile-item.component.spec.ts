import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfileItemComponent } from './profile-item.component';
import { Profile } from '../../../core/models/profile';
import { ProfileItemModule } from './profile-item.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

export const testProfile: Profile =     {
  name: 'Name Surname',
  title: 'Job Title',
  affiliation: 'Affiliation',
  body: 'Lorem ipsum dolor sit amet',
  link: 'www.google.com',
  slug: 'name-surname',
  image: 'image.jpg',
  roles: ['maker'],
  location_name: 'California',
  region: 'n_america'
};

describe('ProfileItemComponent', () => {
  let component: ProfileItemComponent;
  let fixture: ComponentFixture<ProfileItemComponent>;
  let el: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileItemModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileItemComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
  });

  it('should create component', () => {
    component.profile = testProfile;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  describe('compact = true', () => {
    beforeEach(() => {
      component.profile = testProfile;
      component.compact = true;
      fixture.detectChanges();
    });
    it('should have correct profile name', () => {
      const profileName = el.query(By.css('.profile-name'));
      expect(profileName).toBeTruthy();
      expect(profileName.nativeElement.textContent).toContain(testProfile.name);
    });
    it('should have correct profile title', () => {
      const profilTitle = el.query(By.css('.profile-title'));
      expect(profilTitle).toBeTruthy();
      expect(profilTitle.nativeElement.textContent).toContain(testProfile.title);
    });
    it('should have correct profile affiliation', () => {
      const profileAffiliation = el.query(By.css('.profile-affiliation'));
      expect(profileAffiliation).toBeTruthy();
      expect(profileAffiliation.nativeElement.textContent).toContain(testProfile.affiliation);
    });
    it('should have correct profile image', () => {
      const profileImage = el.query(By.css('.profile-image'));
      expect(profileImage).toBeTruthy();
      expect(profileImage.nativeElement.alt).toContain(testProfile.image);
    });
    it('should NOT have profile body', () => {
      const profileBody = el.query(By.css('.profile-body'));
      expect(profileBody).toBeFalsy();
    });
  });

  describe('compact = False',  () => {
    beforeEach(() => {
      component.profile = testProfile;
      component.compact = false;
      fixture.detectChanges();
    });
    it('should have profile body', () => {
      const profileBody = el.query(By.css('.profile-body'));
      expect(profileBody).toBeTruthy();
    });
    it('should NOT have profile affiliation', () => {
      const profileAffiliation = el.query(By.css('.profile-affiliation'));
      expect(profileAffiliation).toBeFalsy();
    });
  });

  describe('Body Content', () => {
    beforeEach(() => {
      component.profile = testProfile;
      component.compact = true;
      component.maxContentLength = 10;
      fixture.detectChanges();
    });
    it ('should have hasLongContent True', () => {
      expect(component.hasLongContent).toBeTrue();
    });
    it ('should have correct partial content', () => {
      expect(component.partialContent).toEqual(testProfile.body.substr(0, component.maxContentLength) + ' ...');
    });
    it ('should have correct full content', () => {
      expect(component.fullContent).toEqual(testProfile.body);
    });
  });

  describe('hasLongContent should be False', () => {
    beforeEach(() => {
      const testProfile2 = {...testProfile, body: 'test Body'};
      component.profile = testProfile2;
      component.compact = true;
      component.maxContentLength = 10;
      fixture.detectChanges();
    });
    it ('should have proper hasLongContent False', () => {
      expect(component.hasLongContent).toBeFalse();
    });
  });
});
