import { NodeModel, CollectionValueModel } from '../../kit'

export default class FigureModel extends NodeModel {
  hasPanels () {
    return this._node.panels.length > 0
  }

  getPanels () {
    return new CollectionValueModel(this._api, [this._node.id, 'panels'], 'figure-panel')
  }

  getCurrentPanelIndex () {
    const node = this._node
    let currentPanelIndex = 0
    if (node.state) {
      currentPanelIndex = node.state.currentPanelIndex
    }
    return currentPanelIndex
  }

  addPanel (file) {
    const api = this._api
    const panels = this.getPanels()
    const index = this.getCurrentPanelIndex()
    api._insertFigurePanel(file, panels, index)
  }

  removePanel () {
    const api = this._api
    const panels = this.getPanels()
    const index = this.getCurrentPanelIndex()
    const panel = panels.getItemAt(index)
    api._removeFigurePanel(panel, panels)
  }
}
