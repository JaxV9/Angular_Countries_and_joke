import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JokeDisplayComponent } from './joke-display.component';

describe('JokeDisplayComponent', () => {
  let component: JokeDisplayComponent;
  let fixture: ComponentFixture<JokeDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JokeDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JokeDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
