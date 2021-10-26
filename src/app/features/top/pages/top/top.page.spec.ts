import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPage } from './top.page';

describe('TopPage', () => {
  let component: TopPage;
  let fixture: ComponentFixture<TopPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPage ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
