import { Component } from '@angular/core';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';

@Component({
  selector: 'edit-file',
  templateUrl: './edit-file.component.html',
  styleUrls: ['./edit-file.component.scss']
})
export class EditFileComponent {
  private textContent: string = '';

  constructor() {
    this.textContent = `
# Title 1

Write in *italic* or in **bold** !
\`inline code\`
    `
   }
}
