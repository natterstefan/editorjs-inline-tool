/* eslint-disable @typescript-eslint/explicit-function-return-type */
import * as EditorJS from '@editorjs/editorjs'

type Props = {
  sanitize?: {}
  shortcut?: string
  tagName: string
  toolboxIcon: string
}

/**
 * GenericInlineTool returns an EditorJS.InlineTool capable of wrapping a
 * selected text with any given `tagName`.
 *
 * basic structure of the class below is inspired by
 * - https://github.com/editor-js/marker/blob/c306bcb33c88eaa3c172eaf387fbcd06ae6b297f/src/index.js
 *
 * @param {String} tagName - tag which should wrap the selected text
 * @return {EditorJS.InlineTool}
 */
const createGenericInlineTool = ({
  sanitize,
  shortcut,
  tagName,
  toolboxIcon,
}: Props) => {
  return class GenericInlineTool implements EditorJS.InlineTool {
    private api: EditorJS.API = null

    private button: HTMLButtonElement = null

    private tag: string = null

    private iconClasses: {
      active: string
      base: string
    } = null

    /**
     * Specifies Tool as Inline Toolbar Tool
     *
     * @return {boolean}
     */
    public static isInline = true

    /**
     * @param {{api: object}}  - Editor.js API
     */
    constructor({ api }: { api: EditorJS.API }) {
      this.api = api

      /**
       * Toolbar Button
       *
       * @type {HTMLElement|null}
       */
      this.button = null

      /**
       * Tag that should is rendered in the editor
       *
       * @type {string}
       */
      this.tag = tagName

      /**
       * CSS classes
       */
      this.iconClasses = {
        base: this.api.styles.inlineToolButton,
        active: this.api.styles.inlineToolButtonActive,
      }
    }

    /**
     * Create button element for Toolbar
     *
     * @return {HTMLButtonElement}
     */
    render(): HTMLButtonElement {
      this.button = document.createElement('button')
      this.button.type = 'button'
      this.button.classList.add(this.iconClasses.base)
      this.button.innerHTML = this.toolboxIcon

      return this.button
    }

    /**
     * Wrap/Unwrap selected fragment
     *
     * @param {Range} range - selected fragment
     */
    surround(range: Range) {
      if (!range) {
        return
      }

      const termWrapper = this.api.selection.findParentTag(this.tag)

      /**
       * If start or end of selection is in the highlighted block
       */
      if (termWrapper) {
        this.unwrap(termWrapper)
      } else {
        this.wrap(range)
      }
    }

    /**
     * Wrap selection with term-tag
     *
     * @param {Range} range - selected fragment
     */
    wrap(range: Range) {
      /**
       * Create a wrapper for given tagName
       */
      const strongElement = document.createElement(this.tag)

      /**
       * SurroundContent throws an error if the Range splits a non-Text node with only one of its boundary points
       * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Range/surroundContents}
       *
       * // range.surroundContents(span);
       */
      strongElement.appendChild(range.extractContents())
      range.insertNode(strongElement)

      /**
       * Expand (add) selection to highlighted block
       */
      this.api.selection.expandToTag(strongElement)
    }

    /**
     * Unwrap term-tag
     *
     * @param {HTMLElement} termWrapper - term wrapper tag
     */
    unwrap(termWrapper: HTMLElement) {
      /**
       * Expand selection to all term-tag
       */
      this.api.selection.expandToTag(termWrapper)

      const sel = window.getSelection()
      const range = sel.getRangeAt(0)

      const unwrappedContent = range.extractContents()

      /**
       * Remove empty term-tag
       */
      termWrapper.parentNode.removeChild(termWrapper)

      /**
       * Insert extracted content
       */
      range.insertNode(unwrappedContent)

      /**
       * Restore selection
       */
      sel.removeAllRanges()
      sel.addRange(range)
    }

    /**
     * Check and change Term's state for current selection
     */
    checkState() {
      const termTag = this.api.selection.findParentTag(this.tag)

      this.button.classList.toggle(this.iconClasses.active, !!termTag)

      return !!termTag
    }

    /**
     * Get Tool icon's SVG
     * @return {string}
     */
    get toolboxIcon() {
      return toolboxIcon
    }

    /**
     * Sanitizer rule
     * @return {Object.<string>} {Object.<string>}
     */
    static get sanitize() {
      return sanitize
    }

    /**
     * Set a shortcut
     */
    public get shortcut() {
      return shortcut
    }
  }
}

export default createGenericInlineTool
