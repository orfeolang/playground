import { autocompletion, closeBrackets, closeBracketsKeymap, completionKeymap } from '@codemirror/autocomplete'
import { defaultKeymap, history, historyKeymap, indentWithTab } from '@codemirror/commands'
import { highlightSelectionMatches, searchKeymap } from '@codemirror/search'
import { EditorState, Compartment } from '@codemirror/state'
import { bracketMatching, defaultHighlightStyle, foldGutter, foldKeymap, indentOnInput, indentUnit, syntaxHighlighting } from '@codemirror/language'

import {
  crosshairCursor,
  drawSelection,
  dropCursor,
  EditorView,
  // gutter,
  // GutterMarker,
  highlightActiveLine,
  highlightActiveLineGutter,
  highlightSpecialChars,
  keymap,
  lineNumbers,
  rectangularSelection,
  highlightTrailingWhitespace,
} from '@codemirror/view'

// -------------------------------------------------------------------

// Get the Musicline language.
// NOTE: Change later when importing properly... once the module is published to NPM.
//import {
//  musicline, musiclineHighlightStyle,
//  orfeoError, orfeoErrorHighlightStyle,
//} from './dist/index.js'

/*
const Theme = EditorView.theme({
  "&": {
    fontSize: "10.5pt",
    border: "1px solid #c0c0c0"
  },
  ".cm-content": {
    fontFamily: "Menlo, Monaco, Lucida Console, monospace",
    minHeight: "200px"
  },
  ".cm-gutters": {
    minHeight: "200px"
  },
  ".cm-scroller": {
    overflow: "auto",
    maxHeight: "600px"
  }
});
*/

// 1140 to 1280 (width height for browser)
let myTheme = EditorView.theme({
  "&": {
    fontSize: '22px',
    color: "white",
    backgroundColor: "#282c34", // #1e1f1f
    /* height: '900px', */
    /* width: '50%', */
  },
  ".cm-content": {
    caretColor: "#0e9"
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "pink",
    //borderLeftWidth: '2px', // testing
    //borderLeftPadding: '2px',
  },
  "&.cm-focused .cm-selectionBackground, ::selection": {
    backgroundColor: "#bebfbf",
  },
  ".cm-gutters": {
    backgroundColor: "#045",
    color: "#ddd",
    border: "none"
  },
  ".cm-scroller":
  { overflow: "auto" }
}, { dark: true })


// https://codemirror.net/examples/styling/
// https://github.com/codemirror/theme-one-dark/blob/main/src/one-dark.ts
let myTheme2 = EditorView.theme({
  "&": {
    /* height: '900px', */
    /* width: '50%', */
    color: '#ffffff',
    backgroundColor: "#22252a", // #282c34
  },
  ".cm-content": {
    /* padding: "5px", */
    caretColor: "#d19a66",
  },
  ".cm-content, .cm-gutter": {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: '18px',
  },
  ".cm-gutter": {
    color: "#5c6370",
    backgroundColor: "#282c34",
    /* paddingLeft: "5px", */
  },
  ".cm-activeLineGutter": {
    backgroundColor: "#000000",
    color: "#ff0000",
  },
  ".cm-activeLine": {
    backgroundColor: "#ff00001a" // not done #6699ff0b
  },
  ".cm-selectionMatch": {
    backgroundColor: "#aafe661a" // not done
  },
  "&.cm-focused .cm-cursor": {
    borderLeftColor: "#d19a66",
    borderLeftWidth: '2px',
  },
  ".cm-scroller": {
    overflow: "auto"
  }
}, { dark: true })





const doc = `# asdfa
=4/4 !90
    <abc 89> \`90 d e |
    \\f #g h i j
`

let editor = new EditorView({
  parent: document.querySelector('#orfeo'),
  state: EditorState.create({
    doc: doc,
    extensions: [
      indentUnit.of('    '), // number of spaces affected by tab.
      lineNumbers(),
      highlightActiveLineGutter(),
      history(),
      drawSelection(), // Create a special layer for drawing (instead of native)
      // orfeo(),
      // syntaxHighlighting(orfeoHighlightStyle),
      bracketMatching(), // ADD <> SOMEHOW
      closeBrackets(),  // ADD <> SOMEHOW
      highlightActiveLine(),
      highlightSelectionMatches(),
      keymap.of([ // note sure what these do...
        //...closeBracketsKeymap,
        ...defaultKeymap,
        //...searchKeymap,
        //...historyKeymap,
        //...foldKeymap,
        //...completionKeymap,
        //...lintKeymap,
        indentWithTab, // Talk about the escape HATCH in the docs... https://codemirror.net/examples/tab/
      ]),
      myTheme,
    ],
  }),
})

