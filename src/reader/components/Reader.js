import { AbstractEditor } from 'substance'

export default class Reader extends AbstractEditor {

  // didMount() {
  //   super.didMount()
  //   this.handleActions({
  //     'switchContext': this._switchContext
  //   })
  //
  //   // HACK: we need to re-evaluate command states, now that the UI has mounted
  //   this.editorSession.commandManager._updateCommandStates(this.editorSession)
  //
  //   DefaultDOMElement.getBrowserWindow().on('resize', this._showHideTOC, this)
  //   this.tocProvider.on('toc:updated', this._showHideTOC, this)
  //   this._showHideTOC()
  //   this._restoreViewport()
  // }

  // didUpdate() {
  //   super.didUpdate()
  //   this._showHideTOC()
  //   this._restoreViewport()
  // }

  // getViewport() {
  //   return {
  //     x: this.refs.contentPanel.getScrollPosition()
  //   }
  // }

  // _restoreViewport() {
  //   if (this.props.viewport) {
  //     this.refs.contentPanel.setScrollPosition(this.props.viewport.x)
  //   }
  //
  //   // HACK: This should work without a timeout, however it seems that
  //   // Editor.didMount is called earlier than the didMounts of the different
  //   // surfaces which do the surface registering, required here.
  //   setTimeout(() => {
  //     // We also use this place to rerender the selection
  //     let editorSession = this.editorSession
  //     let focusedSurface = editorSession.getFocusedSurface()
  //     if (focusedSurface) {
  //       focusedSurface.rerenderDOMSelection()
  //     }
  //   })
  // }

  // _dispose() {
  //   let doc = this.editorSession.getDocument()
  //   super._dispose()
  //   DefaultDOMElement.getBrowserWindow().off(this)
  //   this.tocProvider.off(this)
  //   delete doc.referenceManager
  // }

  // _initialize(props) {
  //   super._initialize(props)
  //   let editorSession = props.editorSession
  //   let doc = editorSession.getDocument()
  //
  //   this.referenceManager = new ReferenceManager({
  //     labelGenerator: editorSession.getConfigurator().getLabelGenerator('references'),
  //     editorSession,
  //     pubMetaDbSession: props.pubMetaDbSession
  //   })
  //
  //   // HACK: we need to expose referenceManager somehow, so it can be used in
  //   // the JATSExporter. We may want to consider including referenceManager in
  //   // TextureDocument instead.
  //   doc.referenceManager = this.referenceManager
  //
  //   this.figureManager = new FigureManager({
  //     labelGenerator: editorSession.getConfigurator().getLabelGenerator('figures'),
  //     editorSession
  //   })
  //   this.tableManager = new TableManager({
  //     labelGenerator: editorSession.getConfigurator().getLabelGenerator('tables'),
  //     editorSession
  //   })
  //   this.footnoteManager = new FootnoteManager({
  //     labelGenerator: editorSession.getConfigurator().getLabelGenerator('footnotes'),
  //     editorSession
  //   })
  // }
  // getChildContext() {
  //   return Object.assign({}, super.getChildContext(), {
  //     referenceManager: this.referenceManager,
  //     figureManager: this.figureManager,
  //     tableManager: this.tableManager,
  //     footnoteManager: this.footnoteManager
  //   })
  // }

  /*
    Switches the state of the context panel
  */
  _switchContext(state) {
    this.refs.contextSection.setState(state)
  }

  render($$) {
    let el = $$('div').addClass('sc-reader')
    el.append(
      'READER'
    )
    return el
  }

  // _renderContentPanel($$) {
  //   const doc = this.editorSession.getDocument()
  //   const configurator = this.getConfigurator()
  //   const ManuscriptComponent = this.getComponent('manuscript')
  //   const Overlay = this.getComponent('overlay')
  //   const ContextMenu = this.getComponent('context-menu')
  //   const Dropzones = this.componentRegistry.get('dropzones', 'strict')
  //
  //   const article = doc.get('article')
  //
  //   let contentPanel = $$(ScrollPane, {
  //     tocProvider: this.tocProvider,
  //     // scrollbarType: 'substance',
  //     contextMenu: 'custom',
  //     scrollbarPosition: 'right',
  //     highlights: this.contentHighlights,
  //   }).ref('contentPanel')
  //
  //   contentPanel.append(
  //     $$(ManuscriptComponent, {
  //       node: article,
  //       disabled: this.props.disabled
  //     }).ref('article'),
  //     $$(Overlay, {
  //       toolPanel: configurator.getToolPanel('main-overlay'),
  //       theme: 'dark'
  //     }),
  //     $$(ContextMenu, {
  //       toolPanel: configurator.getToolPanel('context-menu'),
  //       theme: 'dark'
  //     }),
  //     $$(Dropzones)
  //   )
  //   return contentPanel
  // }


}
