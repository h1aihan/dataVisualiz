import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChildren,
  QueryList,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
} from '@angular/animations';
import * as ace from 'ace-builds';
import * as codeSnippets from './code-snippet.json';
const THEME = 'ace/theme/dracula';
@Component({
  selector: 'app-stack',
  animations: [
    trigger('lastElement', [
      state('lastElement', style({ color: 'black' })),
      transition('void => lastElement', [
        animate(
          '1s',
          keyframes([
            style({
              color: 'rgb(12, 168, 12)',
              opacity: 1,
              transform: 'translateX(100%)',
              offset: 0,
            }),
            style({
              color: 'rgb(12, 168, 12)',
              opacity: 1,
              transform: 'translateX(-15px)',
              offset: 0.5,
            }),
            style({
              color: 'rgb(12, 168, 12)',
              opacity: 1,
              transform: 'translateX(0)',
              offset: 1.0,
            }),
          ])
        ),
      ]),
      transition('lastElement => void', [
        animate(
          '2s',
          keyframes([
            style({
              color: 'red',
              opacity: 1,
              transform: 'translateX(90%)',
              offset: 0.5,
            }),
            style({
              color: 'red',
              opacity: 0,
              transform: 'translateX(100%)',
              offset: 0.8,
            }),
          ])
        ),
      ]),
    ]),
  ],
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss'],
})
export class StackComponent implements AfterViewInit {
  @ViewChildren('codeEditor', { read: ElementRef })
  codeEditors!: QueryList<ElementRef>;
  constructor() {}

  inputValue = '';
  numInput: string;
  stack: (string | number)[] = [1, 2, 3];
  codeSnippets: string[] = codeSnippets.snippets;
  codeEdiotrsArray: ace.Ace.Editor[] = [];

  ngAfterViewInit(): void {
    this.setAceEditor();
  }

  setAceEditor(): void {
    ace.config.set('basePath', '/assets/ui/');
    ace.config.set('modePath', '');
    ace.config.set('themePath', '');
    ace.config.set('workerPath', '');
    const editorOptions: Partial<ace.Ace.EditorOptions> = {
      highlightActiveLine: false,
      readOnly: true,
      minLines: 2,
      maxLines: 30,
    };
    let snippetIte = 0;
    this.codeEditors.forEach((div: ElementRef) => {
      const code = this.codeSnippets[snippetIte];
      const element = div.nativeElement;
      const language = div.nativeElement.getAttribute('class').split(' ')[1];
      const editor = ace.edit(element, editorOptions);
      this.codeEdiotrsArray.push(editor);
      editor.setTheme(THEME);
      if (language === 'ts') {
        editor.getSession().setMode('ace/mode/typescript');
      } else if (language === 'html') {
        editor.getSession().setMode('ace/mode/html');
      }
      editor.setValue(code, 1);
      snippetIte++;
    });
  }

  onKey(event: any): void {
    this.inputValue = event.target.value;
  }

  onClickPush(): void {
    if (!this.inputValue) {
      return;
    }
    this.stack.push(this.inputValue);
    this.inputValue = '';
    this.numInput = '';
  }

  onClickPop(): void {
    this.stack.pop();
  }
}
