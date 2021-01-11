import { RouterModule } from '@angular/router';
import { MatchDetailsComponent } from './match-details/match-details.component';

export const routing = RouterModule.forChild([
    { path: '', component: MatchDetailsComponent }
]);
