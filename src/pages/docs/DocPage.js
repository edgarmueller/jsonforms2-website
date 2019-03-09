import React from "react";
import { Link } from "gatsby";
import PrismAware from "../../components/common/PrismAware";
import withStyles from "@material-ui/core/styles/withStyles";
import Layout from "../../components/layout";

class DocPage extends PrismAware {
  render() {
    return (
      <Layout>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <ul className="docs__sidebar">
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
          <div style={{ display: 'flex', flexDirection: 'column' }} className="docs__main">
            <div className="docs__main-inner">
              {this.props.children}
              <Link
                to='/docs'
                className={['link', 'doc-link'].join(' ')}
              >
                Back to TOC
            </Link>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default withStyles({
  link: {
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: '1.25rem'
  }
})(DocPage);
