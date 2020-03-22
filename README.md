# editorjs-inline-tool

[![npm version](https://badge.fury.io/js/editorjs-inline-tool.svg)](https://badge.fury.io/js/editorjs-inline-tool)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

Create an inline tool for ([https://editorjs.io/][1]) with [text formatting tags](https://www.w3schools.com/html/html_formatting.asp)
(eg. `bold`, `strong`, `em`, `u`, ...).

## Getting started

```sh
npm i editorjs-inline-tool --save

# or
yarn add editorjs-inline-tool
```

## PeerDependencies

You have to install the required peerDependencies, which are listed by the
following command:

```sh
npm info "editorjs-inline-tool" peerDependencies
```

If using npm 5+, use this shortcut:

```sh
npx install-peerdeps --dev editorjs-inline-tool

# or
yarn add editorjs-inline-tool -D --peer
```

## Usage

This is an example where `GenericInlineTool` is used in a React app (using
[@natterstefan/react-editor-js](https://www.npmjs.com/package/@natterstefan/react-editor-js)).
But this should work for any other framework as well.

```jsx
// index.js
import EditorJs from '@natterstefan/react-editor-js'
import Header from '@editorjs/header'
import Paragraph from '@editorjs/paragraph'

import createGenericInlineTool, {
  ItalicInlineTool,
  UnderlineInlineTool,
} from 'editorjs-inline-tool'

const TOOLS = {
  header: Header,
  paragraph: {
    class: Paragraph,
    inlineToolbar: true,
  },
  // add custom tags or overwrite default tools of editorjs by using the same
  // name (eg. `bold` or `italic`)
  bold: {
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
  // or use a pre-defined tool instead
  italic: ItalicInlineTool,
  underline: UnderlineInlineTool,
}

const App = () => {
  return <EditorJs tools={TOOLS} data={data} />
}
```

### Configuration

`createGenericInlineTool` returns an `InlineTool` for `EditorJS`. The following
options are available:

| Name        | Required |   Type   | Default     | Description                                                                                                                                        |
| :---------- | :------: | :------: | :---------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| sanitize    | `false`  | `object` | `undefined` | Object that defines rules for [automatic sanitizing](https://editorjs.io/tools-api#sanitize).                                                      |
| shortcut    | `false`  | `string` | `undefined` | [Shortcut](https://github.com/codex-team/codex.shortcuts) to apply [Tool's render and inserting behaviour](https://editorjs.io/tools-api#shortcut) |
| tagName     |  `true`  | `string` | `undefined` | text [formatting tag](https://www.w3schools.com/html/html_formatting.asp) (eg. `bold`)                                                             |
| toolboxIcon |  `true`  | `string` | `undefined` | Icon for the tools [inline toolbar](https://editorjs.io/inline-tools-api-1#render)                                                                 |

Additionally, there are pre-defined inline tools available: `ItalicInlineTool`,
`StrongInlineTool` and `UnderlineInlineTool` (they can be found
[here](src/inline-tools.tsx)).

## Licence

[MIT](LICENCE)

This project is not affiliated, associated, authorized, endorsed by or in any
way officially connected to EditorJS ([editorjs.io](https://editorjs.io/)).

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://twitter.com/natterstefan"><img src="https://avatars2.githubusercontent.com/u/1043668?v=4" width="100px;" alt="Stefan Natter"/><br /><sub><b>Stefan Natter</b></sub></a><br /><a href="https://github.com/natterstefan/editorjs-inline-tool/commits?author=natterstefan" title="Code">💻</a> <a href="https://github.com/natterstefan/editorjs-inline-tool/commits?author=natterstefan" title="Documentation">📖</a> <a href="#example-natterstefan" title="Examples">💡</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

[1]: https://editorjs.io/
