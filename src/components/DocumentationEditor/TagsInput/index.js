import { FieldArray, FormikProvider } from 'formik';
import styles from './tagsInput.module.scss';

export const TagsInput = ({ formik }) => {
  const handleTagsWrite = (event, arrayHelpers) => {
    if (event.key !== 'Enter') return;

    event.preventDefault();
    const value = event.target.value;
    if (!value.trim()) return;

    arrayHelpers.push(value);
    event.target.value = '';
  };
  return (
    <FormikProvider value={formik}>
      <FieldArray
        name="tags"
        render={(arrayHelpers) => (
          <div className={styles.tagsInput}>
            {formik.values.tags.map((tag, index) => (
              <div className={styles.tagItem} key={index}>
                <span className={styles.tagText}>{tag}</span>
                <span
                  className={styles.close}
                  onClick={() => arrayHelpers.remove(index)}
                >
                  &times;
                </span>
              </div>
            ))}
            <input
              type="text"
              placeholder="Tags do documento aqui..."
              className={styles.inputText}
              onKeyDown={(e) => handleTagsWrite(e, arrayHelpers)}
            />
          </div>
        )}
      />
    </FormikProvider>
  );
};
