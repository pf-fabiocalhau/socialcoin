import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatInputModule,
    MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule
    ],
  exports: [
        MatButtonModule,
        MatCheckboxModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatListModule,
        MatSelectModule,
        MatInputModule,
        MatCardModule
    ],
})
export class MaterialModule {}
