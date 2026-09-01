import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quillText',
})
export class QuillTextPipe implements PipeTransform {
  transform(value: { ops: { insert: unknown }[] } | null): unknown {
    if (!value?.ops) {
      return '';
    }

    return value.ops
      .map((op) => (typeof op.insert === 'string' ? op.insert : ''))
      .join('')
      .replace(/\s+/g, ' ')
      .trim();
  }
}
