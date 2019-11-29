import createGenericInlineTool from './tool'

export const ItalicInlineTool = createGenericInlineTool({
  sanitize: {
    em: {},
  },
  shortcut: 'CMD+I',
  tagName: 'EM',
  toolboxIcon:
    // icon editor-js uses
    '<svg class="icon icon--italic" width="34px" height="34px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#italic"></use></svg>',
})

export const StrongInlineTool = createGenericInlineTool({
  sanitize: {
    strong: {},
  },
  shortcut: 'CMD+B',
  tagName: 'STRONG',
  toolboxIcon:
    // icon editor-js uses
    '<svg class="icon icon--bold" width="12px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold"></use></svg>',
})
