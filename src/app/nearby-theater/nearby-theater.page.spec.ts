import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NearbyTheaterPage } from './nearby-theater.page';

describe('NearbyTheaterPage', () => {
  let component: NearbyTheaterPage;
  let fixture: ComponentFixture<NearbyTheaterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyTheaterPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NearbyTheaterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
