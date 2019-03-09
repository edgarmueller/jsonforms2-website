import React from 'react';
import { Link } from 'gatsby';
import {generateUISchema} from '@jsonforms/examples';
import {JsonForms} from '@jsonforms/react';
import {generateDefaultUISchema, generateJsonSchema} from '@jsonforms/core';
import {Provider} from 'react-redux';
import {Demo} from "../../components/common";
import {createJsonFormsStore} from "../../common/store";
import Typography from "@material-ui/core/Typography/Typography";

const GenerateUISchemaExample = () => {

  const schema = generateJsonSchema(generateUISchema.data);
  const uischema = generateDefaultUISchema(schema);

  const store = createJsonFormsStore({
    data: generateUISchema.data,
    schema,
    uischema,
  });

  return (
    <div className='example'>
      <Typography variant='body1'>
        If you provide no UI schema to JSON Forms it'll generate one. The generated layout will be
        a <Link to={'/docs/uischema/layouts#vertical-layout'} className='link'>VerticalLayout</Link> containing
        controls for the provided JSON schema.
      </Typography>

      <Provider store={store}>
        <Demo
          schema={schema}
          uischema={uischema}
          js={() =>
            <JsonForms />
          }
        />
      </Provider>
    </div>
  );
};

export default GenerateUISchemaExample;