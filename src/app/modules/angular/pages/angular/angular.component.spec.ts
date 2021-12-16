import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularComponent } from './angular.component';

describe('AngularComponent', () => {
  let component: AngularComponent;
  let fixture: ComponentFixture<AngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularComponent ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have as title \'personal-project\'', () => {
    const fixture = TestBed.createComponent(AngularComponent);
    const component = fixture.componentInstance;
    expect(component.title).toEqual('personal-project');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AngularComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('personal-project app is running!');
  });
});
