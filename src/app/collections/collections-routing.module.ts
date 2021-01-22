import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CollectionsHomeComponent } from './collections-home/collections-home.component';

const routes: Routes = [{ path: '', component: CollectionsHomeComponent }];

// collections

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CollectionsRoutingModule {}
