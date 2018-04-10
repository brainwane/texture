import { getQueryStringParam, substanceGlobals, platform } from 'substance'
import { TextureWebApp, Reader } from 'substance-texture'

window.addEventListener('load', () => {
  substanceGlobals.DEBUG_RENDERING = platform.devtools
  TextureReaderApp.mount({
    archiveId: getQueryStringParam('archive') || 'kitchen-sink',
    storageType: getQueryStringParam('storage') || 'vfs',
    storageUrl: getQueryStringParam('storageUrl') || '/archives'
  }, window.document.body)
})

/*
  NOTE: We start with a dynamic approach for implementing the relevant components
  However, we can also render Reader to a string to build a static page.
*/
class TextureReaderApp extends TextureWebApp {
  render($$) {
    let el = $$('div').addClass('sc-reader-app')
    let { archive } = this.state
    
    if (archive) {
      let editorSession = archive.getEditorSession('manuscript')
      el.append(
        $$(Reader, {
          editorSession
        })
      )
    } else {
      // LOADING...
    }
    return el
  }
}
