/* eslint-disable class-methods-use-this */
/* eslint-disable react/prop-types */
import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import EditorJs from '@natterstefan/react-editor-js'

import Readme from '../../README.md'

import data from './data'
import { TOOLS } from './config'

storiesOf('EditorJS GenericInlineTool', module)
  .add('readme', () => <div />, {
    readme: {
      content: Readme,
    },
  })
  .add('default', () => {
    let instance: EditorJS.default = null

    const onChange = () => {
      action('EditorJs onChange')(instance)
    }

    return (
      <EditorJs
        tools={TOOLS}
        data={data}
        onChange={onChange}
        editorInstance={editorInstance => {
          instance = editorInstance
          action('EditorJs editorInstance')(editorInstance)
        }}
      />
    )
  })
