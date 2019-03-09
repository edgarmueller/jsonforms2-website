import React from 'react';
import { Link } from 'gatsby';
import _ from 'lodash';
import Typography from "@material-ui/core/Typography";
import Layout from '../../components/layout'

const Docs = () => {
  return (
    <Layout>
      <div className='docs__main'>
        <div className='docs__main-inner'>
          <div>
            <Typography variant="h1">Documentation</Typography>
            <ul className='docs__sidebar'>
              <li><Link to='/docs/intro'>Intro</Link></li>
              <li><Link to='/docs/getting-started'>Getting started</Link></li>
              <li><Link to='/docs/tutorial'>Tutorial</Link></li>
              <li><Link to='/docs/tutorial-typescript'>Tutorial (Typescript)</Link></li>
              <li><Link to='/docs/uischema/controls'>Controls</Link></li>
              <li><Link to='/docs/uischema/layouts'>Layouts</Link></li>
              <li><Link to='/docs/uischema/rules'>Rules</Link></li>
              <li><Link to='/docs/custom-renderers'>Custom renderers</Link></li>
              <li><Link to='/docs/providing-uischemas'>Providing UI schemas</Link></li>
              <li><Link to='/docs/renderer-sets'>Renderer sets</Link></li>
              <li><Link to='/docs/store'>Store</Link></li>
              <li><Link to='/docs/api'>API Documentation</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Docs;
