import { Component } from '@angular/core';
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/keymap/sublime';

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
`;
  }

}
