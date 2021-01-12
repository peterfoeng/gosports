import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatchDetailsSyncComponent } from './match-details-sync.component';

describe('MatchDetailsComponent', () => {
    let component: MatchDetailsSyncComponent;
    let fixture: ComponentFixture<MatchDetailsSyncComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MatchDetailsSyncComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MatchDetailsSyncComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
