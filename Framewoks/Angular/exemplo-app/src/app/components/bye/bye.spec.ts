import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bye } from './bye';

describe('Bye', () => {
  let component: Bye;
  let fixture: ComponentFixture<Bye>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bye],
    }).compileComponents();

    fixture = TestBed.createComponent(Bye);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
