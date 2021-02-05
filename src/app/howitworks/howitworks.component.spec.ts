import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HowitworksComponent } from './howitworks.component';

describe('HowitworksComponent', () => {
  let component: HowitworksComponent;
  let fixture: ComponentFixture<HowitworksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowitworksComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HowitworksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
