import {
  BasePackage as SubstanceBasePackage,
  MultiSelectPackage,
  TextPropertyEditor,
  SchemaDrivenCommandManager,
  substanceGlobals
} from 'substance'

import EntityLabelsPackage from '../entities/EntityLabelsPackage'
import TextureArticlePackage from '../article/TextureArticlePackage'
import Editor from './components/Editor'
import TextNodeComponent from './components/TextNodeComponent'
import PlainTextComponent from './components/PlainTextComponent'
import UnsupportedNodeComponent from './components/UnsupportedNodeComponent'
import UnsupportedInlineNodeComponent from './components/UnsupportedInlineNodeComponent'

import AbstractComponent from './components/AbstractComponent'
import AffiliationsListComponent from './components/AffiliationsListComponent'
import AuthorsListComponent from './components/AuthorsListComponent'
import EditorsListComponent from './components/EditorsListComponent'
import BackComponent from './components/BackComponent'
import BodyComponent from './components/BodyComponent'
import BreakComponent from './components/BreakComponent'
import ContainerNodeComponent from './components/ContainerNodeComponent'
import ElementNodeComponent from './components/ElementNodeComponent'
import FigComponent from './components/FigComponent'
import CaptionComponent from './components/CaptionComponent'
import FrontComponent from './components/FrontComponent'
import GraphicComponent from './components/GraphicComponent'
import DispQuoteComponent from './components/DispQuoteComponent'
import TableCellComponent from './components/TableCellComponent'
import HeadingComponent from './components/HeadingComponent'
import ManuscriptComponent from './components/ManuscriptComponent'
import TOC from './components/TOC'
import TranslationsComponent from './components/TranslationsComponent'
import FnGroupComponent from './components/FnGroupComponent'
import FnComponent from './components/FnComponent'
import RefListComponent from './components/RefListComponent'
import RefComponent from './components/RefComponent'
import SeparatorComponent from './components/SeparatorComponent'
import SigBlockComponent from './components/SigBlockComponent'
import TitleGroupComponent from './components/TitleGroupComponent'
import XrefComponent from './components/XrefComponent'

substanceGlobals.DEBUG_RENDERING = true

export default {
  name: 'author',
  configure(config) {
    config.import(EntityLabelsPackage)
    config.import(SubstanceBasePackage)
    config.import(MultiSelectPackage)
    config.import(TextureArticlePackage)

    // EXPERIMENTAL:
    // a CommandManager that uses the xmlSchema to inhibit commands
    // which would generate disallowed content
    config.setCommandManagerClass(SchemaDrivenCommandManager)

    // Experimental
    config.setLabelGenerator('references', {
      template: '[$]',
      and: ',',
      to: '-',
    })
    config.setLabelGenerator('figures', {
      name: 'Figure',
      plural: 'Figures',
      and: ',',
      to: '-',
    })
    config.setLabelGenerator('tables', {
      name: 'Table',
      plural: 'Tables',
      and: ',',
      to: '-',
    })
    config.setLabelGenerator('footnotes', {
      template: '$',
      and: ',',
      to: '-',
    })

    // Base functionality
    config.addComponent('text-node', TextNodeComponent)
    config.addComponent('text-property-editor', TextPropertyEditor)
    config.addComponent('plain-text-property', PlainTextComponent)
    config.addComponent('container', ContainerNodeComponent)
    config.addComponent('heading', HeadingComponent)
    config.addComponent('unsupported', UnsupportedNodeComponent)
    config.addComponent('unsupported-inline-node', UnsupportedInlineNodeComponent)

    // Node components
    config.addComponent('abstract', AbstractComponent)
    config.addComponent('affiliations-list', AffiliationsListComponent)
    config.addComponent('authors-list', AuthorsListComponent)
    config.addComponent('editors-list', EditorsListComponent)
    config.addComponent('translations', TranslationsComponent)
    config.addComponent('back', BackComponent)
    config.addComponent('body', BodyComponent)
    config.addComponent('break', BreakComponent)
    config.addComponent('caption', CaptionComponent)
    config.addComponent('col', ElementNodeComponent)
    config.addComponent('colgroup', ElementNodeComponent)
    config.addComponent('disp-quote', DispQuoteComponent)
    config.addComponent('front', FrontComponent)
    config.addComponent('fig', FigComponent)
    config.addComponent('fn', FnComponent)
    config.addComponent('fn-group', FnGroupComponent)
    config.addComponent('graphic', GraphicComponent)
    config.addComponent('ref', RefComponent)
    config.addComponent('ref-list', RefListComponent)
    config.addComponent('separator', SeparatorComponent)
    config.addComponent('sig-block', SigBlockComponent)
    config.addComponent('table', ElementNodeComponent)
    config.addComponent('table-wrap', FigComponent)
    config.addComponent('tbody', ElementNodeComponent)
    config.addComponent('td', TableCellComponent)
    config.addComponent('tfoot', ElementNodeComponent)
    config.addComponent('th', TableCellComponent)
    config.addComponent('thead', ElementNodeComponent)
    config.addComponent('title-group', TitleGroupComponent)
    config.addComponent('toc', TOC)
    config.addComponent('tr', ElementNodeComponent)
    config.addComponent('xref', XrefComponent)

    // Panels and other displays
    config.addComponent('manuscript', ManuscriptComponent)

    config.addLabel('cite', 'Cite')
    config.addLabel('insert-xref-bibr', 'Reference')
    config.addLabel('insert-xref-fig', 'Figure')
    config.addLabel('insert-xref-table', 'Table')
    config.addLabel('insert-xref-fn', 'Footnote')
    config.addLabel('insert-disp-quote', 'Blockquote')

    config.addLabel('manuscript-start', 'Article starts here')
    config.addLabel('manuscript-end', 'Article ends here')
    config.addLabel('sig-block-start', 'Signature Block starts here')
    config.addLabel('sig-block-end', 'Signature Block ends here')

    config.addLabel('view', 'View')
    config.addLabel('toggle-abstract', '${showOrHide} Abstract')
    config.addLabel('toggle-authors', '${showOrHide} Authors')
    config.addLabel('toggle-references', '${showOrHide} References')
    config.addLabel('toggle-footnotes', '${showOrHide} Footnotes')

    config.addLabel('insert-column', 'Insert column')
    config.addLabel('insert-row', 'Insert row')
    config.addLabel('remove-column', 'Remove column')
    config.addLabel('remove-row', 'Remove row')

    config.addLabel('add-reference-title', 'Add Reference(s)')
    config.addLabel('add-ref-manually', 'Or create manually')
    config.addLabel('fetch-datacite', 'Fetch from DataCite')
    config.addLabel('enter-doi-placeholder', 'Enter one or more DOIs')
    config.addLabel('doi-fetch-action', 'Add')
    config.addLabel('import-refs', 'Import')
    config.addLabel('supported-ref-formats', 'Supported formats')



  },
  Editor
}
