type iconNameType =
    'caret--down'
  | 'debug'
  | 'keyboard'
  | 'orfeo'
  | 'redo'
  | 'share'
  | 'trash-can'
  | 'undo'

interface ExampleType {
  name: string,
  orfeo: string,
  musicline: string,
}

export {
  type iconNameType,
  type ExampleType,
}
