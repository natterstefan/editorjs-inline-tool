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
    '<svg class="icon icon--bold" width="12px" height="14px"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#bold"></use></svg>',
})

export const UnderlineInlineTool = createGenericInlineTool({
  sanitize: {
    u: {},
  },
  tagName: 'U',
  // icon taken from https://github.com/mui-org/material-ui/blob/4fba0dafd30f608937efa32883d151ba01fc9681/packages/material-ui-icons/src/FormatUnderlined.js
  toolboxIcon:
    '<svg width="34" height="34" viewBox="-8 0 38 24"><path d="M12 17c3.31 0 6-2.69 6-6V3h-2.5v8c0 1.93-1.57 3.5-3.5 3.5S8.5 12.93 8.5 11V3H6v8c0 3.31 2.69 6 6 6zm-7 2v2h14v-2H5z"></path></svg>',
})