/*
function switchMonitorLang(lang) {
  let langPack, highlightStyle
  if (lang === 'musicline') {
    langPack = musicline()
    highlightStyle = musiclineHighlightStyle
  } else {
    langPack = orfeoError()
    highlightStyle = orfeoErrorHighlightStyle
  }
  monitor.dispatch({
    effects: [
      language.reconfigure(langPack),
      highlight.reconfigure(syntaxHighlighting(highlightStyle)),
    ]
  })
}

const language = new Compartment()
const highlight = new Compartment()
*/
/*
classic:
    chalky        #e5c07b --
    coral         #e06c75
    dark          #5c6370 --
    error         #f44747
    fountainBlue  #56b6c2
    green         #98c379 -- rgba(152, 195, 121)
    invalid       #ffffff
    lightDark     #7f848e
    lightWhite    #abb2bf
    malibu        #61afef --
    purple        #c678dd --
    whiskey       #d19a66
    deepRed       #be5046 --

vivid
    chalky        #e5c07b
    coral         #ef596f
    dark          #5c6370
    error         #f44747
    fountainBlue  #2bbac5
    green         #89ca78
    invalid       #ffffff
    lightDark     #7f848e
    lightWhite    #abb2bf
    malibu        #61afef
    purple        #d55fde
    whiskey       #d19a66
    deepRed       #be5046
*/

let monitor = new EditorView({
  parent: document.querySelector('#musicline'),
  state: EditorState.create({
    doc: `
--------------------------------------------------------------------------------
===OOPS!=== Error at 3:3
3➤   ⏏$  <abc 89> 90 d e |
Unknown token: $

===OOPS!=== Error between 1:1 and EOF
1➤ ⭢#(
Unexpected end of file.
The block comment opened at 1:1 is not closed.
`,
    extensions: [
      EditorView.lineWrapping,
      EditorView.editable.of(true),
      drawSelection(),
      lineNumbers(),
      highlightActiveLineGutter(),
      highlightTrailingWhitespace(),
      // language.of(orfeoError()),
      // highlight.of(syntaxHighlighting(orfeoErrorHighlightStyle)),
      highlightActiveLine(),
      highlightSelectionMatches(),
      myTheme2,
    ],
  }),
})

// export { editor, monitor, switchMonitorLang } // no for some reason...

// How kosher is this window stuff?
window.editor = editor
window.monitor = monitor
//window.switchMonitorLang = switchMonitorLang

// https://www.raresportan.com/how-to-make-a-code-editor-with-codemirror6/
// https://www.smashingmagazine.com/2022/01/building-web-code-editor/


/*
editor.current.dispatch({
  effects: StateEffect.reconfigure.of(extensions)
});
*/

/*
# --------------------------------------------------------------------
# Musicline 0.2.0 Example
# --------------------------------------------------------------------

    # Short form
    # Timepoint | (EventData)
0  	 si♭
1    fa
2
3    la
4    ré
5    ré !a.sdf.!ff
7
10   My lyre must always play.
12.5 For without music, we are nothing.
15
17.5
20
42   \\42     	 
43

    # Long form
    # Timepoint | Voice | EventType | (EventData)
0    1 marker entrance
0    1 tempo  60
0    1 note   si♭       	 
1    1 note   fa
2    1 rest
3    1 note   la
4    1 note   ré
5    1 note   ré
7    1 rest
10   1 marker text
10   1 note   My lyre must always play.
12.5 1 note   For without music, we are nothing.
15   1 rested We knead the shapes out of nothing.
17.5 1 rested \\  Tunes out of silence, love out of hate.
20   1 rest
42   1 marker answer-of-the-universe
42   1 note   42
43   1 tail      
*/

// https://discuss.codemirror.net/t/cm6-dynamically-switching-syntax-theme-w-reconfigure/2858/7
