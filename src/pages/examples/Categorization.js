import React from 'react';
import {categorization} from '@jsonforms/examples';
import {JsonForms} from '@jsonforms/react';
import {Provider} from 'react-redux';
import Typography from "@material-ui/core/Typography";
import Demo from "../../common/Demo";
import {createJsonFormsStore} from "../../common/store";


const CategorizationExample = () => {

  const store = createJsonFormsStore({
    data: {
      name: 'Max Power',
      vegetarian: true,
      birthDate: '1956-05-12',
      nationality: 'US'
    },
    schema: categorization.schema,
    uischema: categorization.uischema
  });

  return (
    <div>
      <Typography variant={'h4'}>
        Categorization Control
      </Typography>
      <Provider store={store}>
        <Demo
          schema={categorization.schema}
          uischema={categorization.uischema}
          js={() => (
            <JsonForms />
          )}
        />
      </Provider>
    </div>
  );
};

export default CategorizationExample;
