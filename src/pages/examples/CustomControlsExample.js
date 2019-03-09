import React from 'react';
import { Link } from 'gatsby';
import { day3 } from '@jsonforms/examples';
import { registerRenderer } from '@jsonforms/core';
import { JsonForms } from '@jsonforms/react';
import { Provider } from 'react-redux';
import Typography from "@material-ui/core/Typography";

import {Demo} from '../../components/common'
import {createJsonFormsStore} from "../../common/store";
import ratingControlTester from "../../components/examples/ratingControlTester";
import RatingControl from "../../components/examples/RatingControl"

const CustomControlsExample = () => {

  const store = createJsonFormsStore({
    data: day3.data,
    schema: day3.schema,
    uischema: day3.uischema
  });

  store.dispatch(registerRenderer(ratingControlTester, RatingControl));

  return (
    <div className='example'>
      <Typography variant='body1'>
        This example demonstrates that the default renderers of JSON Forms can be replaced with custom ones.
        We've replaced the default renderer for integers (which have a maximum value of 5 here) with one
        display stars (at the bottom of the form).
      </Typography>
      <Typography variant='body1'>
        You can read more about custom
        controls <Link to='/docs/custom-renderers' className='link'>here</Link>.
      </Typography>
      <Provider store={store}>
        <Demo
          schema={day3.schema}
          uischema={day3.uischema}
          js={() => (
            <JsonForms />
          )}
        />
      </Provider>
    </div>
  );
};

export default CustomControlsExample;
