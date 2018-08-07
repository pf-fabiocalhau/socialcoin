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
    MatCardModule,
    MatProgressSpinnerModule,
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule 
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
        MatCardModule,
        MatProgressSpinnerModule,    MatTableModule, 
        MatPaginatorModule, 
        MatSortModule 
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
        MatCardModule,
        MatProgressSpinnerModule,
        MatTableModule, 
        MatPaginatorModule, 
        MatSortModule 
    ],
})
export class MaterialModule {}
