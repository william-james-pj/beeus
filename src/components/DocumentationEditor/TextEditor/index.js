import dynamic from 'next/dynamic';
import styles from './textEditor.module.scss';

import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), { ssr: false });

const options = {
  buttonList: [
    ['bold', 'underline', 'italic', 'strike'],
    ['subscript', 'superscript'],
    ['font', 'fontSize'],
    ['fontColor', 'hiliteColor'],
    ['align', 'lineHeight'],
    ['list', 'indent', 'outdent', 'horizontalRule'],
    ['link', 'image'],
    ['paragraphStyle', 'blockquote'],
    ['fullScreen', 'preview', 'codeView'],
    ['removeFormat'],
    ['undo', 'redo'],
  ],
};

export const TextEditor = ({ onChange }) => {
  return (
    <div className={styles.textEditor}>
      <SunEditor
        name="content"
        lang={'pt_br'}
        setOptions={options}
        placeholder="Por favor digite aqui..."
        setDefaultStyle="font-size:20px;"
        onChange={(e) => {
          onChange({ target: { name: 'content', value: e } });
        }}
      />
    </div>
  );
};
