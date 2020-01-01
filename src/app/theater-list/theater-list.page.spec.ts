import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheaterListPage } from './theater-list.page';

describe('TheaterListPage', () => {
  let component: TheaterListPage;
  let fixture: ComponentFixture<TheaterListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheaterListPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheaterListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
