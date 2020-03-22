/**
 * find more available plugins here:
 * - https://www.npmjs.com/search?q=%40editorjs
 * - or https://github.com/editor-js
 *
 * or create your own: https://editorjs.io/the-first-plugin
 */
import CheckList from '@editorjs/checklist'
import Code from '@editorjs/code'
import Delimiter from '@editorjs/delimiter'
import Embed from '@editorjs/embed'
import Image from '@editorjs/image'
import InlineCode from '@editorjs/inline-code'
import LinkTool from '@editorjs/link'
import List from '@editorjs/list'
import Marker from '@editorjs/marker'
import Quote from '@editorjs/quote'
import Raw from '@editorjs/raw'
import SimpleImage from '@editorjs/simple-image'
import Table from '@editorjs/table'
import Warning from '@editorjs/warning'

import { UnderlineInlineTool } from '../inline-tools'

import createGenericInlineTool, { ItalicInlineTool } from '..'

export const TOOLS = {
  embed: Embed,
  table: {
    class: Table,
    // in some cases it is also required to explicitly define `inlineToolbar` _again_
    inlineToolbar: ['bold', 'italic', 'link'],
  },
  list: {
    class: List,
    inlineToolbar: ['bold', 'italic', 'link'],
  },
  warning: Warning,
  code: Code,
  linkTool: LinkTool,
  image: Image,
  raw: Raw,
  quote: Quote,
  marker: Marker,
  checklist: CheckList,
  delimiter: Delimiter,
  inlineCode: InlineCode,
  simpleImage: SimpleImage,
  // overwrite default tools of editorjs by using the same name
  bold: {
    // use createGenericInlineTool
    class: createGenericInlineTool({
      sanitize: {
        strong: {},
      },
      shortcut: 'CMD+B',
      tagName: 'STRONG',
      toolboxIcon:
        '<svg class="icon icon--bold" width="12px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold"></use></svg>',
    }),
  },
  // or use a pre-defined tool
  italic: ItalicInlineTool,
  underline: UnderlineInlineTool,
}
