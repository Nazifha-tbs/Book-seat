import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheaterSeatMapPage } from './theater-seat-map.page';

describe('TheaterSeatMapPage', () => {
  let component: TheaterSeatMapPage;
  let fixture: ComponentFixture<TheaterSeatMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterSeatMapPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheaterSeatMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
