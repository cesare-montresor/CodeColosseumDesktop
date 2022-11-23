import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { EditorViewComponent } from './editor-view/editor-view.component';
import { MonacoEditorModule } from 'ngx-monaco-editor';
import { FormsModule } from '@angular/forms';

const routes = [
  { path: '', component: EditorViewComponent }
];

@NgModule({
  declarations: [
    EditorViewComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MonacoEditorModule.forRoot(), // use forRoot() in main app module only.
    FormsModule
  ],
  exports:[
    EditorViewComponent
  ]
})
export class EditorModule { }
