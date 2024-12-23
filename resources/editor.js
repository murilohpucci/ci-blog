import { ClassicEditor } from '@ckeditor/ckeditor5-editor-classic/dist/index.js'
import { Autoformat } from '@ckeditor/ckeditor5-autoformat/dist/index.js'
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles/dist/index.js'
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote/dist/index.js'
import { Base64UploadAdapter } from '@ckeditor/ckeditor5-upload/dist/index.js'
import { Essentials } from '@ckeditor/ckeditor5-essentials/dist/index.js'
import { FontSize, FontFamily, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font/dist/index.js'
import { Heading } from '@ckeditor/ckeditor5-heading/dist/index.js'
import { Image, ImageResize, ImageCaption, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image/dist/index.js'
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent/dist/index.js'
import { Link } from '@ckeditor/ckeditor5-link/dist/index.js'
import { List } from '@ckeditor/ckeditor5-list/dist/index.js'
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed/dist/index.js'
import { Mention } from '@ckeditor/ckeditor5-mention/dist/index.js'
import { Paragraph } from '@ckeditor/ckeditor5-paragraph/dist/index.js'
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office/dist/index.js'
import { Table, TableToolbar, TableColumnResize } from '@ckeditor/ckeditor5-table/dist/index.js'
import { TextTransformation } from '@ckeditor/ckeditor5-typing/dist/index.js'
import { SourceEditing } from "@ckeditor/ckeditor5-source-editing/dist/index.js"

import '@ckeditor/ckeditor5-theme-lark/dist/index.css'
import '@ckeditor/ckeditor5-clipboard/dist/index.css'
import '@ckeditor/ckeditor5-core/dist/index.css'
import '@ckeditor/ckeditor5-engine/dist/index.css'
import '@ckeditor/ckeditor5-enter/dist/index.css'
import '@ckeditor/ckeditor5-paragraph/dist/index.css'
import '@ckeditor/ckeditor5-select-all/dist/index.css'
import '@ckeditor/ckeditor5-typing/dist/index.css'
import '@ckeditor/ckeditor5-ui/dist/index.css'
import '@ckeditor/ckeditor5-undo/dist/index.css'
import '@ckeditor/ckeditor5-upload/dist/index.css'
import '@ckeditor/ckeditor5-utils/dist/index.css'
import '@ckeditor/ckeditor5-watchdog/dist/index.css'
import '@ckeditor/ckeditor5-widget/dist/index.css'
import '@ckeditor/ckeditor5-editor-classic/dist/index.css'
import '@ckeditor/ckeditor5-essentials/dist/index.css'
import '@ckeditor/ckeditor5-adapter-ckfinder/dist/index.css'
import '@ckeditor/ckeditor5-autoformat/dist/index.css'
import '@ckeditor/ckeditor5-basic-styles/dist/index.css'
import '@ckeditor/ckeditor5-block-quote/dist/index.css'
import '@ckeditor/ckeditor5-ckbox/dist/index.css'
import '@ckeditor/ckeditor5-ckfinder/dist/index.css'
import '@ckeditor/ckeditor5-cloud-services/dist/index.css'
import '@ckeditor/ckeditor5-easy-image/dist/index.css'
import '@ckeditor/ckeditor5-heading/dist/index.css'
import '@ckeditor/ckeditor5-image/dist/index.css'
import '@ckeditor/ckeditor5-indent/dist/index.css'
import '@ckeditor/ckeditor5-link/dist/index.css'
import '@ckeditor/ckeditor5-list/dist/index.css'
import '@ckeditor/ckeditor5-media-embed/dist/index.css'
import '@ckeditor/ckeditor5-paragraph/dist/index.css'
import '@ckeditor/ckeditor5-paste-from-office/dist/index.css'
import '@ckeditor/ckeditor5-table/dist/index.css'
import '@ckeditor/ckeditor5-typing/dist/index.css'
import '@ckeditor/ckeditor5-mention/dist/index.css'

ClassicEditor.create(
    document.querySelector( '#editor' ),
    {
        plugins: [
            Autoformat,
            BlockQuote,
            Bold,
            Essentials,
            FontSize,
            FontFamily,
            FontColor,
            FontBackgroundColor,
            Heading,
            Image,
            ImageCaption,
            ImageResize,
            ImageStyle,
            ImageToolbar,
            ImageUpload,
            Base64UploadAdapter,
            Indent,
            IndentBlock,
            Italic,
            Link,
            List,
            MediaEmbed,
            Mention,
            Paragraph,
            PasteFromOffice,
            PictureEditing,
            Table,
            TableColumnResize,
            TableToolbar,
            TextTransformation,
            SourceEditing
        ],
        licenseKey: 'GPL',
        toolbar: [
            'undo',
            'redo',
            '|',
            'heading',
            '|',
            'fontSize',
            'fontFamily',
            'fontColor',
            'fontBackgroundColor',
            '|',
            'bold',
            'italic',
            '|',
            'link',
            'uploadImage',
            'insertTable',
            'blockQuote',
            'mediaEmbed',
            '|',
            'bulletedList',
            'numberedList',
            '|',
            'outdent',
            'indent',
            '|',
            'sourceEditing',
        ],
        heading: {
            options: [
                {
                    model: 'paragraph',
                    title: 'Paragraph',
                    class: 'ck-heading_paragraph'
                },
                {
                    model: 'heading1',
                    view: 'h1',
                    title: 'Heading 1',
                    class: 'ck-heading_heading1'
                },
                {
                    model: 'heading2',
                    view: 'h2',
                    title: 'Heading 2',
                    class: 'ck-heading_heading2'
                },
                {
                    model: 'heading3',
                    view: 'h3',
                    title: 'Heading 3',
                    class: 'ck-heading_heading3'
                },
                {
                    model: 'heading4',
                    view: 'h4',
                    title: 'Heading 4',
                    class: 'ck-heading_heading4'
                }
            ]
        },
        image: {
            resizeOptions: [
                {
                    name: 'resizeImage:original',
                    label: 'Default image width',
                    value: null
                },
                {
                    name: 'resizeImage:50',
                    label: '50% page width',
                    value: '50'
                },
                {
                    name: 'resizeImage:75',
                    label: '75% page width',
                    value: '75'
                }
            ],
            toolbar: [
                'imageTextAlternative',
                'toggleImageCaption',
                '|',
                'imageStyle:inline',
                'imageStyle:wrapText',
                'imageStyle:breakText',
                '|',
                'resizeImage'
            ]
        },
        link: {
            addTargetToExternalLinks: true,
            defaultProtocol: 'https://'
        },
        table: {
            contentToolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
        }
    }
)
    .then( editor => {
        window.editor = editor
    } )
    .catch( error => {
        console.error( error.stack )
    } )
