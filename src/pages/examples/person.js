import React from 'react';
import {person} from '@jsonforms/examples';
import {JsonForms} from '@jsonforms/react';
import {Provider} from 'react-redux';
import {createJsonFormsStore} from "../../common/store";
import Demo from "../../components/common/Demo";
import ExampleLayout from '../../components/exampleLayout';

const Person = () => {

  const store = createJsonFormsStore({
    data: person.data,
    schema: person.schema,
    uischema: person.uischema
  });

  console.log("wwwwwwaaat")

  return (
    <ExampleLayout>
      <div className='example'>
        <Provider store={store}>
          <Demo
            js={() => <JsonForms />}
            schema={person.schema}
            uischema={person.uischema}
          />
        </Provider>
      </div>
    </ExampleLayout>
  );
};

export default Person;